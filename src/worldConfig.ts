import { LatLngTuple } from "leaflet";
import critCityMap from "./maps/crit-city.png";
import franceMap from "./maps/france.png";
import innsbruckMap from "./maps/innsbruck.png";
import londonMap from "./maps/london.png";
import newYorkMap from "./maps/new-york.png";
import parisMap from "./maps/paris.png";
import richmondMap from "./maps/richmond.png";
import watopiaMap from "./maps/watopia.png";
import yorkshireMap from "./maps/yorkshire.png";
import { World } from "./types";

export type WorldConfig = {
  bounds: [LatLngTuple, LatLngTuple];
  image: string;
  backgroundColor: string;
};

export const worldConfigs: Record<World, WorldConfig> = {
  "crit-city": {
    bounds: [
      [-10.3657, 165.7824],
      [-10.4038, 165.8207],
    ],
    image: critCityMap,
    backgroundColor: '#7c9938'
  },

  france: {
    bounds: [
      [-21.64155, 166.1384],
      [-21.7564, 166.26125],
    ],
    image: franceMap,
    backgroundColor: '#6f992d'
  },

  innsbruck: {
    bounds: [
      [47.2947, 11.3501],
      [47.2055, 11.4822],
    ],
    image: innsbruckMap,
    backgroundColor: '#7c9938'
  },

  london: {
    bounds: [
      [51.5362, -0.1776],
      [51.4601, -0.0555],
    ],
    image: londonMap,
    backgroundColor: '#6f992d'
  },

  "new-york": {
    bounds: [
      [40.81725, -74.0227],
      [40.74085, -73.9222],
    ],
    image: newYorkMap,
    backgroundColor: '#bbbbb7'
  },

  paris: {
    bounds: [
      [48.9058, 2.2561],
      [48.82945, 2.3722],
    ],
    image: parisMap,
    backgroundColor: '#b9b9b9'
  },

  richmond: {
    bounds: [
      [37.5774, -77.48954],
      [37.5014, -77.394],
    ],
    image: richmondMap,
    backgroundColor: '#7c9938'
  },

  watopia: {
    bounds: [
      [-11.62597, 166.87747],
      [-11.70255, 167.03255],
    ],
    image: watopiaMap,
    backgroundColor: '#0884e2'
  },
  yorkshire: {
    bounds: [
      [54.0254, -1.632],
      [53.9491, -1.5022],
    ],
    image: yorkshireMap,
    backgroundColor: '#7c9938'
  },
};
