import { Bike, BIKE_GRAVEL, BIKE_MTB, BIKE_ROAD, SurfaceType, SURFACE_TYPE_BRICK, SURFACE_TYPE_COBBLES, SURFACE_TYPE_DIRT, SURFACE_TYPE_GRASS, SURFACE_TYPE_SNOW, SURFACE_TYPE_TARMAC, SURFACE_TYPE_WOOD } from "../types";

export const CRR: Record<SurfaceType, Record<Bike, number | null>> = {
  [SURFACE_TYPE_TARMAC]: {
    [BIKE_ROAD]: 0.004,
    [BIKE_MTB]: 0.01,
    [BIKE_GRAVEL]: 0.008,
  },
  [SURFACE_TYPE_BRICK]: {
    [BIKE_ROAD]: 0.0055,
    [BIKE_MTB]: 0.01,
    [BIKE_GRAVEL]: 0.008,
  },
  [SURFACE_TYPE_WOOD]: {
    [BIKE_ROAD]: 0.0065,
    [BIKE_MTB]: 0.01,
    [BIKE_GRAVEL]: 0.008,
  },
  [SURFACE_TYPE_COBBLES]: {
    [BIKE_ROAD]: 0.0065,
    [BIKE_MTB]: 0.01,
    [BIKE_GRAVEL]: 0.008,
  },
  [SURFACE_TYPE_SNOW]: {
    [BIKE_ROAD]: 0.0075,
    [BIKE_MTB]: 0.014,
    [BIKE_GRAVEL]: 0.018,
  },
  [SURFACE_TYPE_DIRT]: {
    [BIKE_ROAD]: 0.025,
    [BIKE_MTB]: 0.014,
    [BIKE_GRAVEL]: 0.018,
  },
  [SURFACE_TYPE_GRASS]: {
    [BIKE_ROAD]: null,
    [BIKE_MTB]: 0.042,
    [BIKE_GRAVEL]: null,
  },
};