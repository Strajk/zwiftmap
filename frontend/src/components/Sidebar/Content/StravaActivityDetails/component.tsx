import { SimpleListItem } from "@react-md/list";
import { Typography } from "@react-md/typography";
import React from "react";
import { Helmet } from "react-helmet-async";
import { StravaActivity } from "../../../../services/StravaActivityRepository";
import { StravaActivityElevationChart } from "./StravaActivityElevationChart";
import { StravaActivityFacts } from "./StravaActivityFacts";
import { StravaActivityLinks } from "./StravaActivityLinks";
import { StravaActivityRoutes } from "./StravaActivityRoutes";
import { StravaActivitySegments } from "./StravaActivitySegments";
import { StravaActivitySharing } from "./StravaActivitySharing";

interface Props {
  activity: StravaActivity;
  onMouseHoverDistanceChange: (distance: number | undefined) => void;
}

export function StravaActivityDetailsComponent({
  activity,
  onMouseHoverDistanceChange,
}: Props) {
  return (
    <>
      <Helmet>
        <title>{activity.name}</title>
      </Helmet>

      <SimpleListItem>
        <Typography type="headline-6" style={{ margin: 0 }}>
          {activity.name}
        </Typography>
      </SimpleListItem>

      <StravaActivityFacts activity={activity} />

      <StravaActivityElevationChart
        activity={activity}
        onMouseHoverDistanceChange={onMouseHoverDistanceChange}
      />

      <StravaActivityRoutes activity={activity} />
      <StravaActivitySegments activity={activity} />
      <StravaActivitySharing activity={activity} />
      <StravaActivityLinks activity={activity} />
    </>
  );
}
