import { Request, Response } from "express";
import { FIFTEEN_MINUTES } from "../../../../constants";
import { getActivityStreams } from "../../../../shared/services/strava";
import { Session } from "../../../types";

export async function handleGETActivityStreams(req: Request, res: Response) {
  const session = req.session as Session;
  if (!session.stravaAthleteId) {
    res.sendStatus(403);
    return;
  }

  const activity = await getActivityStreams(
    session.stravaAthleteId,
    +req.params.activityId
  );
  res
    .header("Cache-control", `private, max-age=${FIFTEEN_MINUTES}`)
    .status(200)
    .json(activity);
}
