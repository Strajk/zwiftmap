import { WorldSlug } from "zwift-data";

export const queries = {
  authStatus: ["auth"] as const,
  events: ["events"] as const,
  event: (eventId: number | undefined) => ["events", eventId] as const,
  worldRoads: (world: WorldSlug) => ["worlds", world, "roads"] as const,
  worldRoadsBuffered: (world: WorldSlug) => ["worlds", world, "roads-buffered"] as const,
};