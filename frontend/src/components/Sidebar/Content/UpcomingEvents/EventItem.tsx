import { ListItem } from "@react-md/list";
import { OpenInNewFontIcon } from "@react-md/material-icons";
import { routes, worlds } from "zwift-data";
import { useLocationState } from "../../../../hooks/useLocationState";
import { ZwiftEvent } from "../../../../services/events";
import { EventInfo } from "../../../EventInfo";

interface Props {
  event: ZwiftEvent;
  onHoverRoute: (route?: string) => void;
}

export function EventItem({ event, onHoverRoute }: Props) {
  const route = routes.find((r) => r.id === event.routeId);
  const [locationState, setLocationState] = useLocationState();

  return (
    <ListItem
      secondaryText={
        <EventInfo
          event={event}
          showWorld={locationState.world.slug !== route?.slug}
        />
      }
      threeLines
      onClick={() => {
        if (route) {
          setLocationState({
            type: "event",
            world: worlds.find((w) => w.slug === route.world)!,
            eventId: event.id.toString(),
            query: locationState.query,
          });
          onHoverRoute(undefined);
        } else {
          window.open(`https://zwift.com/events/view/${event.id}`, "_blank");
        }
      }}
      rightAddon={route ? undefined : <OpenInNewFontIcon />}
      rightAddonType={route ? undefined : "icon"}
      onMouseEnter={() => onHoverRoute(route?.slug)}
      onMouseLeave={() => onHoverRoute(undefined)}
    >
      {event.name}
    </ListItem>
  );
}
