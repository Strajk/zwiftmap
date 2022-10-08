import { Request, Response } from "express";
import { Record } from "runtypes";
import { getEvent } from "../../../shared/events/index.js";
import { NumberString } from "../../services/runtypes.js";

const paramsRunType = Record({
  eventId: NumberString,
});

export async function handleGETEvent(req: Request, res: Response) {
  if (!paramsRunType.guard(req.params)) {
    res.sendStatus(400);
    return;
  }

  const { result: event, ttl } = await getEvent(+req.params.eventId);

  res.status(200).header("Cache-Control", `public, max-age=${ttl}`).json(event);
}
