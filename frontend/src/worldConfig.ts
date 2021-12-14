import { LatLngTuple } from "leaflet";
import { WorldSlug } from "zwift-data";
import bolognaMap from "./maps/bologna.png";
import critCityMap from "./maps/crit-city.png";
import franceMap from "./maps/france.png";
import innsbruckMap from "./maps/innsbruck.png";
import londonMap from "./maps/london.png";
import makuriIslandsMap from "./maps/makuri-islands.png";
import newYorkMap from "./maps/new-york.png";
import parisMap from "./maps/paris.png";
import richmondMap from "./maps/richmond.png";
import watopiaMap from "./maps/watopia.png";
import yorkshireMap from "./maps/yorkshire.png";
import {
  SurfaceType,
  SURFACE_TYPE_BRICK,
  SURFACE_TYPE_COBBLES,
  SURFACE_TYPE_WOOD,
} from "./types/Surface";

export type WorldConfig = {
  initialBounds: [LatLngTuple, LatLngTuple];
  image: string;
  backgroundColor: string;
  surfaces: {
    type: SurfaceType;
    polygon: LatLngTuple[];
  }[];
};

const WORLD_CONFIG_BOLOGNA: WorldConfig = {
  initialBounds: [
    [44.501423, 11.294653],
    [44.478222, 11.341099],
  ],
  image: bolognaMap,
  backgroundColor: "#b9b9b8",
  surfaces: [
    {
      type: SURFACE_TYPE_BRICK,
      polygon: [
        [44.497632, 11.331145],
        [44.498027, 11.331479],
        [44.499294, 11.327853],
        [44.498899, 11.327512],
        [44.497632, 11.331145],
      ],
    },
  ],
};

const WORLD_CONFIG_CRIT_CITY: WorldConfig = {
  initialBounds: [
    [-10.382352, 165.798758],
    [-10.386016, 165.803496],
  ],
  image: critCityMap,
  backgroundColor: "#7c9938",
  surfaces: [
    {
      type: SURFACE_TYPE_BRICK,
      polygon: [
        [-10.385806, 165.799698],
        [-10.385804, 165.80094],
        [-10.385142, 165.800938],
        [-10.385152, 165.799701],
        [-10.385806, 165.799698],
      ],
    },
  ],
};

const WORLD_CONFIG_FRANCE: WorldConfig = {
  initialBounds: [
    [-21.697812, 166.148225],
    [-21.744906, 166.202642],
  ],
  image: franceMap,
  backgroundColor: "#6f992d",
  surfaces: [
    {
      // bridge near start
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [-21.73782, 166.178963],
        [-21.737471, 166.17981],
        [-21.737053, 166.179531],
        [-21.737362, 166.178802],
        [-21.73782, 166.178963],
      ],
    },
    {
      // pave sprint
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [-21.699664, 166.174865],
        [-21.699065, 166.175366],
        [-21.697458, 166.17265],
        [-21.698966, 166.169729],
        [-21.699622, 166.170245],
        [-21.699664, 166.174865],
      ],
    },
    {
      // bridge to bottom-left island, from top
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [-21.73742, 166.15294],
        [-21.734989, 166.153593],
        [-21.734848, 166.152895],
        [-21.737201, 166.152318],
        [-21.73742, 166.15294],
      ],
    },
    {
      // bridge to bottom-left island, from right
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [-21.743226, 166.157136],
        [-21.742007, 166.158805],
        [-21.741592, 166.15838],
        [-21.742782, 166.156764],
        [-21.743226, 166.157136],
      ],
    },
  ],
};

const WORLD_CONFIG_INNSBRUCK: WorldConfig = {
  initialBounds: [
    [47.280902, 11.386414],
    [47.214544, 11.445934],
  ],
  image: innsbruckMap,
  backgroundColor: "#7c9938",
  surfaces: [
    {
      type: SURFACE_TYPE_BRICK,
      polygon: [
        [47.268528, 11.391566],
        [47.266103, 11.393669],
        [47.266198, 11.394292],
        [47.268761, 11.393283],
        [47.268528, 11.391566],
      ],
    },
    {
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [47.266103, 11.393669],
        [47.264146, 11.394469],
        [47.264116, 11.395296],
        [47.266198, 11.394292],
        [47.266103, 11.393669],
      ],
    },
  ],
};

const WORLD_CONFIG_LONDON: WorldConfig = {
  initialBounds: [
    [51.511261, -0.134875],
    [51.489256, -0.072996],
  ],
  image: londonMap,
  backgroundColor: "#6f992d",
  surfaces: [
    {
      // left entry from city 1
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [51.495266, -0.119761],
        [51.494742, -0.119898],
        [51.494619, -0.118964],
        [51.49512, -0.118789],
        [51.495266, -0.119761],
      ],
    },
    {
      // left entry from city 2
      type: SURFACE_TYPE_WOOD,
      polygon: [
        [51.49512, -0.118789],
        [51.494619, -0.118964],
        [51.494557, -0.117877],
        [51.495004, -0.117694],
        [51.49512, -0.118789],
      ],
    },
    {
      // left entry from city 3
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [51.495004, -0.117694],
        [51.494557, -0.117877],
        [51.49445, -0.117533],
        [51.4944, -0.116959],
        [51.494881, -0.116814],
        [51.495004, -0.117694],
      ],
    },
    {
      // left entry from city 4
      type: SURFACE_TYPE_WOOD,
      polygon: [
        [51.4944, -0.116959],
        [51.49445, -0.117533],
        [51.493666, -0.117672],
        [51.492642, -0.113203],
        [51.494539, -0.112387],
        [51.495046, -0.112108],
        [51.4944, -0.116959],
      ],
    },
    {
      // right exit towards city 1
      type: SURFACE_TYPE_WOOD,
      polygon: [
        [51.500737, -0.077306],
        [51.501247, -0.077063],
        [51.501341, -0.078034],
        [51.498716, -0.079264],
        [51.498753, -0.076364],
        [51.499585, -0.073389],
        [51.499575, -0.072721],
        [51.500321, -0.072311],
        [51.500737, -0.077306],
      ],
    },
    {
      // right exit towards city 2
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [51.501118, -0.076973],
        [51.500717, -0.077163],
        [51.500622, -0.076639],
        [51.501028, -0.076389],
        [51.501118, -0.076973],
      ],
    },
    {
      // right exit towards city 3
      type: SURFACE_TYPE_WOOD,
      polygon: [
        [51.501118, -0.076973],
        [51.501028, -0.076389],
        [51.501886, -0.075871],
        [51.502039, -0.076558],
        [51.501118, -0.076973],
      ],
    },
    {
      // right exit towards city 4
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [51.502039, -0.076558],
        [51.501886, -0.075871],
        [51.502409, -0.075603],
        [51.502524, -0.076191],
        [51.502039, -0.076558],
      ],
    },
  ],
};

const WORLD_CONFIG_MAKURI_ISLANDS: WorldConfig = {
  initialBounds: [
    [-10.743702, 165.829858],
    [-10.805634, 165.859212],
  ],
  image: makuriIslandsMap,
  backgroundColor: "#7d9a35",
  surfaces: [
    {
      // bridge in north dirt section
      type: "wood",
      polygon: [
        [-10.748951, 165.850969],
        [-10.749146, 165.850806],
        [-10.749386, 165.851079],
        [-10.749172, 165.851232],
        [-10.748951, 165.850969],
      ],
    },
    {
      // north dirt section, north
      type: "dirt",
      polygon: [
        [-10.746249, 165.846889],
        [-10.749283, 165.846502],
        [-10.751317, 165.848611],
        [-10.749146, 165.850806],
        [-10.748951, 165.850969],
        [-10.746197, 165.847086],
        [-10.746249, 165.846889],
      ],
    },
    {
      // north dirt section, south
      type: "dirt",
      polygon: [
        [-10.749386, 165.851079],
        [-10.750785, 165.852002],
        [-10.750769, 165.852324],
        [-10.748983, 165.852646],
        [-10.749001, 165.851849],
        [-10.749001, 165.851849],
        [-10.749172, 165.851232],
        [-10.749386, 165.851079],
      ],
    },
    {
      // bridge from north dirt section to castle
      type: "wood",
      polygon: [
        [-10.752914, 165.849929],
        [-10.753236, 165.849687],
        [-10.753386, 165.84987],
        [-10.753035, 165.850124],
        [-10.752914, 165.849929],
      ],
    },
    {
      // bridge in between lakes
      type: "wood",
      polygon: [
        [-10.766464, 165.840568],
        [-10.766598, 165.840884],
        [-10.766353, 165.840975],
        [-10.766213, 165.840648],
        [-10.766464, 165.840568],
      ],
    },
    {
      // south of bridge between lakes
      type: "dirt",
      polygon: [
        [-10.766598, 165.840884],
        [-10.768977, 165.841404],
        [-10.768981, 165.841639],
        [-10.766917, 165.842375],
        [-10.766353, 165.840975],
        [-10.766598, 165.840884],
      ],
    },
    {
      // top of bridge between lakes
      type: "dirt",
      polygon: [
        [-10.759389, 165.838407],
        [-10.767096, 165.836116],
        [-10.767133, 165.839074],
        [-10.766464, 165.840568],
        [-10.766213, 165.840648],
        [-10.75933, 165.838802],
        [-10.759389, 165.838407],
      ],
    },
    {
      // bridge left of entry to temple KOM from fishing village side
      type: "wood",
      polygon: [
        [-10.747467, 165.853989],
        [-10.747728, 165.853952],
        [-10.747813, 165.854373],
        [-10.747546, 165.854424],
        [-10.747467, 165.853989],
      ],
    },
    {
      // bridge between temple KOMs west
      type: "wood",
      polygon: [
        [-10.754775, 165.852056],
        [-10.755001, 165.85205],
        [-10.755001, 165.852249],
        [-10.754775, 165.852265],
        [-10.754775, 165.852056],
      ],
    },
    {
      // road between two bridges between temple KOMs
      type: "dirt",
      polygon: [
        [-10.752938, 165.854083],
        [-10.752756, 165.853246],
        [-10.754474, 165.851921],
        [-10.754775, 165.852056],
        [-10.754775, 165.852265],
        [-10.754385, 165.853024],
        [-10.753188, 165.854172],
        [-10.752938, 165.854083],
      ],
    },
    {
      // bridge between temple KOMs east
      type: "wood",
      polygon: [
        [-10.752938, 165.854083],
        [-10.753188, 165.854172],
        [-10.753072, 165.85452],
        [-10.752809, 165.854424],
        [-10.752938, 165.854083],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "dirt",
      polygon: [
        [-10.753072, 165.85452],
        [-10.756108, 165.8575],
        [-10.7557, 165.859054],
        [-10.755704, 165.859327],
        [-10.749275, 165.858762],
        [-10.747922, 165.854927],
        [-10.74787, 165.854707],
        [-10.74919, 165.85377],
        [-10.752809, 165.854424],
        [-10.753072, 165.85452],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "wood",
      polygon: [
        [-10.7557, 165.859054],
        [-10.756244, 165.859062],
        [-10.756237, 165.859338],
        [-10.755704, 165.859327],
        [-10.7557, 165.859054],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "dirt",
      polygon: [
        [-10.756244, 165.859062],
        [-10.756259, 165.858955],
        [-10.756516, 165.858936],
        [-10.75654, 165.859279],
        [-10.756237, 165.859338],
        [-10.756244, 165.859062],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "wood",
      polygon: [
        [-10.756244, 165.858542],
        [-10.756509, 165.858534],
        [-10.756516, 165.858936],
        [-10.756259, 165.858955],
        [-10.756244, 165.858542],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "dirt",
      polygon: [
        [-10.756244, 165.858542],
        [-10.75615, 165.857892],
        [-10.759001, 165.856653],
        [-10.759453, 165.857233],
        [-10.759464, 165.85751],
        [-10.759054, 165.859115],
        [-10.756509, 165.858534],
        [-10.756244, 165.858542],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "wood",
      polygon: [
        [-10.759453, 165.857233],
        [-10.759993, 165.857025],
        [-10.760179, 165.857252],
        [-10.759553, 165.857666],
        [-10.759464, 165.85751],
        [-10.759453, 165.857233],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "dirt",
      polygon: [
        [-10.759993, 165.857025],
        [-10.760045, 165.856516],
        [-10.760321, 165.856556],
        [-10.760179, 165.857252],
        [-10.759993, 165.857025],
      ],
    },
    {
      // temple KOM from fishing village side
      type: "wood",
      polygon: [
        [-10.760045, 165.856516],
        [-10.760037, 165.856181],
        [-10.760229, 165.855824],
        [-10.760714, 165.855698],
        [-10.760843, 165.855937],
        [-10.760321, 165.856556],
        [-10.760045, 165.856516],
      ],
    },
    {
      // temple KOM arc
      type: "dirt",
      polygon: [
        [-10.760714, 165.855698],
        [-10.761431, 165.855242],
        [-10.76157, 165.855459],
        [-10.760843, 165.855937],
        [-10.760714, 165.855698],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.761431, 165.855242],
        [-10.761876, 165.854558],
        [-10.761981, 165.854333],
        [-10.762269, 165.854609],
        [-10.762429, 165.855014],
        [-10.76157, 165.855459],
        [-10.761431, 165.855242],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.761702, 165.854349],
        [-10.761981, 165.854333],
        [-10.761876, 165.854558],
        [-10.761808, 165.854588],
        [-10.761702, 165.854349],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.761288, 165.85437],
        [-10.761702, 165.854349],
        [-10.761808, 165.854588],
        [-10.761481, 165.854807],
        [-10.761252, 165.854625],
        [-10.761288, 165.85437],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.760756, 165.854384],
        [-10.760941, 165.85429],
        [-10.761288, 165.85437],
        [-10.761252, 165.854625],
        [-10.760941, 165.854577],
        [-10.760756, 165.854384],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.760756, 165.854384],
        [-10.760941, 165.854577],
        [-10.76064, 165.854888],
        [-10.760443, 165.854716],
        [-10.760756, 165.854384],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.760342, 165.854829],
        [-10.760443, 165.854716],
        [-10.76064, 165.854888],
        [-10.76054, 165.855006],
        [-10.760342, 165.854829],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.760342, 165.854829],
        [-10.76054, 165.855006],
        [-10.760142, 165.855593],
        [-10.759918, 165.855497],
        [-10.760013, 165.855073],
        [-10.760342, 165.854829],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.759821, 165.855553],
        [-10.759918, 165.855497],
        [-10.760142, 165.855593],
        [-10.760037, 165.855891],
        [-10.759734, 165.855795],
        [-10.759821, 165.855553],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.759671, 165.854832],
        [-10.759831, 165.855204],
        [-10.759821, 165.855553],
        [-10.759734, 165.855795],
        [-10.759383, 165.855577],
        [-10.759444, 165.854966],
        [-10.759671, 165.854832],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.759508, 165.854608],
        [-10.759671, 165.854832],
        [-10.759444, 165.854966],
        [-10.759304, 165.85479],
        [-10.759508, 165.854608],
      ],
    },
    {
      // temple KOM from castle side
      type: "wood",
      polygon: [
        [-10.759251, 165.854077],
        [-10.759523, 165.854309],
        [-10.759508, 165.854608],
        [-10.759304, 165.85479],
        [-10.759095, 165.854278],
        [-10.759251, 165.854077],
      ],
    },
    {
      // temple KOM from castle side
      type: "dirt",
      polygon: [
        [-10.757884, 165.849226],
        [-10.758063, 165.8494],
        [-10.759251, 165.854077],
        [-10.759095, 165.854278],
        [-10.758502, 165.856046],
        [-10.756527, 165.855955],
        [-10.755001, 165.852249],
        [-10.755001, 165.85205],
        [-10.75693, 165.849734],
        [-10.757884, 165.849226],
      ],
    },
    {
      // bridge north north east
      type: "wood",
      polygon: [
        [-10.743775, 165.854529],
        [-10.744047, 165.854525],
        [-10.744077, 165.855359],
        [-10.743804, 165.855363],
        [-10.743775, 165.854529],
      ],
    },
    {
      // bridge north east
      type: "wood",
      polygon: [
        [-10.744826, 165.856888],
        [-10.746555, 165.856926],
        [-10.746771, 165.857089],
        [-10.746398, 165.857908],
        [-10.74449, 165.857404],
        [-10.744639, 165.857051],
        [-10.744826, 165.856888],
      ],
    },
    {
      // bridge towards castle
      type: "wood",
      polygon: [
        [-10.758761, 165.844682],
        [-10.758962, 165.844666],
        [-10.759012, 165.845184],
        [-10.758756, 165.845235],
        [-10.758761, 165.844682],
      ],
    },
    {
      // castle
      type: "cobbles",
      polygon: [
        [-10.761046, 165.845591],
        [-10.76093, 165.845844],
        [-10.759354, 165.846348],
        [-10.759449, 165.847142],
        [-10.759486, 165.847324],
        [-10.758464, 165.848086],
        [-10.757489, 165.847228],
        [-10.756508, 165.847474],
        [-10.756319, 165.847228],
        [-10.7583, 165.845629],
        [-10.758754, 165.846015],
        [-10.759286, 165.845854],
        [-10.759955, 165.845747],
        [-10.76035, 165.845532],
        [-10.761046, 165.845591],
      ],
    },
    {
      // before tunnel to neokyo
      type: "dirt",
      polygon: [
        [-10.775143, 165.83004],
        [-10.776087, 165.829273],
        [-10.776845, 165.829911],
        [-10.776793, 165.830158],
        [-10.775249, 165.830222],
        [-10.775143, 165.83004],
      ],
    },
    {
      // castle sprint
      type: "brick",
      polygon: [
        [-10.801022, 165.844041],
        [-10.800585, 165.843215],
        [-10.800769, 165.840694],
        [-10.802951, 165.840581],
        [-10.804078, 165.841396],
        [-10.804142, 165.841933],
        [-10.804331, 165.841987],
        [-10.803662, 165.84446],
        [-10.803399, 165.844379],
        [-10.801201, 165.844111],
        [-10.801022, 165.844041],
      ],
    },
    {
      // alley sprint rev
      type: "brick",
      polygon: [
        [-10.800214, 165.848626],
        [-10.801496, 165.846275],
        [-10.80169, 165.84657],
        [-10.800289, 165.84893],
        [-10.800214, 165.848626],
      ],
    },
    {
      // alley sprint
      type: "brick",
      polygon: [
        [-10.801723, 165.846165],
        [-10.803141, 165.845253],
        [-10.803393, 165.845409],
        [-10.80283, 165.846187],
        [-10.801823, 165.84638],
        [-10.801723, 165.846165],
      ],
    },
    {
      // neokyo
      type: "brick",
      polygon: [
        [-10.790821, 165.839401],
        [-10.791358, 165.839465],
        [-10.791495, 165.84035],
        [-10.791627, 165.840994],
        [-10.791759, 165.841429],
        [-10.79188, 165.842877],
        [-10.791669, 165.843698],
        [-10.791329, 165.843719],
        [-10.791274, 165.84403],
        [-10.791039, 165.843993],
        [-10.791089, 165.843749],
        [-10.790684, 165.843762],
        [-10.790257, 165.841922],
        [-10.791095, 165.840935],
        [-10.791279, 165.840479],
        [-10.791163, 165.839776],
        [-10.790821, 165.839401],
      ],
    },
    {
      // rooftop KOM start
      type: "tarmac",
      polygon: [
        [-10.789342, 165.847895],
        [-10.789535, 165.84789],
        [-10.789453, 165.848199],
        [-10.789261, 165.848207],
        [-10.789342, 165.847895],
      ],
    },
    {
      // rooftop KOM section 1
      type: "brick",
      polygon: [
        [-10.789271, 165.848205],
        [-10.78809, 165.848801],
        [-10.78806, 165.849233],
        [-10.788324, 165.849207],
        [-10.789055, 165.84915],
        [-10.789278, 165.849431],
        [-10.789647, 165.849415],
        [-10.789733, 165.848778],
        [-10.789457, 165.848205],
        [-10.789271, 165.848205],
      ],
    },
    {
      // rooftop KOM section 2
      type: "tarmac",
      polygon: [
        [-10.78806, 165.849233],
        [-10.789055, 165.84915],
        [-10.789278, 165.849431],
        [-10.789278, 165.84959],
        [-10.78907, 165.849582],
        [-10.788265, 165.849385],
        [-10.78806, 165.849233],
      ],
    },
    {
      // rooftop KOM section 3
      type: "wood",
      polygon: [
        [-10.78907, 165.849582],
        [-10.789278, 165.84959],
        [-10.789803, 165.849617],
        [-10.789854, 165.850312],
        [-10.789556, 165.850299],
        [-10.789537, 165.850079],
        [-10.789037, 165.849996],
        [-10.78907, 165.849582],
      ],
    },
    {
      // rooftop KOM section 4
      type: "brick",
      polygon: [
        [-10.789037, 165.849996],
        [-10.789537, 165.850079],
        [-10.789556, 165.850299],
        [-10.788966, 165.851471],
        [-10.787501, 165.851449],
        [-10.787854, 165.846831],
        [-10.787864, 165.846643],
        [-10.787522, 165.845956],
        [-10.786439, 165.845825],
        [-10.786252, 165.845817],
        [-10.785398, 165.845669],
        [-10.785377, 165.844266],
        [-10.787171, 165.844065],
        [-10.787727, 165.844299],
        [-10.787598, 165.844527],
        [-10.787748, 165.844666],
        [-10.78788, 165.844438],
        [-10.787727, 165.844299],
        [-10.788059, 165.843864],
        [-10.788497, 165.843993],
        [-10.788713, 165.844411],
        [-10.791037, 165.843969],
        [-10.791282, 165.843996],
        [-10.791574, 165.846831],
        [-10.789535, 165.84789],
        [-10.789342, 165.847895],
        [-10.789144, 165.848183],
        [-10.78809, 165.848801],
        [-10.78806, 165.849233],
        [-10.788265, 165.849385],
        [-10.78907, 165.849582],
        [-10.789037, 165.849996],
      ],
    },
    {
      // rooftop KOM section 5
      type: "tarmac",
      polygon: [
        [-10.787727, 165.844299],
        [-10.78788, 165.844438],
        [-10.787748, 165.844666],
        [-10.787598, 165.844527],
        [-10.787727, 165.844299],
      ],
    },
    {
      // rooftop KOM section 7
      type: "tarmac",
      polygon: [
        [-10.786252, 165.845817],
        [-10.786439, 165.845825],
        [-10.787148, 165.845983],
        [-10.78734, 165.846329],
        [-10.787406, 165.846635],
        [-10.787127, 165.846825],
        [-10.787116, 165.846635],
        [-10.787132, 165.846359],
        [-10.78626, 165.846342],
        [-10.786252, 165.845817],
      ],
    },
    {
      // rooftop KOM section 8
      type: "brick",
      polygon: [
        [-10.787116, 165.846635],
        [-10.787127, 165.846825],
        [-10.787127, 165.847147],
        [-10.787158, 165.84737],
        [-10.786497, 165.847399],
        [-10.786502, 165.846589],
        [-10.787116, 165.846635],
      ],
    },
    {
      // rooftop KOM section 9
      type: "tarmac",
      polygon: [
        [-10.787127, 165.847147],
        [-10.787356, 165.847182],
        [-10.787379, 165.847692],
        [-10.787435, 165.847903],
        [-10.787206, 165.847914],
        [-10.787158, 165.84737],
        [-10.787127, 165.847147],
      ],
    },
    {
      // rooftop KOM section 10
      type: "brick",
      polygon: [
        [-10.787356, 165.847182],
        [-10.787519, 165.846654],
        [-10.787864, 165.846643],
        [-10.787854, 165.846831],
        [-10.787727, 165.847903],
        [-10.787435, 165.847903],
        [-10.787379, 165.847692],
        [-10.787356, 165.847182],
      ],
    },
    {
      type: "brick",
      polygon: [
        [-10.787341, 165.844241],
        [-10.787192, 165.843513],
        [-10.786689, 165.84305],
        [-10.786405, 165.842773],
        [-10.784986, 165.841063],
        [-10.786357, 165.83961],
        [-10.790791, 165.839401],
        [-10.791167, 165.839784],
        [-10.789811, 165.840361],
        [-10.786774, 165.842773],
        [-10.787087, 165.843035],
        [-10.787311, 165.843248],
        [-10.787467, 165.843392],
        [-10.787598, 165.843726],
        [-10.787564, 165.844283],
        [-10.787341, 165.844241],
      ],
    },
    {
      // arcade + start
      type: "brick",
      polygon: [
        [-10.78075, 165.841917],
        [-10.782753, 165.841906],
        [-10.7828, 165.842888],
        [-10.78339, 165.842877],
        [-10.784023, 165.841713],
        [-10.784955, 165.841852],
        [-10.785619, 165.842276],
        [-10.785588, 165.843934],
        [-10.783981, 165.843923],
        [-10.78279, 165.843907],
        [-10.780171, 165.84388],
        [-10.780128, 165.84196],
        [-10.78075, 165.841917],
      ],
    },
  ],
};

const WORLD_CONFIG_NEW_YORK: WorldConfig = {
  initialBounds: [
    [40.799618, -73.982068],
    [40.763547, -73.949602],
  ],
  image: newYorkMap,
  backgroundColor: "#bbbbb7",
  surfaces: [],
};

const WORLD_CONFIG_PARIS: WorldConfig = {
  initialBounds: [
    [48.874328, 2.294207],
    [48.860895, 2.331992],
  ],
  image: parisMap,
  backgroundColor: "#b9b9b9",
  surfaces: [
    {
      // whole world
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [48.9058, 2.2561],
        [48.9058, 2.3722],
        [48.82945, 2.3722],
        [48.82945, 2.2561],
        [48.9058, 2.2561],
      ],
    },
  ],
};

const WORLD_CONFIG_RICHMOND: WorldConfig = {
  initialBounds: [
    [37.558393, -77.467668],
    [37.520429, -77.415864],
  ],
  image: richmondMap,
  backgroundColor: "#7c9938",
  surfaces: [
    {
      // top left
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [37.552037, -77.457716],
        [37.552969, -77.456601],
        [37.560331, -77.466994],
        [37.557636, -77.469665],
        [37.552258, -77.458398],
        [37.552037, -77.457716],
      ],
    },
    {
      // KOM
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [37.527933, -77.419275],
        [37.527265, -77.418585],
        [37.526495, -77.417553],
        [37.527067, -77.416833],
        [37.527464, -77.417485],
        [37.527662, -77.417273],
        [37.528059, -77.417804],
        [37.528486, -77.418464],
        [37.527933, -77.419275],
      ],
    },
    {
      // 23rd street
      type: SURFACE_TYPE_COBBLES,
      polygon: [
        [37.531275, -77.422526],
        [37.530939, -77.421834],
        [37.531777, -77.421024],
        [37.532084, -77.421673],
        [37.531275, -77.422526],
      ],
    },
  ],
};

const WORLD_CONFIG_WATOPIA: WorldConfig = {
  initialBounds: [
    [-11.635444, 166.93555],
    [-11.673613, 166.972511],
  ],
  image: watopiaMap,
  backgroundColor: "#0884e2",
  surfaces: [
    {
      // epic KOM castle
      type: "cobbles",
      polygon: [
        [-11.678957, 166.972306],
        [-11.681067, 166.972329],
        [-11.681081, 166.972807],
        [-11.678979, 166.972913],
        [-11.678957, 166.972306],
      ],
    },
    {
      // radio tower
      type: "snow",
      polygon: [
        [-11.673845, 166.948143],
        [-11.679016, 166.951603],
        [-11.677798, 166.956701],
        [-11.677025, 166.958537],
        [-11.676743, 166.958537],
        [-11.676549, 166.958112],
        [-11.676163, 166.956276],
        [-11.676401, 166.955123],
        [-11.674588, 166.951436],
        [-11.672716, 166.950252],
        [-11.673845, 166.948143],
      ],
    },
    {
      // jungle loop
      type: "dirt",
      polygon: [
        [-11.683264, 166.93731],
        [-11.683453, 166.937653],
        [-11.677916, 166.943393],
        [-11.6753, 166.938114],
        [-11.677191, 166.928587],
        [-11.68588, 166.924982],
        [-11.689967, 166.924049],
        [-11.694432, 166.92995],
        [-11.691575, 166.935732],
        [-11.686574, 166.93776],
        [-11.685565, 166.936666],
        [-11.685428, 166.936344],
        [-11.682854, 166.934166],
        [-11.683957, 166.93054],
        [-11.683611, 166.930228],
        [-11.683327, 166.929638],
        [-11.683332, 166.928388],
        [-11.683054, 166.927793],
        [-11.68193, 166.928297],
        [-11.681431, 166.929264],
        [-11.681858, 166.929465],
        [-11.680942, 166.937191],
        [-11.683264, 166.93731],
      ],
    },
    {
      // jungle middle road
      type: "brick",
      polygon: [
        [-11.681431, 166.929264],
        [-11.68193, 166.928297],
        [-11.683054, 166.927793],
        [-11.683322, 166.928383],
        [-11.682754, 166.928523],
        [-11.681858, 166.929465],
        [-11.681431, 166.929264],
      ],
    },
    {
      // jungle middle road
      type: "wood",
      polygon: [
        [-11.682746, 166.928536],
        [-11.683314, 166.928392],
        [-11.683462, 166.928946],
        [-11.682612, 166.92909],
        [-11.682337, 166.928904],
        [-11.682746, 166.928536],
      ],
    },
    {
      // jungle middle road
      type: "brick",
      polygon: [
        [-11.682344, 166.9289],
        [-11.682619, 166.92909],
        [-11.682916, 166.930437],
        [-11.682638, 166.930493],
        [-11.682181, 166.929173],
        [-11.682344, 166.9289],
      ],
    },
    {
      // jungle middle road
      type: "brick",
      polygon: [
        [-11.683622, 166.930247],
        [-11.68363, 166.930952],
        [-11.683228, 166.930626],
        [-11.68305, 166.929799],
        [-11.683355, 166.929648],
        [-11.683622, 166.930247],
      ],
    },
    {
      // jungle middle road
      type: "wood",
      polygon: [
        [-11.682986, 166.931146],
        [-11.683243, 166.93062],
        [-11.683621, 166.930942],
        [-11.683348, 166.931414],
        [-11.682986, 166.931146],
      ],
    },
    {
      // jungle middle road
      type: "brick",
      polygon: [
        [-11.683362, 166.9314],
        [-11.683132, 166.932606],
        [-11.682634, 166.932462],
        [-11.682649, 166.931703],
        [-11.682998, 166.931142],
        [-11.683362, 166.9314],
      ],
    },
    {
      // jungle middle road
      type: "dirt",
      polygon: [
        [-11.682638, 166.930493],
        [-11.681906, 166.93148],
        [-11.681958, 166.932333],
        [-11.682434, 166.933266],
        [-11.682872, 166.93327],
        [-11.683132, 166.932618],
        [-11.682649, 166.932466],
        [-11.682642, 166.931688],
        [-11.683017, 166.930619],
        [-11.68292, 166.930433],
        [-11.682638, 166.930493],
      ],
    },
    {
      // repack ridge
      type: "grass",
      polygon: [
        [-11.646436, 166.9744],
        [-11.645166, 166.973232],
        [-11.644519, 166.971069],
        [-11.646154, 166.968695],
        [-11.650746, 166.968649],
        [-11.653488, 166.972867],
        [-11.650805, 166.973983],
        [-11.650627, 166.97355],
        [-11.65027, 166.97245],
        [-11.648413, 166.971836],
        [-11.646659, 166.974043],
        [-11.646436, 166.9744],
      ],
    },
    {
      // bridge to start of east epic kom
      type: "wood",
      polygon: [
        [-11.659528, 166.967671],
        [-11.659922, 166.9678],
        [-11.659907, 166.969552],
        [-11.659513, 166.969545],
        [-11.65935, 166.968331],
        [-11.659528, 166.967671],
      ],
    },
    {
      // bridge to start of east epic kom
      type: "dirt",
      polygon: [
        [-11.659523, 166.967677],
        [-11.659555, 166.967554],
        [-11.66003, 166.967704],
        [-11.659902, 166.967804],
        [-11.659523, 166.967677],
      ],
    },
    {
      // bridge east of stadium
      type: "dirt",
      polygon: [
        [-11.636376, 166.959447],
        [-11.636866, 166.958908],
        [-11.637148, 166.959424],
        [-11.636695, 166.959705],
        [-11.636376, 166.959447],
      ],
    },
    {
      // bridge east of stadium
      type: "wood",
      polygon: [
        [-11.636383, 166.959447],
        [-11.636695, 166.959709],
        [-11.636855, 166.961731],
        [-11.636524, 166.961951],
        [-11.6359, 166.960577],
        [-11.63616, 166.959644],
        [-11.636383, 166.959447],
      ],
    },
    {
      // italian village
      type: "dirt",
      polygon: [
        [-11.649193, 166.947544],
        [-11.650203, 166.946755],
        [-11.652106, 166.94765],
        [-11.652091, 166.949258],
        [-11.651058, 166.94894],
        [-11.650813, 166.948492],
        [-11.649193, 166.947544],
      ],
    },
    {
      // italian village
      type: "cobbles",
      polygon: [
        [-11.65107, 166.94895],
        [-11.65107, 166.94895],
        [-11.650891, 166.949519],
        [-11.650891, 166.949519],
        [-11.650067, 166.949573],
        [-11.650067, 166.949573],
        [-11.649767, 166.949272],
        [-11.649767, 166.949272],
        [-11.650492, 166.948317],
        [-11.650492, 166.948317],
        [-11.650823, 166.948489],
        [-11.650823, 166.948489],
        [-11.65107, 166.94895],
      ],
    },
    {
      // JB
      type: "wood",
      polygon: [
        [-11.64569, 166.947938],
        [-11.64719, 166.948974],
        [-11.646979, 166.949293],
        [-11.645489, 166.948234],
        [-11.64569, 166.947938],
      ],
    },
    {
      // pier start
      type: "wood",
      polygon: [
        [-11.635387, 166.952164],
        [-11.635291, 166.952604],
        [-11.635625, 166.953105],
        [-11.634459, 166.953841],
        [-11.633745, 166.954683],
        [-11.63515, 166.955897],
        [-11.635789, 166.955092],
        [-11.636019, 166.953788],
        [-11.636264, 166.953264],
        [-11.635967, 166.953059],
        [-11.635692, 166.952756],
        [-11.635573, 166.952551],
        [-11.635387, 166.952164],
      ],
    },
    {
      // pier start
      type: "wood",
      polygon: [
        [-11.636078, 166.952839],
        [-11.636487, 166.95205],
        [-11.63749, 166.952384],
        [-11.638248, 166.953552],
        [-11.637832, 166.954357],
        [-11.637423, 166.954577],
        [-11.637564, 166.954174],
        [-11.63749, 166.953924],
        [-11.636963, 166.953393],
        [-11.636078, 166.952839],
      ],
    },
    {
      // islands before west epic kom start
      type: "wood",
      polygon: [
        [-11.650203, 166.957748],
        [-11.651073, 166.955623],
        [-11.651422, 166.955775],
        [-11.65056, 166.958195],
        [-11.650203, 166.957748],
      ],
    },
    {
      // islands before west epic kom start
      type: "wood",
      polygon: [
        [-11.651994, 166.955168],
        [-11.653109, 166.955225],
        [-11.653105, 166.955623],
        [-11.651964, 166.955574],
        [-11.651994, 166.955168],
      ],
    },
    {
      // islands before west epic kom start
      type: "wood",
      polygon: [
        [-11.654569, 166.955119],
        [-11.657343, 166.95439],
        [-11.657522, 166.954776],
        [-11.654685, 166.955538],
        [-11.654569, 166.955119],
      ],
    },
    {
      // islands before west epic kom start
      type: "wood",
      polygon: [
        [-11.653525, 166.955965],
        [-11.653948, 166.955927],
        [-11.654008, 166.957816],
        [-11.653614, 166.957892],
        [-11.653525, 166.955965],
      ],
    },
    {
      // islands before west epic kom start
      type: "wood",
      polygon: [
        [-11.654517, 166.958987],
        [-11.654811, 166.959926],
        [-11.654438, 166.960033],
        [-11.654123, 166.959121],
        [-11.654517, 166.958987],
      ],
    },
    {
      // islands before west epic kom start
      type: "dirt",
      polygon: [
        [-11.653109, 166.955232],
        [-11.654574, 166.955125],
        [-11.654695, 166.955538],
        [-11.653949, 166.955956],
        [-11.653539, 166.955978],
        [-11.653098, 166.955618],
        [-11.653109, 166.955232],
      ],
    },
    {
      // islands before west epic kom start
      type: "dirt",
      polygon: [
        [-11.65108, 166.955631],
        [-11.651259, 166.955123],
        [-11.652002, 166.955176],
        [-11.651979, 166.955586],
        [-11.651415, 166.95579],
        [-11.65108, 166.955631],
      ],
    },
    {
      // road between epic koms
      type: "dirt",
      polygon: [
        [-11.666475, 166.952824],
        [-11.667032, 166.952574],
        [-11.667508, 166.953408],
        [-11.667062, 166.953765],
        [-11.666475, 166.952824],
      ],
    },
    {
      // volcano kom
      type: "wood",
      polygon: [
        [-11.642228, 166.937953],
        [-11.643278, 166.937465],
        [-11.64424, 166.937824],
        [-11.644024, 166.93813],
        [-11.64332, 166.937975],
        [-11.642475, 166.938157],
        [-11.642228, 166.937953],
      ],
    },
    {
      // volcano kom
      // earlier than actual to avoid overlaps
      type: "wood",
      polygon: [
        [-11.641492, 166.939895],
        [-11.64176, 166.939809],
        [-11.641996, 166.94026],
        [-11.641755, 166.94041],
        [-11.641492, 166.939895],
      ],
    },
  ],
};

const WORLD_CONFIG_YORKSHIRE: WorldConfig = {
  initialBounds: [
    [53.999691, -1.592961],
    [53.974875, -1.539474],
  ],
  image: yorkshireMap,
  backgroundColor: "#7c9938",
  surfaces: [],
};

export const worldConfigs: Record<WorldSlug, WorldConfig> = {
  bologna: WORLD_CONFIG_BOLOGNA,
  "crit-city": WORLD_CONFIG_CRIT_CITY,
  france: WORLD_CONFIG_FRANCE,
  innsbruck: WORLD_CONFIG_INNSBRUCK,
  london: WORLD_CONFIG_LONDON,
  "makuri-islands": WORLD_CONFIG_MAKURI_ISLANDS,
  "new-york": WORLD_CONFIG_NEW_YORK,
  paris: WORLD_CONFIG_PARIS,
  richmond: WORLD_CONFIG_RICHMOND,
  watopia: WORLD_CONFIG_WATOPIA,
  yorkshire: WORLD_CONFIG_YORKSHIRE,
};
