import { LocationState } from "../../../../services/location-state";
import { DistanceStream, LatLngStream } from "../../../../types";
import { EventOverlay } from "./EventOverlay";
import { OtherOverlay } from "./OtherOverlay";
import { RouteOverlay } from "./RouteOverlay";
import { RoutingOverlay } from "./RoutingOverlay";
import { StravaActivityOverlay } from "./StravaActivityOverlay";

interface Props {
  state: LocationState;

  streams?: {
    latlng: LatLngStream;
    distance: DistanceStream;
  };
}

export function OverlaySegments({ state, streams }: Props) {
  switch (state.type) {
    case "route":
      return <RouteOverlay state={state} streams={streams} />;
    case "event":
      return <EventOverlay state={state} streams={streams} />;
    case "strava-activity":
      return <StravaActivityOverlay state={state} />;
    case "routing":
      return <RoutingOverlay state={state} streams={streams} />;
    default:
      return <OtherOverlay streams={streams} />;
  }
}
