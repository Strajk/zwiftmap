import { useAddMessage } from "@react-md/alert";
import { Avatar } from "@react-md/avatar";
import { Button } from "@react-md/button";
import { TextIconSpacing } from "@react-md/icon";
import {
  List,
  ListItem,
  ListItemLink,
  ListItemText,
  ListSubheader,
  SimpleListItem,
} from "@react-md/list";
import {
  InsertLinkFontIcon,
  LandscapeFontIcon,
  ListFontIcon,
  MapFontIcon,
  OpenInNewFontIcon,
  ShareFontIcon,
  SpaceBarFontIcon,
  ThumbUpFontIcon,
  TimerFontIcon,
} from "@react-md/material-icons";
import { CircularProgress } from "@react-md/progress";
import { Text } from "@react-md/typography";
import React from "react";
import { useAsync } from "react-async-hook";
import stravaLogo from "../../../../assets/strava-40x40.png";
import { useIsLoggedInStrava } from "../../../../hooks/useIsLoggedInStrava";
import { useLocationState } from "../../../../hooks/useLocationState";
import { useStravaAuthUrl } from "../../../../services/strava/auth";
import { getStravaActivity } from "../../../../services/StravaActivityRepository";
import { zwiftMapApi } from "../../../../services/zwiftMapApi";
import { Distance } from "../../../Distance";
import { Elevation } from "../../../Elevation";
import { ElevationChart } from "../../../ElevationChart";
import { Time } from "../../../Time";

interface Props {
  activityId: string;
  onMouseHoverDistanceChange: (distance: number | undefined) => void;
}

export function StravaActivityDetails({
  activityId,
  onMouseHoverDistanceChange,
}: Props) {
  const isLoggedInStrava = useIsLoggedInStrava();
  const stravaAuthUrl = useStravaAuthUrl();

  if (!isLoggedInStrava) {
    return (
      <List>
        <ListItemLink
          leftAddon={
            <Avatar color="#ff6b00">
              <img src={stravaLogo} alt="" />
            </Avatar>
          }
          leftAddonType="avatar"
          rightAddon={<OpenInNewFontIcon />}
          rightAddonType="icon"
          secondaryText="…to view Strava activity"
          href={stravaAuthUrl}
        >
          Authorize Strava App…
        </ListItemLink>
      </List>
    );
  }

  return (
    <StravaActivityDetailsWithToken
      activityId={activityId}
      onMouseHoverDistanceChange={onMouseHoverDistanceChange}
    />
  );
}

function StravaActivityDetailsWithToken({
  activityId,
  onMouseHoverDistanceChange,
}: Props) {
  const [locationState, setLocationState] = useLocationState();
  const addMessage = useAddMessage();

  const { result: activity, loading } = useAsync(getStravaActivity, [
    activityId,
  ]);

  if (!activity) {
    if (loading) {
      return (
        <CircularProgress
          id={`strava-activity-${activityId}`}
          circleStyle={{ stroke: "black" }}
        />
      );
    } else {
      return (
        <List>
          <SimpleListItem
            secondaryText="Make sure you can access the activity and it was recorded in Zwift."
            threeLines
          >
            An error occurred
          </SimpleListItem>
        </List>
      );
    }
  }

  const handleShare = async () => {
    try {
      addMessage({ children: "Sharing…", messagePriority: "replace" });
      const response = await zwiftMapApi.post<{ url: string }>(
        "/strava/share-activity",
        {
          activityId,
        }
      );

      const url = response.data.url;
      if (navigator.share) {
        await navigator.share({
          title: `${activity.name} - ZwiftMap`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        addMessage({
          children: "URL copied to the clipboard",
          messagePriority: "replace",
        });
      }
    } catch {
      addMessage({
        children: "Error sharing the acitivty",
        messagePriority: "replace",
      });
    }
  };

  const handleAddLink = async () => {
    try {
      addMessage({
        children: "Posting link to activity description…",
        messagePriority: "replace",
      });
      await zwiftMapApi.post<{ url: string }>("/strava/add-activity-link", {
        activityId,
      });
      addMessage({
        children: "Link posted to activity description",
        messagePriority: "replace",
      });
    } catch {
      addMessage({
        children: "Error posting link to activity description",
        messagePriority: "replace",
      });
    }
  };

  return (
    <>
      <List>
        <SimpleListItem>
          <Button
            themeType="outline"
            onClick={() => {
              setLocationState({
                world: locationState.world,
                query: locationState.query,
                type: "strava-activities",
              });
            }}
          >
            <TextIconSpacing icon={<ListFontIcon />}>
              Strava activities
            </TextIconSpacing>
          </Button>
        </SimpleListItem>

        <SimpleListItem>
          <Text type="headline-6" style={{ margin: 0 }}>
            {activity.name}
          </Text>
        </SimpleListItem>

        <SimpleListItem
          clickable={false}
          leftAddon={<TimerFontIcon />}
          leftAddonType="icon"
        >
          <Time seconds={activity.time} />
        </SimpleListItem>
        <SimpleListItem
          clickable={false}
          leftAddon={<SpaceBarFontIcon />}
          leftAddonType="icon"
        >
          <Distance distance={activity.distance} />
        </SimpleListItem>
        <SimpleListItem
          clickable={false}
          leftAddon={<LandscapeFontIcon />}
          leftAddonType="icon"
        >
          <Elevation elevation={activity.elevation} />
        </SimpleListItem>
        <SimpleListItem clickable={false} leftAddon={<MapFontIcon />}>
          {activity.world.name}
        </SimpleListItem>

        {activity.kudos > 0 && (
          <SimpleListItem clickable={false} leftAddon={<ThumbUpFontIcon />}>
            {activity.kudos}
          </SimpleListItem>
        )}

        <SimpleListItem>
          <ElevationChart
            distanceStream={activity.streams.distance}
            altitudeStream={activity.streams.altitude}
            onMouseHoverDistanceChange={onMouseHoverDistanceChange}
          />
        </SimpleListItem>

        <ListSubheader>Links</ListSubheader>
        <ListItemLink
          href={`https://www.strava.com/activities/${activity.id}`}
          target="_blank"
          leftAddon={
            <Avatar color="#000000">
              <img src={stravaLogo} alt="" />
            </Avatar>
          }
          leftAddonType="avatar"
          rightAddon={<OpenInNewFontIcon />}
          rightAddonType="icon"
        >
          <ListItemText>Activity on Strava</ListItemText>
        </ListItemLink>
        <ListItemLink
          href={`https://www.strava.com/athletes/${activity.athleteId}`}
          target="_blank"
          leftAddon={
            <Avatar color="#000000">
              <img src={stravaLogo} alt="" />
            </Avatar>
          }
          leftAddonType="avatar"
          rightAddon={<OpenInNewFontIcon />}
          rightAddonType="icon"
        >
          <ListItemText>Athlete on Strava</ListItemText>
        </ListItemLink>

        {process.env.NODE_ENV === "development" && (
          <>
            <ListSubheader>Share</ListSubheader>
            <ListItem
              rightAddon={<ShareFontIcon />}
              rightAddonType="icon"
              onClick={handleShare}
            >
              Share activity
            </ListItem>
            <ListItem
              rightAddon={<InsertLinkFontIcon />}
              rightAddonType="icon"
              onClick={handleAddLink}
            >
              Add link to activity description
            </ListItem>
            <SimpleListItem>
              <ListItemText>
                <i>
                  Sharing will store activity details on the ZwiftMap server.
                </i>
              </ListItemText>
            </SimpleListItem>
          </>
        )}
      </List>
    </>
  );
}
