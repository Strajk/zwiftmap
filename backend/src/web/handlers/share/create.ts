import { Request, Response } from "express";
import { Literal, Number, Record } from "runtypes";
import { ErrorWithStatusCode } from "../../../shared/ErrorWithStatusCode";
import { Share } from "../../../shared/persistence/types";
import { shareActivity } from "../../../shared/services/sharing";
import { Session } from "../../types";

const Body = Record({
  type: Literal("strava-activity"),
  stravaActivityId: Number,
});

export async function handleCreateShare(req: Request, res: Response) {
  const session = req.session as Session;

  if (!Body.guard(req.body)) {
    res.sendStatus(400);
    return;
  }

  let share: Share;
  switch (req.body.type) {
    case "strava-activity": {
      share = await handleStravaActivity(session, req.body.stravaActivityId);
      break;
    }
  }

  res.status(201).json({ id: share.id });
}

async function handleStravaActivity(
  session: Session,
  stravaActivityId: number
): Promise<Share> {
  if (!session.stravaAthleteId) {
    throw new ErrorWithStatusCode("Not authenticated with Strava", 403);
  }

  return await shareActivity(session.stravaAthleteId, stravaActivityId);
}
