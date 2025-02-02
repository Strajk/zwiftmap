import { useMemo } from "react";
import { Route } from "zwift-data";
import { useStravaSegmentStream } from "../../react-query";
import { LoadingSpinner } from "../Loading";
import { TARGET_RESOLUTION } from "./constants";
import { GenericElevationChartPreview } from "./GenericElevationChartPreview";
import { Data } from "./types";

interface RouteProps {
  route: Route;
}

export default function RouteElevationChartPreview({ route }: RouteProps) {
  const {
    data: altitudeStream,
    isLoading: isLoadingAltitude,
    isError: isErrorAltitude,
  } = useStravaSegmentStream({
    stravaSegmentId: route.stravaSegmentId,
    stream: "altitude",
  });
  const {
    data: distanceStream,
    isLoading: isLoadingDistance,
    isError: isErrorDistance,
  } = useStravaSegmentStream({
    stravaSegmentId: route.stravaSegmentId,
    stream: "distance",
  });

  const data: Data[] | undefined = useMemo(() => {
    if (!altitudeStream || !distanceStream) {
      return;
    }

    const filteredData = distanceStream
      .map((distance, index) => ({
        distance: distance / 1_000,
        elevation: altitudeStream[index],
      }))
      .filter(
        (_d, index) =>
          index %
            Math.max(
              1,
              Math.floor(distanceStream.length / TARGET_RESOLUTION)
            ) ===
          0
      );
    // remove negative elevation
    const lowestElevation = Math.min(...filteredData.map((d) => d.elevation));
    return filteredData.map((d) => ({
      ...d,
      elevation: d.elevation - lowestElevation,
    }));
  }, [altitudeStream, distanceStream]);

  if (isErrorAltitude || isErrorDistance) {
    return null;
  }

  if (isLoadingAltitude || isLoadingDistance || !data) {
    return <LoadingSpinner small />;
  }

  return <GenericElevationChartPreview data={data} />;
}
