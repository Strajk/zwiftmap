import { Request, Response } from "express";
import { Record, String } from "runtypes";
import { worlds } from "zwift-data";
import { readStravaActivitiesByWorld } from "../../../../shared/persistence/stravaActivity.js";
import { calcFogPolygon } from "../../../../shared/services/strava/index.js";
import { Session } from "../../../types.js";

const slugs = worlds.map((w) => w.slug as string);
const paramsRunType = Record({
  worldSlug: String.withConstraint((worldSlug) => slugs.includes(worldSlug)),
});

export async function handleGETStravaFogGeoJSON(req: Request, res: Response) {
  if (!paramsRunType.guard(req.params)) {
    res.sendStatus(400);
    return;
  }

  const session = req.session as Session;
  if (!session.stravaAthleteId) {
    res.sendStatus(403);
    return;
  }

  const world = worlds.find((w) => w.slug === req.params.worldSlug)!;

  const activities = await readStravaActivitiesByWorld(
    session.stravaAthleteId,
    world.slug
  );
  const fog = calcFogPolygon(world, activities);

  res.contentType("application/geo+json").json(fog);
}
