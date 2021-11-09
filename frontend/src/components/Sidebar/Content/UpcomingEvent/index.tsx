import { Button } from "@react-md/button";
import { TextIconSpacing } from "@react-md/icon";
import { List, SimpleListItem } from "@react-md/list";
import { ListFontIcon } from "@react-md/material-icons";
import { CircularProgress } from "@react-md/progress";
import { useAsync } from "react-async-hook";
import { useLocationState } from "../../../../hooks/useLocationState";
import { fetchEvent } from "../../../../services/events";
import { UpcomingEventComponent } from "./component";

interface Props {
  onMouseHoverDistanceChange: (distance: number | undefined) => void;
  eventId: string;
}

export function UpcomingEvent({ eventId }: Props) {
  const { result: event, loading } = useAsync(fetchEvent, [eventId]);
  const [locationState, setLocationState] = useLocationState();

  const backButton = (
    <SimpleListItem>
      <Button
        themeType="outline"
        onClick={() =>
          setLocationState({
            type: "events",
            query: locationState.query,
            world: locationState.world,
          })
        }
      >
        <TextIconSpacing icon={<ListFontIcon />}>
          Upcoming Events
        </TextIconSpacing>
      </Button>
    </SimpleListItem>
  );

  if (!event) {
    if (loading) {
      return (
        <>
          {backButton}
          <CircularProgress
            id={`event-${eventId}`}
            circleStyle={{ stroke: "black" }}
          />
        </>
      );
    } else {
      return (
        <>
          {backButton}
          <List>
            <SimpleListItem secondaryText="Error loading event">
              An error occurred
            </SimpleListItem>
          </List>
        </>
      );
    }
  }

  return (
    <>
      {backButton}
      <UpcomingEventComponent event={event} />
    </>
  );
}