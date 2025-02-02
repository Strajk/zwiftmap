import { Roads } from "../Roads.js";
import edgeADZTop from "./edges/adz-top.js";
import edgeADZ from "./edges/adz.js";
import edgeEpicBypass from "./edges/epic-bypass.js";
import edgeEpicReverse from "./edges/epic-reverse.js";
import edgeEpic from "./edges/epic.js";
import edgeFuegoFlats from "./edges/fuego-flats.js";
import edgeFuegoNorthRoundabout1 from "./edges/fuego-north-roundabout-1.js";
import edgeFuegoNorthRoundabout2 from "./edges/fuego-north-roundabout-2.js";
import edgeFuegoNorthRoundaboutPaddock from "./edges/fuego-north-roundabout-paddock.js";
import edgeFuegoSouthRoundabout1 from "./edges/fuego-south-roundabout-1.js";
import edgeFuegoSouthRoundabout2 from "./edges/fuego-south-roundabout-2.js";
import edgeJungle1 from "./edges/jungle-1.js";
import edgeJungle2 from "./edges/jungle-2.js";
import edgeJungle3 from "./edges/jungle-3.js";
import edgeJungle4 from "./edges/jungle-4.js";
import edgeJungleBridge from "./edges/jungle-bridge.js";
import edgeJunglePaddockEast from "./edges/jungle-paddock-east.js";
import edgeJunglePaddockWest from "./edges/jungle-paddock-west.js";
import edgeJWBCliff from "./edges/jwb-cliff.js";
import edgeMainBetweenExits from "./edges/main-between-exits.js";
import edgeMainEast1 from "./edges/main-east-1.js";
import edgeMainEast2 from "./edges/main-east-2.js";
import edgeMainKOM1 from "./edges/main-kom-1.js";
import edgeMainKOM2 from "./edges/main-kom-2.js";
import edgeMainKOM3 from "./edges/main-kom-3.js";
import edgeMainKOM4 from "./edges/main-kom-4.js";
import edgeMainKOMBypass from "./edges/main-kom-bypass.js";
import edgeMainPaddockEast from "./edges/main-paddock-east.js";
import edgeMainPaddockWest from "./edges/main-paddock-west.js";
import edgeMainJunction1 from "./edges/main-south-junction-1.js";
import edgeMainJunction2 from "./edges/main-south-junction-2.js";
import edgeMainJunction3 from "./edges/main-south-junction-3.js";
import edgeMainSouthWestJunction1 from "./edges/main-south-west-junction-1.js";
import edgeMainSouthWestJunction2 from "./edges/main-south-west-junction-2.js";
import edgeMainSouthWestJunction3 from "./edges/main-south-west-junction-3.js";
import edgeMainSouthWest from "./edges/main-south-west.js";
import edgeMainTitansNorth from "./edges/main-titans-north.js";
import edgeMainWest1 from "./edges/main-west-1.js";
import edgeMainWest2 from "./edges/main-west-2.js";
import edgeMainWest3 from "./edges/main-west-3.js";
import edgeMarina from "./edges/marina.js";
import edgeOceanBlvd from "./edges/ocean-blvd.js";
import edgeOceanEast1 from "./edges/ocean-east-1.js";
import edgeOceanEast2 from "./edges/ocean-east-2.js";
import edgeOceanTitansSouth from "./edges/ocean-titans-south.js";
import edgeOceanWest1 from "./edges/ocean-west-1.js";
import edgeOceanWest2 from "./edges/ocean-west-2.js";
import edgeRadioClimb from "./edges/radio-climb.js";
import edgeRadioRoundabout from "./edges/radio-roundabout.js";
import edgeTitansFuegoNorth from "./edges/titans-fuego-north.js";
import edgeTitansFuegoSouth from "./edges/titans-fuego-south.js";
import edgeTitansGroveMiddle from "./edges/titans-grove-middle.js";
import edgeTitansGroveNorth from "./edges/titans-grove-north.js";
import edgeTitansGroveSouth from "./edges/titans-grove-south.js";
import edgeTitansRepackRidge from "./edges/titans-repack-ridge.js";
import edgeVolcano1 from "./edges/volcano-1.js";
import edgeVolcano2 from "./edges/volcano-2.js";
import edgeVolcano3 from "./edges/volcano-3.js";
import edgeVolcanoKOM from "./edges/volcano-kom.js";
import edgeVolcanoNorth from "./edges/volcano-north.js";
import edgeVolcanoSouth from "./edges/volcano-south.js";
import edgeVolcanoTop from "./edges/volcano-top.js";

const ROADS = new Roads();
const createNode = ROADS.createNode.bind(ROADS);
const createEdge = ROADS.createEdge.bind(ROADS);

// Alpe du Zwift
const ADZ_TOP = createNode([-11.681593, 166.88947, 1046.8]);
const ADZ_BOTTOM_1 = createNode([-11.686232, 166.925588, 8.2]);
const ADZ_BOTTOM_2 = createNode([-11.686631, 166.925781, 6.9]);
const ADZ_BOTTOM_3 = createNode([-11.686369, 166.926275, 8.2]);
createEdge(ADZ_TOP, ADZ_TOP, edgeADZTop);
createEdge(ADZ_BOTTOM_1, ADZ_TOP, edgeADZ);
createEdge(ADZ_BOTTOM_2, ADZ_BOTTOM_1, []);
createEdge(ADZ_BOTTOM_3, ADZ_BOTTOM_1, []);
createEdge(ADZ_BOTTOM_2, ADZ_BOTTOM_3, []);

// Jungle (Junction Top)
const JUNGLE_JUNCTION_TOP_1 = createNode([-11.681273, 166.927576, 21.4]);
const JUNGLE_JUNCTION_TOP_2 = createNode([-11.681517, 166.927814, 21.4]);
const JUNGLE_JUNCTION_TOP_3 = createNode([-11.681638, 166.927536, 21.6]);
createEdge(JUNGLE_JUNCTION_TOP_1, JUNGLE_JUNCTION_TOP_2, []);
createEdge(JUNGLE_JUNCTION_TOP_1, JUNGLE_JUNCTION_TOP_3, []);
createEdge(JUNGLE_JUNCTION_TOP_2, JUNGLE_JUNCTION_TOP_3, []);
createEdge(JUNGLE_JUNCTION_TOP_3, ADZ_BOTTOM_3, edgeJungle1);

// Jungle (Junction Bottom)
const JUNGLE_JUNCTION_BOTTOM_1 = createNode([-11.684023, 166.930626, 26.4]);
const JUNGLE_JUNCTION_BOTTOM_2 = createNode([-11.683957, 166.930311, 26]);
const JUNGLE_JUNCTION_BOTTOM_3 = createNode([-11.684243, 166.930364, 25.6]);
createEdge(JUNGLE_JUNCTION_BOTTOM_1, JUNGLE_JUNCTION_BOTTOM_2, []);
createEdge(JUNGLE_JUNCTION_BOTTOM_1, JUNGLE_JUNCTION_BOTTOM_3, []);
createEdge(JUNGLE_JUNCTION_BOTTOM_2, JUNGLE_JUNCTION_BOTTOM_3, []);
createEdge(JUNGLE_JUNCTION_BOTTOM_2, JUNGLE_JUNCTION_TOP_2, edgeJungleBridge);
createEdge(ADZ_BOTTOM_2, JUNGLE_JUNCTION_BOTTOM_3, edgeJungle2);

// Jungle (Junction Right)
const JUNGLE_JUNCTION_EAST_1 = createNode([-11.678945, 166.93926, 57.8]);
const JUNGLE_JUNCTION_EAST_2 = createNode([-11.678838, 166.93841, 57.8]);
const JUNGLE_JUNCTION_EAST_3 = createNode([-11.679313, 166.938535, 57.8]);
createEdge(JUNGLE_JUNCTION_EAST_1, JUNGLE_JUNCTION_EAST_2, []);
createEdge(JUNGLE_JUNCTION_EAST_1, JUNGLE_JUNCTION_EAST_3, []);
createEdge(JUNGLE_JUNCTION_EAST_2, JUNGLE_JUNCTION_EAST_3, []);
createEdge(JUNGLE_JUNCTION_TOP_1, JUNGLE_JUNCTION_EAST_2, edgeJungle4);
createEdge(JUNGLE_JUNCTION_BOTTOM_1, JUNGLE_JUNCTION_EAST_3, edgeJungle3);

// Jungle (Start Pen)
const JUNGLE_PADDOCK_EXIT = createNode([-11.667077, 166.943963, 98.2]);
const JUNGLE_PADDOCK_1 = createNode([-11.665152, 166.943455, 98.2]);
const JUNGLE_PADDOCK_2 = createNode([-11.666148, 166.94218, 98.2]);
const JUNGLE_PADDOCK_3 = createNode([-11.664603, 166.943, 98.2]);
const JUNGLE_PADDOCK_4 = createNode([-11.665623, 166.941698, 98.2]);
const JUNGLE_PADDOCK_CENTER = createNode([-11.664944, 166.942271, 98.2]);
const JUNGLE_PADDOCK_ROW_FRONT = createNode([-11.666222, 166.943264, 98.2]);
const JUNGLE_PADDOCK_ROW_BACK = createNode([-11.66566, 166.942835, 98.2]);
createEdge(JUNGLE_PADDOCK_1, JUNGLE_PADDOCK_ROW_FRONT, [], false);
createEdge(JUNGLE_PADDOCK_2, JUNGLE_PADDOCK_ROW_FRONT, [], false);
createEdge(JUNGLE_PADDOCK_ROW_BACK, JUNGLE_PADDOCK_ROW_FRONT, [], false);
createEdge(JUNGLE_PADDOCK_3, JUNGLE_PADDOCK_ROW_BACK, [], false);
createEdge(JUNGLE_PADDOCK_4, JUNGLE_PADDOCK_ROW_BACK, [], false);
createEdge(JUNGLE_PADDOCK_CENTER, JUNGLE_PADDOCK_ROW_BACK, [], false);
createEdge(JUNGLE_PADDOCK_ROW_FRONT, JUNGLE_PADDOCK_EXIT, [], false);
createEdge(JUNGLE_PADDOCK_EXIT, JUNGLE_JUNCTION_EAST_1, edgeJunglePaddockWest);

// Radio Tower
const RADIO_TOWER_TOP = createNode([-11.675184, 166.950624, 504]);
const RADIO_TOWER_BOTTOM = createNode([-11.676543, 166.958332, 373.2]);
createEdge(RADIO_TOWER_TOP, RADIO_TOWER_TOP, edgeRadioRoundabout);
createEdge(RADIO_TOWER_BOTTOM, RADIO_TOWER_TOP, edgeRadioClimb);

// Epic KOM
const EPIC_KOM_WEST_JUNCTION_1 = createNode([-11.664837, 166.950806, 77.5]);
const EPIC_KOM_WEST_JUNCTION_2 = createNode([-11.665112, 166.95051, 77]);
const EPIC_KOM_WEST_JUNCTION_3 = createNode([-11.665264, 166.950886, 77.5]);
createEdge(EPIC_KOM_WEST_JUNCTION_1, EPIC_KOM_WEST_JUNCTION_2, []);
createEdge(EPIC_KOM_WEST_JUNCTION_1, EPIC_KOM_WEST_JUNCTION_3, []);
createEdge(EPIC_KOM_WEST_JUNCTION_2, EPIC_KOM_WEST_JUNCTION_3, []);
createEdge(
  EPIC_KOM_WEST_JUNCTION_2,
  JUNGLE_PADDOCK_EXIT,
  edgeJunglePaddockEast
);

const EPIC_KOM_BYPASS_EAST = createNode([-11.67363, 166.969279, 99.2]);
const EPIC_KOM_BYPASS_WEST = createNode([-11.665455, 166.951225, 78.4]);
createEdge(EPIC_KOM_WEST_JUNCTION_3, EPIC_KOM_BYPASS_WEST, []);
createEdge(EPIC_KOM_BYPASS_WEST, EPIC_KOM_BYPASS_EAST, edgeEpicBypass);
createEdge(EPIC_KOM_BYPASS_WEST, RADIO_TOWER_BOTTOM, edgeEpic);
createEdge(EPIC_KOM_BYPASS_EAST, RADIO_TOWER_BOTTOM, edgeEpicReverse);

// Volcano
const VOLCANO_EAST = createNode([-11.640294, 166.942486, 10.4]);
const VOLCANO_SOUTH = createNode([-11.647332, 166.939304, 2.4]);
const VOLCANO_WEST = createNode([-11.643755, 166.936158, 8.4]);
const VOLCANO_TOP = createNode([-11.642471, 166.939379, 129.8]);
createEdge(VOLCANO_TOP, VOLCANO_TOP, edgeVolcanoTop);
createEdge(VOLCANO_TOP, VOLCANO_WEST, edgeVolcanoKOM);
createEdge(VOLCANO_WEST, VOLCANO_EAST, edgeVolcano2);
createEdge(VOLCANO_SOUTH, VOLCANO_WEST, edgeVolcano1);
createEdge(VOLCANO_EAST, VOLCANO_SOUTH, edgeVolcano3);

// Ocean
const OCEAN_NORTH = createNode([-11.636992, 166.959098, 0.6]);
const OCEAN_SOUTH = createNode([-11.651355, 166.962536, -5.4]);
const OCEAN_WEST = createNode([-11.653714, 166.955555, 1]);
const OCEAN_EAST = createNode([-11.659781, 166.967565, 6.4]);
createEdge(OCEAN_SOUTH, OCEAN_NORTH, edgeOceanBlvd);
createEdge(OCEAN_WEST, OCEAN_SOUTH, edgeOceanWest2);
createEdge(OCEAN_EAST, OCEAN_SOUTH, edgeOceanEast2);
createEdge(OCEAN_WEST, EPIC_KOM_WEST_JUNCTION_1, edgeOceanWest1);
createEdge(EPIC_KOM_BYPASS_EAST, OCEAN_EAST, edgeOceanEast1);

// Titans Grove
const TITANS_NORTH = createNode([-11.636581, 166.969395, 11.8]);
const TITANS_REPACK_RIDGE_NORTH = createNode([-11.646597, 166.974335, 42.4]);
const TITANS_REPACK_RIDGE_SOUTH = createNode([-11.650538, 166.973723, 65.2]);
const TITANS_SOUTH = createNode([-11.659446, 166.976759, 28]);
createEdge(TITANS_REPACK_RIDGE_NORTH, TITANS_NORTH, edgeTitansGroveNorth);
createEdge(
  TITANS_REPACK_RIDGE_SOUTH,
  TITANS_REPACK_RIDGE_NORTH,
  edgeTitansGroveMiddle
);
createEdge(TITANS_SOUTH, TITANS_REPACK_RIDGE_SOUTH, edgeTitansGroveSouth);
createEdge(OCEAN_NORTH, TITANS_NORTH, edgeMainTitansNorth);
createEdge(TITANS_SOUTH, OCEAN_EAST, edgeOceanTitansSouth);
createEdge(
  TITANS_REPACK_RIDGE_NORTH,
  TITANS_REPACK_RIDGE_SOUTH,
  edgeTitansRepackRidge
);

// Main Paddock
const MAIN_PADDOCK_1 = createNode([-11.635633, 166.95485, 5]);
const MAIN_PADDOCK_2 = createNode([-11.634525, 166.954023, 5]);
const MAIN_PADDOCK_3 = createNode([-11.63515, 166.955608, 5]);
const MAIN_PADDOCK_4 = createNode([-11.634042, 166.954743, 5]);
const MAIN_PADDOCK_CENTER = createNode([-11.634852, 166.954781, 5]);
const MAIN_PADDOCK_ROW_BACK = createNode([-11.634995, 166.954594, 5]);
const MAIN_PADDOCK_ROW_FRONT = createNode([-11.635481, 166.953907, 5]);
const MAIN_PADDOCK_SPLIT = createNode([-11.635792, 166.953503, 5]);
const MAIN_PADDOCK_EXIT_WEST = createNode([-11.635513, 166.952232, 1.6]);
const MAIN_PADDOCK_EXIT_EAST = createNode([-11.637415, 166.95431, 1.8]);
createEdge(MAIN_PADDOCK_CENTER, MAIN_PADDOCK_ROW_BACK, [], false);
createEdge(MAIN_PADDOCK_ROW_BACK, MAIN_PADDOCK_ROW_FRONT, [], false);
createEdge(MAIN_PADDOCK_1, MAIN_PADDOCK_ROW_FRONT, [], false);
createEdge(MAIN_PADDOCK_2, MAIN_PADDOCK_ROW_FRONT, [], false);
createEdge(MAIN_PADDOCK_3, MAIN_PADDOCK_ROW_BACK, [], false);
createEdge(MAIN_PADDOCK_4, MAIN_PADDOCK_ROW_BACK, [], false);
createEdge(MAIN_PADDOCK_ROW_FRONT, MAIN_PADDOCK_SPLIT, [], false);
createEdge(
  MAIN_PADDOCK_SPLIT,
  MAIN_PADDOCK_EXIT_WEST,
  edgeMainPaddockWest,
  false
);
createEdge(
  MAIN_PADDOCK_SPLIT,
  MAIN_PADDOCK_EXIT_EAST,
  edgeMainPaddockEast,
  false
);
createEdge(
  MAIN_PADDOCK_EXIT_WEST,
  MAIN_PADDOCK_EXIT_EAST,
  edgeMainBetweenExits
);

// Main
const MAIN_KOM_BOTTOM = createNode([-11.637252, 166.955531, 4.8]);
const MAIN_KOM_BYPASS_EAST = createNode([-11.63934, 166.954774, 36.2]);
const MAIN_KOM_BYPASS_WEST = createNode([-11.639125, 166.952824, 39.2]);
const MAIN_NORTH_WEST = createNode([-11.640648, 166.94608, 13.2]);
const MAIN_SOUTH_WEST_JUNCTION_1 = createNode([-11.65058, 166.948714, 10.8]);
const MAIN_SOUTH_WEST_JUNCTION_2 = createNode([-11.650913, 166.949075, 10.6]);
const MAIN_SOUTH_WEST_JUNCTION_3 = createNode([-11.651271, 166.948654, 10.8]);
const MAIN_SOUTH_JUNCTION_1 = createNode([-11.647514, 166.951939, 13.6]);
const MAIN_SOUTH_JUNCTION_2 = createNode([-11.648126, 166.952376, 15.8]);
const MAIN_SOUTH_JUNCTION_3 = createNode([-11.648089, 166.952698, 15.4]);
const MAIN_JWB_CLIFF_WEST = createNode([-11.647114, 166.949165, 10.4]);
const MAIN_JWB_CLIFF_EAST = createNode([-11.646412, 166.950538, 11]);
createEdge(MAIN_PADDOCK_EXIT_EAST, MAIN_KOM_BOTTOM, edgeMainEast1);
createEdge(OCEAN_NORTH, MAIN_KOM_BOTTOM, edgeMainEast2);
createEdge(MAIN_KOM_BOTTOM, MAIN_KOM_BYPASS_EAST, edgeMainKOM1);
createEdge(MAIN_KOM_BYPASS_EAST, MAIN_KOM_BYPASS_WEST, edgeMainKOM2);
createEdge(MAIN_KOM_BYPASS_WEST, MAIN_KOM_BYPASS_EAST, edgeMainKOMBypass);
createEdge(MAIN_KOM_BYPASS_WEST, MAIN_JWB_CLIFF_EAST, edgeMainKOM3);
createEdge(MAIN_JWB_CLIFF_EAST, MAIN_SOUTH_JUNCTION_1, edgeMainKOM4);
createEdge(MAIN_NORTH_WEST, VOLCANO_EAST, edgeVolcanoNorth);
createEdge(VOLCANO_SOUTH, MAIN_SOUTH_WEST_JUNCTION_3, edgeVolcanoSouth);
createEdge(MAIN_PADDOCK_EXIT_WEST, MAIN_NORTH_WEST, edgeMainWest1);
createEdge(MAIN_JWB_CLIFF_WEST, MAIN_NORTH_WEST, edgeMainWest2);
createEdge(MAIN_SOUTH_WEST_JUNCTION_1, MAIN_JWB_CLIFF_WEST, edgeMainWest3);
createEdge(MAIN_JWB_CLIFF_WEST, MAIN_JWB_CLIFF_EAST, edgeJWBCliff);
createEdge(
  MAIN_SOUTH_JUNCTION_2,
  MAIN_SOUTH_WEST_JUNCTION_2,
  edgeMainSouthWest
);
createEdge(
  MAIN_SOUTH_WEST_JUNCTION_1,
  MAIN_SOUTH_WEST_JUNCTION_2,
  edgeMainSouthWestJunction1
);
createEdge(
  MAIN_SOUTH_WEST_JUNCTION_3,
  MAIN_SOUTH_WEST_JUNCTION_2,
  edgeMainSouthWestJunction2
);
createEdge(
  MAIN_SOUTH_WEST_JUNCTION_3,
  MAIN_SOUTH_WEST_JUNCTION_1,
  edgeMainSouthWestJunction3
);
createEdge(MAIN_SOUTH_JUNCTION_1, MAIN_SOUTH_JUNCTION_2, edgeMainJunction1);
createEdge(MAIN_SOUTH_JUNCTION_1, MAIN_SOUTH_JUNCTION_3, edgeMainJunction3);
createEdge(MAIN_SOUTH_JUNCTION_2, MAIN_SOUTH_JUNCTION_3, edgeMainJunction2);
createEdge(MAIN_SOUTH_JUNCTION_3, OCEAN_WEST, edgeMarina);

// Fuego Flats
const FUEGO_SOUTH_1 = createNode([-11.662318, 166.983305, 12.8]);
const FUEGO_SOUTH_2 = createNode([-11.661783, 166.98417, 12.8]);
const FUEGO_NORTH_1 = createNode([-11.638389, 166.977252, 15.6]);
const FUEGO_NORTH_2 = createNode([-11.640373, 166.978375, 13.2]);
const FUEGO_PADDOCK_EXIT = createNode([-11.635251, 166.973542, 13]);
const FUEGO_PADDOCK_1 = createNode([-11.633471, 166.97375, 13]);
const FUEGO_PADDOCK_2 = createNode([-11.633865, 166.972184, 13]);
const FUEGO_PADDOCK_3 = createNode([-11.632762, 166.97353, 13]);
const FUEGO_PADDOCK_4 = createNode([-11.633229, 166.972002, 13]);
const FUEGO_PADDOCK_CENTER = createNode([-11.632581, 166.972666, 13]);
const FUEGO_PADDOCK_ROW_FRONT = createNode([-11.634352, 166.97324, 13]);
const FUEGO_PADDOCK_ROW_BACK = createNode([-11.633622, 166.973004, 13]);
createEdge(FUEGO_SOUTH_1, FUEGO_SOUTH_2, edgeFuegoSouthRoundabout1);
createEdge(FUEGO_SOUTH_2, FUEGO_SOUTH_1, edgeFuegoSouthRoundabout2);
createEdge(FUEGO_SOUTH_1, TITANS_SOUTH, edgeTitansFuegoSouth);
createEdge(FUEGO_SOUTH_2, FUEGO_NORTH_2, edgeFuegoFlats);
createEdge(FUEGO_NORTH_2, FUEGO_NORTH_1, edgeFuegoNorthRoundabout1);
createEdge(FUEGO_NORTH_1, FUEGO_NORTH_2, edgeFuegoNorthRoundabout2);
createEdge(FUEGO_PADDOCK_EXIT, FUEGO_NORTH_1, edgeFuegoNorthRoundaboutPaddock);
createEdge(TITANS_NORTH, FUEGO_PADDOCK_EXIT, edgeTitansFuegoNorth);
createEdge(FUEGO_PADDOCK_CENTER, FUEGO_PADDOCK_ROW_BACK, [], false);
createEdge(FUEGO_PADDOCK_ROW_BACK, FUEGO_PADDOCK_ROW_FRONT, [], false);
createEdge(FUEGO_PADDOCK_ROW_FRONT, FUEGO_PADDOCK_EXIT, [], false);
createEdge(FUEGO_PADDOCK_1, FUEGO_PADDOCK_ROW_FRONT, [], false);
createEdge(FUEGO_PADDOCK_2, FUEGO_PADDOCK_ROW_FRONT, [], false);
createEdge(FUEGO_PADDOCK_3, FUEGO_PADDOCK_ROW_BACK, [], false);
createEdge(FUEGO_PADDOCK_4, FUEGO_PADDOCK_ROW_BACK, [], false);

export default ROADS;
