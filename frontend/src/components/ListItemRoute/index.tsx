import React, { useRef } from "react";
import { Route, worlds } from "zwift-data";
import { HoverData } from "../../types";
import { useOnScreen } from "..//../hooks/useOnScreen";
import { Distance } from "../Distance";
import { Elevation } from "../Elevation";
import { RouteElevationChartPreview } from "../ElevationChartPreview";
import { ListItemState } from "../ListItemState";

export interface Props {
  route: Route;
  onHoverRoute: (data: HoverData) => void;
  showWorldName: boolean;
}

export function ListItemRoute({ route, onHoverRoute, showWorldName }: Props) {
  return (
    <ListItemState
      secondaryText={<RouteInfo route={route} showWorldName={showWorldName} />}
      threeLines={showWorldName}
      state={{
        world: worlds.find((w) => w.slug === route.world)!,
        route,
        segments: [],
        type: "route",
      }}
      onClick={() => onHoverRoute(undefined)}
      rightAddonType="large-media"
      rightAddon={<ChartContainer route={route} />}
      onMouseEnter={() => onHoverRoute({ type: "route", route: route.slug })}
      onMouseLeave={() => onHoverRoute(undefined)}
    >
      {route.name}
    </ListItemState>
  );
}

interface RouteInfoProps {
  route: Route;
  showWorldName: boolean;
}

function RouteInfo({ route, showWorldName }: RouteInfoProps) {
  return (
    <>
      {showWorldName && (
        <>
          {worlds.find((w) => w.slug === route.world)!.name}
          <br />
        </>
      )}
      <Distance distance={route.distance} /> |{" "}
      <Elevation elevation={route.elevation} />
    </>
  );
}

interface ChartProps {
  route: Route;
}

function ChartContainer({ route }: ChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onScreen = useOnScreen(ref);

  return (
    <div ref={ref} style={{ width: "100%", pointerEvents: "none" }}>
      {onScreen ? <RouteElevationChartPreview route={route} /> : null}
    </div>
  );
}