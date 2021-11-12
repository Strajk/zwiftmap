import { Request, Response } from "express";
import {
  readStravaSettings,
  StravaSettings,
  writeStravaSettings,
} from "../../../shared/persistence/stravaSettings";
import { Session } from "../../types";

export async function handleGETStravaSettings(req: Request, res: Response) {
  const session = req.session as Session;

  if (!session.stravaAthleteId) {
    res.sendStatus(403);
    return;
  }

  const settings = await readStravaSettings(session.stravaAthleteId);
  res.json(settings);
}

export async function handlePUTStravaSettings(req: Request, res: Response) {
  if (!StravaSettings.guard(req.body)) {
    res.sendStatus(400);
    return;
  }

  const session = req.session as Session;

  if (!session.stravaAthleteId) {
    res.sendStatus(403);
    return;
  }

  await writeStravaSettings(session.stravaAthleteId, req.body);
  res.json(req.body);
}