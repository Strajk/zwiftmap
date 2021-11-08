import React, { useCallback } from "react";
import { useLocationState } from "../../../hooks/useLocationState";
import { RouteList } from "./Lists/RouteList";
import { SearchResultList } from "./Lists/SearchResultList";
import { StravaActivitiesList } from "./Lists/StravaActivitiesList";
import { RouteDetails } from "./RouteDetails";
import { StravaActivityDetails } from "./StravaActivityDetails";
import { UpcomingEvents } from "./UpcomingEvents";

interface Props {
  onMouseHoverDistanceChange: (distance: number | undefined) => void;
  onHoverRoute: (previewRoute: string | undefined) => void;
}

export function Content({ onMouseHoverDistanceChange, onHoverRoute }: Props) {
  const [locationState, setLocationState] = useLocationState();

  const backButtonText =
    locationState.query === "" ? "Route List" : "Search Results";
  const onBackButtonClick = useCallback(() => {
    setLocationState({
      world: locationState.world,
      query: locationState.query,
      type: "default",
    });
  }, [setLocationState, locationState]);

  switch (locationState.type) {
    case "route":
      return (
        <RouteDetails
          key={locationState.route.slug}
          backButtonText={backButtonText}
          onBackButtonClick={onBackButtonClick}
          onMouseHoverDistanceChange={onMouseHoverDistanceChange}
          route={locationState.route}
        />
      );
    case "strava-activity":
      return (
        <StravaActivityDetails
          activityId={locationState.stravaActivityId}
          onMouseHoverDistanceChange={onMouseHoverDistanceChange}
        />
      );
    case "strava-activities":
      return <StravaActivitiesList />;
    case "upcoming-events":
      return <UpcomingEvents />;
    case "default":
      if (locationState.query === "") {
        return <RouteList onHoverRoute={onHoverRoute} />;
      } else {
        return <SearchResultList onHoverRoute={onHoverRoute} />;
      }
  }
}