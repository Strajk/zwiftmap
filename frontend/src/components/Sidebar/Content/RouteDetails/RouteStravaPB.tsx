import { ListItemLink, ListItemText, SimpleListItem } from "@react-md/list";
import { OpenInNewFontIcon, TimerFontIcon } from "@react-md/material-icons";
import React from "react";
import { useAsync } from "react-async-hook";
import { Route } from "zwift-data";
import {
  IsLoggedInStrava,
  useIsLoggedInStrava
} from "../../../../hooks/useIsLoggedInStrava";
import { fetchSegment } from "../../../../services/strava/api";
import { LoadingSpinner, LoadingSpinnerListItem } from "../../../Loading";
import { Time } from "../../../Time";

interface Props {
  route: Route;
}

export function RouteStravaPB({ route }: Props) {
  const isLoggedInStrava = useIsLoggedInStrava();

  const {
    result: segment,
    loading,
    error,
  } = useAsync(
    async (loggedIn: IsLoggedInStrava, segmentId?: number) => {
      if (loggedIn !== true || segmentId === undefined) {
        return null;
      }

      return await fetchSegment(segmentId.toString());
    },
    [isLoggedInStrava, route.stravaSegmentId]
  );

  if (isLoggedInStrava === null) {
    return <LoadingSpinnerListItem />;
  }

  if (loading) {
    return (
      <SimpleListItem
        leftAddon={<TimerFontIcon />}
        leftAddonType="icon"
        rightAddon={<OpenInNewFontIcon />}
        rightAddonType="icon"
      >
        <LoadingSpinner small />
      </SimpleListItem>
    );
  }

  if (error || segment === null || segment === undefined) {
    return null;
  }

  return (
    <ListItemLink
      href={`https://www.strava.com/segments/${segment.id}`}
      target="_blank"
      leftAddon={<TimerFontIcon />}
      leftAddonType="icon"
      rightAddon={<OpenInNewFontIcon />}
      rightAddonType="icon"
    >
      <ListItemText>
        {segment.athlete_segment_stats.effort_count === 0 ? (
          <>No time set</>
        ) : (
          <Time seconds={segment.athlete_segment_stats.pr_elapsed_time!} />
        )}
      </ListItemText>
    </ListItemLink>
  );
}
