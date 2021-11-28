import React, { useRef } from "react";
import { Segment, worlds } from "zwift-data";
import { useOnScreen } from "../../../../../hooks/useOnScreen";
import { HoverData } from "../../../../../types";
import { Distance } from "../../../../Distance";
import { Elevation } from "../../../../Elevation";
import { SegmentElevationChartPreview } from "../../../../ElevationChartPreview";
import { ListItemState } from "../../../../ListItemState";

export interface Props {
  segment: Segment;
  onHoverRoute: (data: HoverData) => void;
  showWorldName: boolean;
}

export function ListItemSegment({
  segment,
  onHoverRoute,
  showWorldName,
}: Props) {
  return (
    <ListItemState
      state={{
        world: worlds.find((w) => w.slug === segment.world)!,
        segment,
        type: "segment",
      }}
      onClick={() => onHoverRoute(undefined)}
      secondaryText={
        <SegmentInfo segment={segment} showWorldName={showWorldName} />
      }
      threeLines={showWorldName}
      rightAddonType="large-media"
      rightAddon={<ChartContainer segment={segment} />}
      onMouseEnter={() =>
        onHoverRoute({ type: "segment", segment: segment.slug })
      }
      onMouseLeave={() => onHoverRoute(undefined)}
    >
      {segment.name}
    </ListItemState>
  );
}

interface SegmentInfoProps {
  segment: Segment;
  showWorldName: boolean;
}

function SegmentInfo({ segment, showWorldName }: SegmentInfoProps) {
  return (
    <>
      {showWorldName && (
        <>
          {worlds.find((w) => w.slug === segment.world)!.name}
          <br />
        </>
      )}
      <Distance distance={segment.distance} />
      {segment.elevation !== undefined ? (
        <>
          {" | "}
          <Elevation elevation={segment.elevation} />
        </>
      ) : null}
    </>
  );
}

interface ChartProps {
  segment: Segment;
}

function ChartContainer({ segment }: ChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onScreen = useOnScreen(ref);

  return (
    <div ref={ref} style={{ width: "100%", pointerEvents: "none" }}>
      {onScreen ? <SegmentElevationChartPreview segment={segment} /> : null}
    </div>
  );
}
