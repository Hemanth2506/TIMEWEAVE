// Historical data and content for TIMEWEAVE - Hampi 1500 CE

export const HERITAGE_DESTINATIONS = [
  {
    id: 'hampi',
    name: 'HAMPI',
    subheading: 'VIJAYANAGARA EMPIRE',
    era: '1500 CE',
    description: "One of the great medieval cities of South India.",
    fullDescription: "One of the world's great medieval cities — reconstructed as a living world.",
    status: 'ACTIVE',
    location: 'Karnataka, India',
    coordinates: '15.3350° N, 76.4600° E',
    river: 'Tungabhadra',
    tag: 'RECONSTRUCTED',
    stats: {
      peakPopulation: '500,000+',
      urbanArea: '650+ sq km',
      significance: '2nd largest city globally in 1500 CE'
    }
  },
  {
    id: 'dholavira',
    name: 'DHOLAVIRA',
    subheading: 'INDUS VALLEY CIVILIZATION',
    era: 'c. 2500 BCE',
    description: 'Mastery of water harvesting, monumental stone architecture and geometric city planning.',
    status: 'COMING SOON',
    location: 'Rann of Kutch, Gujarat',
    coordinates: '23.8864° N, 70.2131° E',
    tag: 'ARCHAEOLOGICAL SCAN'
  },
  {
    id: 'ajanta',
    name: 'AJANTA CAVES',
    subheading: 'VAKATAKA & GUPTA ERA',
    era: 'c. 450 CE',
    description: 'Masterpieces of Buddhist religious art, rock-cut architecture, and delicate natural tempera murals.',
    status: 'COMING SOON',
    location: 'Aurangabad, Maharashtra',
    coordinates: '20.5519° N, 75.7033° E',
    tag: 'SPECTRAL RESTORATION'
  },
  {
    id: 'chola',
    name: 'CHOLA TEMPLES',
    subheading: 'BRIHADISVARA & THANJAVUR',
    era: 'c. 1010 CE',
    description: 'Towering granite vimanas, bronzes, and maritime trade empires across the Indian Ocean.',
    status: 'COMING SOON',
    location: 'Thanjavur, Tamil Nadu',
    coordinates: '10.7828° N, 79.1318° E',
    tag: 'VIRTUAL SANCTUM'
  }
];

export const TIMELINE_PERIODS = [
  {
    id: '1400',
    year: '1400 CE',
    numericYear: 1400,
    title: 'SANGAMA FOUNDATION',
    eraTitle: 'THE FOUNDING CAPITAL',
    description: 'Harihara I and Bukka Raya establish the fortified kingdom along the sacred Tungabhadra river to unite the Deccan against northern sultanates.',
    quote: '"A natural fortress of granite crags where river and boulder become unbreachable ramparts."',
    indicators: {
      trade: 45,
      architecture: 55,
      culture: 60,
      water: 50,
      people: 40
    },
    statusText: 'Fortifying the Tungabhadra basin'
  },
  {
    id: '1450',
    year: '1450 CE',
    numericYear: 1450,
    title: 'DEVA RAYA II EPOCH',
    eraTitle: 'METROPOLITAN CONVERGENCE',
    description: 'Under Deva Raya II, Persian ambassador Abdur Razzaq arrives, reporting seven concentric fortress walls and a city unlike anything in the known world.',
    quote: '"The pupil of the eye has never seen a place like it... nor the ear of intelligence heard of its equal."',
    indicators: {
      trade: 70,
      architecture: 75,
      culture: 80,
      water: 75,
      people: 70
    },
    statusText: 'Expansion of royal enclosures & cavalry imports'
  },
  {
    id: '1500',
    year: '1500 CE',
    numericYear: 1500,
    title: 'VIJAYANAGARA EMPIRE',
    eraTitle: 'HAMPI AT ITS HEIGHT',
    description: 'At the beginning of the 16th century, Hampi stood at the heart of the Vijayanagara Empire — a thriving center of trade, architecture, religion and culture.',
    quote: '"They sell in the market rubies, diamonds, emeralds, pearls and seed-pearls by the measure of a seer." — Portuguese chronicler Domingo Paes',
    indicators: {
      trade: 100,
      architecture: 100,
      culture: 100,
      water: 95,
      people: 98
    },
    statusText: 'Imperial apex: 500,000 souls, diamond markets & stone music'
  },
  {
    id: '1550',
    year: '1550 CE',
    numericYear: 1550,
    title: 'ARIVIDU ASCENDANCE',
    eraTitle: 'HIGH IMPERIAL TWILIGHT',
    description: 'Aliya Rama Raya directs diplomacy across the Deccan. Italian traveler Cesare Federici marvels at the endless grain and jewel merchant arcades.',
    quote: '"The city is so large that one cannot see it all from one place; the houses of the nobles are veritable palaces."',
    indicators: {
      trade: 88,
      architecture: 92,
      culture: 90,
      water: 85,
      people: 85
    },
    statusText: 'Complex diplomatic tension with Deccan Sultanates'
  },
  {
    id: '1600',
    year: '1600 CE',
    numericYear: 1600,
    title: 'POST-TALIKOTA MEMORY',
    eraTitle: 'THE SILENT MONUMENT',
    description: 'Following the Battle of Talikota (1565), the court moved to Penukonda and Chandragiri. The grand stone halls remain standing as nature and pilgrims reclaim the sacred valley.',
    quote: '"The granite pillars endure, though the silk awnings and golden canopies have turned to starlight."',
    indicators: {
      trade: 20,
      architecture: 65,
      culture: 45,
      water: 35,
      people: 25
    },
    statusText: 'Sacred rituals persist at Virupaksha'
  },
  {
    id: 'present',
    year: 'PRESENT',
    numericYear: 2026,
    title: 'UNESCO HERITAGE MONUMENT',
    eraTitle: 'THE LIVING RUIN',
    description: 'A protected UNESCO World Heritage landscape spanning 4,100 hectares, where 1,600 surviving monuments invite millions to contemplate what once was.',
    quote: '"History leaves traces. TimeWeave helps us see the world behind them."',
    indicators: {
      trade: 30,
      architecture: 60,
      culture: 75,
      water: 40,
      people: 65
    },
    statusText: 'Preserved granite sanctuary and cultural memory'
  }
];

export const HOTSPOTS_1500 = [
  {
    id: '01',
    code: '01',
    title: 'ROYAL CENTER',
    subtitle: 'SEAT OF IMPERIAL POWER',
    x: '24%',
    y: '42%',
    category: 'GOVERNANCE',
    badge: 'PALATIAL ENCLOSURE',
    overview: 'Administrative and ceremonial spaces formed an important part of the imperial city.',
    description: 'Surrounded by multiple rings of mortarless granite masonry, the Royal Center housed the Hazara Rama temple with continuous Ramayana relief friezes, the stepped Mahanavami Dibba where kings celebrated victory festivals, and the Queen’s Bath.',
    architectureDetail: 'Distinctive fusion of traditional Dravidian granite carving with Deccan vaulted arches and plaster stucco work.',
    funFact: 'Foreign ambassadors were received here under silk canopies with gifts of pure gold and Arabian stallions.'
  },
  {
    id: '02',
    code: '02',
    title: 'MARKET',
    subtitle: 'THE SULE & VIRUPAKSHA BAZAARS',
    x: '52%',
    y: '58%',
    category: 'COMMERCE',
    badge: 'GLOBAL TRADE CORRIDOR',
    overview: 'Markets connected merchants, artisans, visitors and the city’s wider economy.',
    description: 'Kilometer-long colonnaded stone avenues lined with two-storey merchant mandapas. Here, Golconda diamonds, Burmese rubies, Ceylon pearls, Malabar black pepper, and Chinese porcelain were traded in open baskets.',
    architectureDetail: 'Double-row granite colonnades that provided continuous shade for merchants and shoppers throughout the scorching Deccan heat.',
    funFact: 'Domingo Paes wrote that precious stones and jewels were not kept locked away but measured openly by weight in brass pans.'
  },
  {
    id: '03',
    code: '03',
    title: 'TEMPLE',
    subtitle: 'SACRED ARCHITECTURE',
    x: '75%',
    y: '34%',
    category: 'SANCTUARY',
    badge: 'LIVING SACRED CORE',
    overview: 'Temple complexes were deeply connected with religious, social and economic life.',
    description: 'Centered on the towering gopurams of Virupaksha Temple and the Vittala Temple complex, famous for its stone processional chariot and 56 musical granite pillars that resonate with specific musical notes when struck gently.',
    architectureDetail: 'Exquisite monolithic granite carving with mythical Yali beasts, composite pillars, and soaring timber-brick superstructure painted in mineral pigments.',
    funFact: 'Virupaksha temple has had uninterrupted daily worship for over 700 years, making it an unbroken living tradition.'
  },
  {
    id: '04',
    code: '04',
    title: 'WATER SYSTEM',
    subtitle: 'HYDRAULIC ENGINEERING',
    x: '40%',
    y: '72%',
    category: 'ENGINEERING',
    badge: 'AQUEDUCTS & STEPWELLS',
    overview: 'Water management was essential to supporting the city’s population, agriculture and monumental architecture.',
    description: 'An astonishing network of gravity-fed stone aqueducts, terracotta pipes, deep geometric stepwells (Pushkarani), and the Kamalapuram reservoir channelled water from the Tungabhadra river through arid rocky ridges into every district.',
    architectureDetail: 'Precision-cut interlocking schist and granite channels with settling tanks to filter silt before domestic use.',
    funFact: 'The stepped tank at the Royal Enclosure was discovered buried under soil and fits together like a giant 3D jigsaw puzzle.'
  },
  {
    id: '05',
    code: '05',
    title: 'PEOPLE',
    subtitle: 'COSMOPOLITAN SOCIETY',
    x: '62%',
    y: '48%',
    category: 'SOCIETY',
    badge: 'MULTICULTURAL POPULACE',
    overview: 'Hampi was not simply a collection of monuments. It was a living urban environment filled with workers, merchants, artisans, pilgrims and visitors.',
    description: 'Court poets reciting Telugu, Kannada and Sanskrit verses, master stonemasons shaping hard granite, silk weavers, temple dancers, Portuguese horse merchants, Arab traders, and soldiers marching with war elephants.',
    architectureDetail: 'Vibrant civic squares surrounded by palm groves, garden pavilions, and community dining halls.',
    funFact: 'Foreign travelers noted that people of all faiths and nations were free to live according to their customs without fear.'
  }
];

export const HISTORICAL_ROLES = [
  {
    id: 'merchant',
    title: 'MERCHANT',
    roleName: 'VIJAYANAGARA MERCHANT',
    subtitle: 'Virashetty of the Hampi Bazaar',
    tag: 'RECOMMENDED',
    description: 'Your day begins before the market fills.',
    todayWorld: [
      'TRADE',
      'MARKETS',
      'TEXTILES',
      'SPICES',
      'PRECIOUS GOODS'
    ],
    perspective: 'I weigh Golconda diamonds and ginger by the basket. Merchants from Lisbon, Hormuz, and Venice seek audience in my bazaar stall.',
    quote: '"A deal sealed at the foot of Virupaksha with pure brass scales is honored across seven seas."'
  },
  {
    id: 'sculptor',
    title: 'SCULPTOR',
    roleName: 'ROYAL GUILD ARCHITECT',
    subtitle: 'Shilpi of the Vittala Sanctum',
    tag: 'CREATIVE',
    description: 'See the granite city being carved by chisel, fire, and water.',
    todayWorld: [
      'GRANITE QUARRYING',
      'MUSICAL PILLARS',
      'STONE CHARIOTS',
      'MYTHOLOGICAL YALI',
      'VIMANA GOPURAM'
    ],
    perspective: 'We split monolithic granite boulders using wooden pegs and water. When I tap the pillar of Vittala, it sings the sapta-swaras.',
    quote: '"Granite is not stone; it is the frozen hymn of our ancestors waiting for the chisel."'
  },
  {
    id: 'soldier',
    title: 'SOLDIER',
    roleName: 'TUNGABHADRA GARRISON GUARD',
    subtitle: 'Kandachara Royal Infantry',
    tag: 'DEFENDER',
    description: 'Defend the seven concentric walls and the river crossings.',
    todayWorld: [
      'SEVEN FORT WALLS',
      'WAR ELEPHANTS',
      'DAMASCUS STEEL',
      'RIVER WATCHTOWERS',
      'MAHANAVAMI DIBBA'
    ],
    perspective: 'From the watchtower above the granite gorge, I watch royal war elephants bathe in the Tungabhadra as dusk falls over the empire.',
    quote: '"No army can scale our boulders without our arrows knowing the echo of their footsteps."'
  },
  {
    id: 'traveler',
    title: 'TRAVELER',
    roleName: 'FOREIGN CHRONICLER',
    subtitle: 'Chronicler in the Royal Court',
    tag: 'OBSERVER',
    description: 'Document the world’s most prosperous metropolis for kings abroad.',
    todayWorld: [
      'COURT CHRONICLES',
      'ROYAL BANQUETS',
      'MULTILINGUAL BAZAARS',
      'PALACE ARCHITECTURE',
      'TRAVEL JOURNALS'
    ],
    perspective: 'I have seen Rome, Constantinople, and Cairo. Yet nothing prepared my eyes for the immense jewel-strewn avenues of Vijayanagara.',
    quote: '"What I write here will seem a fairy tale to my countrymen in Europe, yet it is all living truth."'
  }
];

export const CHAT_QUESTIONS = [
  "What was traded in Hampi?",
  "What was daily life like?",
  "Why was Hampi important?",
  "How did people get water?",
  "What did the markets look like?",
  "Who visited Hampi?"
];

export const KNOWLEDGE_BASE = [
  {
    triggers: ['trade', 'traded', 'sell', 'buy', 'market', 'goods', 'diamond', 'ruby', 'spices', 'gold', 'currency'],
    question: "What was traded in Hampi?",
    response: "In our bazaars, especially Sule Bazaar and Virupaksha Bazaar, trade is the heartbeat of life! We trade Golconda diamonds, Burmese rubies, emeralds from Central Asia, and pearls from the Gulf of Mannar. As Portuguese traveler Domingo Paes witnessed, jewels are sold openly by weight in brass scales! We also trade Malabar black pepper, cinnamon, cardamom, exquisite dyed cottons, Chinese silks, and prized warhorses imported across the Arabian Sea from Persia and Hormuz. Our currency, the gold Varaha (or Pagoda), is accepted across all Asian sea routes."
  },
  {
    triggers: ['daily life', 'life', 'routine', 'people', 'food', 'clothes', 'eat', 'wear', 'day'],
    question: "What was daily life like?",
    response: "Daily life in 1500 CE begins before dawn with prayers and bathing in the sacred Tungabhadra river or the stone stepwells. Streets are swept, and doorways decorated with rice-flour rangoli. People wear unstitched draped silks and fine cottons; men wear pagdi turbans and shawls with gold zari borders, while women wear vibrant sarees with jasmine garlands in their hair. Food is rich and vegetarian in the sacred quarters—fragrant rice with lentils, ghee, bananas, coconut curries, jackfruit, and payasam. In the evenings, streets are lit with sesame-oil lamps, and citizens gather at temple mandapas for music, dance, and shadow-puppet plays."
  },
  {
    triggers: ['important', 'significance', 'why', 'capital', 'power', 'krishnadevaraya', 'empire', 'great'],
    question: "Why was Hampi important?",
    response: "Hampi was the majestic capital of the Vijayanagara Empire, standing as the second-largest city in the entire medieval world after Beijing! It was important for three key reasons: First, its strategic natural defense—rugged granite boulder hills and the fierce Tungabhadra river. Second, its supreme economic wealth, controlling all maritime trade ports along the Arabian Sea and Bay of Bengal. Third, it was the greatest patron of arts, literature, temple architecture, and religious tolerance in southern India, reaching its zenith under the emperor Sri Krishnadevaraya."
  },
  {
    triggers: ['water', 'aqueduct', 'stepwell', 'pushkarani', 'river', 'irrigation', 'drink', 'tank', 'well'],
    question: "How did people get water?",
    response: "Water was our greatest engineering marvel! In this semi-arid Deccan plateau, our hydraulic engineers harnessed the Tungabhadra river using granite anicuts (dams). Water was carried through monumental stone aqueducts and subterranean terracotta pipes into the city. We built massive reservoirs like the Kamalapuram tank and exquisite geometric stepwells called Pushkaranis. Even during summer droughts, royal baths, royal fountains, temple cleansing tanks, and thousands of lush banana plantations had continuous flowing water thanks to precise gravity-fed channels."
  },
  {
    triggers: ['markets look like', 'bazaar', 'shops', 'look like', 'streets', 'architecture of market', 'avenue'],
    question: "What did the markets look like?",
    response: "Picture an avenue nearly one kilometer long and 35 meters wide, lined on both sides with elegant double-storeyed carved stone pavilions! During the heat of the midday sun, wide cloth canopies are extended between the granite pillars to create a breezy, shaded arcade. Flower sellers display fragrant garlands of jasmine and marigolds; spice merchants pile mounds of crimson turmeric and fragrant cloves; and jewelers sit on polished rugs weighing precious gems with delicate brass scales while oxen carts and caparisoned elephants pass by."
  },
  {
    triggers: ['visited', 'foreign', 'traveler', 'portuguese', 'persian', 'ambassador', 'domingo paes', 'abdur razzaq', 'who came'],
    question: "Who visited Hampi?",
    response: "Travelers, ambassadors, and merchants arrived from every corner of the world! Persian envoy Abdur Razzaq came in 1443 and was awestruck by its seven concentric walls. Portuguese chronicler Domingo Paes arrived around 1520 and declared Hampi 'as large as Rome, and very beautiful to the sight.' Fernão Nunes, Italian merchant Niccolò de' Conti, and traders from Venice, China, Yemen, and the Malacca Sultanate regularly stayed in our guest quarters. The empire welcomed all foreign visitors with open hospitality."
  }
];

export const ARCHAEOLOGICAL_OBJECTS = [
  {
    id: 'stone',
    title: 'GRANITE MEGALITH',
    subtitle: 'MORTARLESS MASONRY',
    shape: 'cube',
    material: 'Coarse Pinkish Granite',
    significance: 'Split without explosives using dry wooden wedges and water swelling. Precision-fitted stone blocks standing strong for 500+ years without mortar.',
    coordinates: 'Grid B-4 · Royal Enclosure'
  },
  {
    id: 'inscription',
    title: 'ROYAL INSCRIPTION',
    subtitle: 'KANNADA & TELUGU COPPER/STONE',
    shape: 'octahedron',
    material: 'Basalt Epigraph Slab',
    significance: 'Recording royal land grants, canal excavations, and international merchant tax exemptions during Sri Krishnadevaraya\'s coronation.',
    coordinates: 'Grid C-2 · Krishna Temple Gopuram'
  },
  {
    id: 'pillar',
    title: 'MUSICAL SAPTA-SWARA PILLAR',
    subtitle: 'ACOUSTIC GRANITE RESONATOR',
    shape: 'cylinder',
    material: 'High-Density Granite Cluster',
    significance: 'Solid granite columns carved with surrounding satellite sub-pillars that each resonate with distinct frequencies (Sa-Re-Ga-Ma-Pa-Dha-Ni).',
    coordinates: 'Grid D-1 · Vittala Maha-Mandapa'
  },
  {
    id: 'sculpture',
    title: 'YALI BALUSTRADE',
    subtitle: 'MYTHICAL GUARDIAN CREATURE',
    shape: 'torus',
    material: 'Greenish Chlorite Schist Relief',
    significance: 'Composite mythological protector combining the lion\'s courage, elephant\'s strength, and serpent\'s cunning, guarding ceremonial staircases.',
    coordinates: 'Grid A-5 · Mahanavami Dibba'
  },
  {
    id: 'water',
    title: 'GRAVITY AQUEDUCT',
    subtitle: 'INTERLOCKING HYDRAULIC BLOCK',
    shape: 'dodecahedron',
    material: 'Mortise & Tenon Schist Channel',
    significance: 'Channeling cold water over 20 kilometers across boulder hills into the Stepped Bath pushkarani with continuous gradient alignment.',
    coordinates: 'Grid B-8 · Stepped Tank Complex'
  }
];

export const SURVIVAL_METRICS = [
  {
    category: 'ARCHITECTURE',
    percentage: 65,
    status: 'Core Granite Preserved',
    lossDescription: 'Monumental granite pillars, plinths, and stone gopurams stand intact; timber-brick superstructures and stucco vanished over centuries.',
    color: '#d4af37'
  },
  {
    category: 'CULTURE & RITUALS',
    percentage: 80,
    status: 'Continuous Living Tradition',
    lossDescription: 'Virupaksha temple maintains unbroken daily worship and annual chariot festivals since the 14th century.',
    color: '#c87d55'
  },
  {
    category: 'TRADE & COMMERCE',
    percentage: 25,
    status: 'Transformed into Cultural Tourism',
    lossDescription: 'Global gemstone and horse bazaar ceased; local handicrafts, stone carving, and heritage hospitality remain.',
    color: '#e5c07b'
  },
  {
    category: 'WATER ENGINEERING',
    percentage: 50,
    status: 'Functional Ancient Canals',
    lossDescription: 'Several Raya and Turtha canals still irrigate surrounding paddy and banana fields along the Tungabhadra today.',
    color: '#38bdf8'
  },
  {
    category: 'LANDSCAPE & BOULDERS',
    percentage: 95,
    status: 'Timeless Geological Formations',
    lossDescription: 'The ancient 3-billion-year-old granite boulder topography and sacred river curve remain virtually unchanged.',
    color: '#997a3a'
  }
];

export const IMPACT_PILLARS = [
  {
    id: 'edu',
    title: 'EDUCATION',
    tag: 'IMMERSIVE PEDAGOGY',
    headline: 'Turn history into an experience.',
    description: 'Students no longer memorize isolated dates. By walking the market of 1500 CE and speaking to its inhabitants, history shifts from passive facts to unforgettable spatial memory.',
    stat: '10x engagement',
    sub: 'compared to traditional historical reading'
  },
  {
    id: 'tourism',
    title: 'TOURISM',
    tag: 'CONTEXTUAL TRAVEL',
    headline: 'Make cultural travel more meaningful.',
    description: 'Turn a 2-hour casual visit to sunlit ruins into an emotional journey. Travelers perceive the living society that carved the stone beneath their feet.',
    stat: 'Living Heritage',
    sub: 'bridging ruins with historical glory'
  },
  {
    id: 'preservation',
    title: 'PRESERVATION',
    tag: 'DIGITAL PERPETUITY',
    headline: 'Create awareness around what must survive.',
    description: 'Ancient monuments face weathering, climate shifts, and human pressure. High-fidelity digital reconstructions safeguard humanity’s heritage before memories fade.',
    stat: 'Eternal Record',
    sub: 'democratizing global heritage access'
  }
];

export const FUTURE_ROADMAP = [
  { era: '1500 CE', name: 'HAMPI', subtitle: 'VIJAYANAGARA EMPIRE', status: 'ACTIVE PROTOTYPE', color: '#d4af37' },
  { era: '2500 BCE', name: 'DHOLAVIRA', subtitle: 'INDUS VALLEY HYDRAULICS', status: 'NEXT HORIZON', color: '#c87d55' },
  { era: '450 CE', name: 'AJANTA', subtitle: 'VAKATAKA ROCK FRESCOES', status: 'ARCHAEOLOGICAL SCAN', color: '#38bdf8' },
  { era: '1010 CE', name: 'CHOLA TEMPLES', subtitle: 'OCEANIC MARITIME EMPIRE', status: 'SANCTUM MAPPING', color: '#f3e5ab' },
  { era: 'PAN-INDIA', name: 'INDIAN HERITAGE', subtitle: '5,000 YEARS RECONSTRUCTED', status: 'NATIONAL ARCHIVE', color: '#997a3a' },
  { era: 'GLOBAL', name: 'GLOBAL HERITAGE', subtitle: 'SHARED HUMAN CHRONICLE', status: 'UNIVERSAL ACCESS', color: '#ffffff' }
];
