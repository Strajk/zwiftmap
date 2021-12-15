import { WorldConfig } from "../types";
import makuriIslandsMap from "../maps/makuri-islands.png";

export const WORLD_CONFIG_MAKURI_ISLANDS: WorldConfig = {
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