import { LatLngBounds, LatLngExpression, Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useMemo, useState } from "react";
import { useAsync } from "react-async-hook";
import {
  Circle,
  ImageOverlay,
  LayerGroup,
  LayersControl,
  MapContainer,
  Pane,
  Polyline,
} from "react-leaflet";
import { segments } from "../../data";
import { useLocationState } from "../../hooks/useLocationState";
import {
  getStravaSegmentStream,
  getStravaSegmentStreams,
} from "../../StravaSegmentRepository";
import { Route, Segment } from "../../types";
import { worldConfigs } from "../../worldConfig";
import styles from "./index.module.css";
import { WorldSelect } from "./WorldSelect";

interface Props {
  mouseHoverDistance: number | undefined;
}

export default function RouteMap({ mouseHoverDistance }: Props) {
  const [locationState] = useLocationState();
  const world = locationState.world;
  const worldConfig = worldConfigs[world.slug];

  const filteredSegments = useMemo(
    () =>
      segments
        .filter((s) => s.world === world.slug)
        .filter((s) => s.stravaSegmentId !== undefined),
    [world]
  );
  const { result: stravaSegmentsInWorld } = useAsync(
    async (fs: Segment[]) => {
      const stravaSegments = await Promise.all(
        fs.map((s) => getStravaSegmentStream(s.slug, "segments", "latlng"))
      );
      return fs.map((s, i) => ({
        ...s,
        stravaData: stravaSegments[i],
      }));
    },
    [filteredSegments]
  );

  const [map, setMap] = useState<Map | undefined>();
  useEffect(() => {
    map?.zoomControl.setPosition("topright");
  }, [map]);

  const { result: routeStravaSegment } = useAsync(
    async (r?: Route) => {
      if (r === undefined) {
        return;
      }

      return await getStravaSegmentStreams(r.slug, "routes", [
        "distance",
        "latlng",
      ]);
    },
    [locationState.route]
  );

  useEffect(() => {
    if (!map || !routeStravaSegment) {
      return;
    }

    const bounds = routeStravaSegment.latlng.reduce(
      (bounds, coord) => bounds.extend(coord),
      new LatLngBounds(
        routeStravaSegment.latlng[0],
        routeStravaSegment.latlng[0]
      )
    );

    map.invalidateSize();
    map.fitBounds(bounds);
  }, [map, routeStravaSegment, worldConfig]);

  useEffect(() => {
    if (!map || !locationState) {
      return;
    }

    const worldConfig = worldConfigs[locationState.world.slug];

    map.invalidateSize();
    map.setMaxBounds(worldConfig.imageBounds);

    const minZoom = map.getBoundsZoom(worldConfig.imageBounds, false);
    map.setMinZoom(minZoom);

    if (!locationState.route) {
      map.fitBounds(worldConfig.initialBounds);
    }
  }, [map, locationState]);

  const pointCoordinates = useMemo<LatLngExpression | undefined>(() => {
    if (!routeStravaSegment || !mouseHoverDistance) {
      return;
    }

    const pointIndex = routeStravaSegment.distance.findIndex(
      (d) => d > mouseHoverDistance
    );
    if (!pointIndex) {
      return;
    }
    return routeStravaSegment.latlng[pointIndex];
  }, [routeStravaSegment, mouseHoverDistance]);

  return (
    <div className={styles.Container}>
      <WorldSelect />
      <MapContainer
        key={locationState.world.slug}
        whenCreated={(map) => setMap(map)}
        bounds={worldConfig.imageBounds}
        style={{ backgroundColor: worldConfig.backgroundColor }}
        maxZoom={19}
        className={styles.MapContainer}
      >
        <ImageOverlay
          url={worldConfig.image}
          bounds={worldConfig.imageBounds}
          attribution='&amp;copy <a href="https://zwift.com" rel="noreferrer noopener">Zwift</a>'
        />

        <Pane name="route">
          {routeStravaSegment && (
            <Polyline
              positions={routeStravaSegment.latlng}
              pathOptions={{ color: "#fc6719", weight: 5 }}
            />
          )}
        </Pane>

        {(stravaSegmentsInWorld ?? []).length > 0 && (
          <LayersControl>
            {(stravaSegmentsInWorld ?? []).filter((s) => s.type === "sprint")
              .length > 0 && (
              <LayersControl.Overlay name="Show sprints">
                <LayerGroup>
                  <Pane name="sprints">
                    {stravaSegmentsInWorld
                      ?.filter((s) => s.type === "sprint")
                      ?.map((s) => (
                        <Polyline
                          key={s.slug}
                          positions={s.stravaData}
                          pathOptions={{ color: "#64ae3c", weight: 5 }}
                        />
                      ))}
                  </Pane>
                </LayerGroup>
              </LayersControl.Overlay>
            )}

            {(stravaSegmentsInWorld ?? []).filter((s) => s.type === "climb")
              .length > 0 && (
              <LayersControl.Overlay name="Show climbs">
                <LayerGroup>
                  <Pane name="climbs">
                    {stravaSegmentsInWorld
                      ?.filter((s) => s.type === "climb")
                      ?.map((s) => (
                        <Polyline
                          key={s.slug}
                          positions={s.stravaData}
                          pathOptions={{ color: "#d52f25", weight: 5 }}
                        />
                      ))}
                  </Pane>
                </LayerGroup>
              </LayersControl.Overlay>
            )}

            {(stravaSegmentsInWorld ?? []).filter((s) => s.type === "segment")
              .length > 0 && (
              <LayersControl.Overlay name="Show segments">
                <LayerGroup>
                  <Pane name="segments">
                    {stravaSegmentsInWorld
                      ?.filter((s) => s.type === "segment")
                      ?.map((s) => (
                        <Polyline
                          key={s.slug}
                          positions={s.stravaData}
                          pathOptions={{ color: "#ef6c42", weight: 5 }}
                        />
                      ))}
                  </Pane>
                </LayerGroup>
              </LayersControl.Overlay>
            )}
          </LayersControl>
        )}

        <Pane name="mouse-position">
          {pointCoordinates && (
            <Circle
              center={pointCoordinates}
              radius={10}
              pathOptions={{
                color: "black",
                fillColor: "black",
                fillOpacity: 1,
              }}
            />
          )}
        </Pane>
      </MapContainer>
    </div>
  );
}
