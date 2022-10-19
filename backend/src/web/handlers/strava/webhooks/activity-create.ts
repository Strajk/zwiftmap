import {
  readStravaAthlete,
  writeStravaActivity,
} from "../../../../shared/persistence/index.js";
import { addLinkToActivity } from "../../../../shared/services/sharing.js";
import {
  CachedStravaUserAPI,
  DetailedActivity,
  isStravaBetaUser,
} from "../../../../shared/services/strava/index.js";
import { Logger, WebhookEventType } from "../../../../shared/types.js";
import { isZwiftActivity } from "../../../../shared/util.js";

export async function handleActivityCreate(
  webhookEvent: WebhookEventType,
  logger: Logger
) {
  const athleteId = webhookEvent.owner_id;
  const activityId = webhookEvent.object_id;
  const settings = await readStravaAthlete(athleteId);

  if (!settings.addLinkToActivityDescription && !isStravaBetaUser(athleteId)) {
    return;
  }

  let activity: DetailedActivity;
  try {
    const api = new CachedStravaUserAPI(athleteId);
    activity = (await api.getActivityById(activityId)).result;
  } catch (e) {
    logger.error("Error fetching activity");
    return;
  }

  if (!isZwiftActivity(activity)) {
    logger.info("Not a Zwift activity");
    return;
  }

  if (settings.addLinkToActivityDescription) {
    logger.info("Adding link to activity description");
    await addLinkToActivity(athleteId, activityId, logger);
  }

  if (isStravaBetaUser(athleteId)) {
    logger.info("Writing Strava Activity");
    await writeStravaActivity(athleteId, activity);
  }
}