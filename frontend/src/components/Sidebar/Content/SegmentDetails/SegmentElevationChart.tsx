import { useAsync } from "react-async-hook";
import { Segment } from "zwift-data";
import { getStravaSegmentStreams } from "../../../../services/StravaSegmentRepository";
import { StravaSegment } from "../../../../types";
import { ElevationChart } from "../../../ElevationChart";
import { LoadingSpinnerListItem } from "../../../Loading";

interface Props {
  segment: Segment;
  onMouseHoverDistanceChange: (distance: number | undefined) => void;
}

const REQUIRED_STREAMS = ["altitude", "distance"] as const;

export function SegmentElevationChart({
  segment,
  onMouseHoverDistanceChange,
}: Props) {
  const { result: stravaSegmentStreams, error } = useAsync<
    Pick<StravaSegment, "altitude" | "distance">
  >(getStravaSegmentStreams, [segment.slug, "segments", REQUIRED_STREAMS]);

  if (error) {
    return null;
  }

  if (!stravaSegmentStreams) {
    return <LoadingSpinnerListItem />;
  }

  return (
    <ElevationChart
      altitudeStream={stravaSegmentStreams.altitude}
      distanceStream={stravaSegmentStreams.distance}
      onMouseHoverDistanceChange={onMouseHoverDistanceChange}
    />
  );
}