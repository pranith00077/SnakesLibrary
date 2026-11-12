
export const snakes = [
  {
    id: "king-cobra",

    // BASIC INFORMATION
    name: "King Cobra",
    scientificName: "Ophiophagus hannah",
    species: "O. hannah",
    genus: "Ophiophagus",
    family: "Elapidae",
    order: "Squamata",
    class: "Reptilia",
    category: "Cobras",

    // VENOM
    venomous: true,
    venomType: "Neurotoxic",
    venomDetails:
      "Its venom can interfere with nervous system function and breathing.",

    // PHYSICAL CHARACTERISTICS
    averageLength: "3–3.6 metres",
    maximumLength: "Approximately 5.5–5.8 metres",
    averageWeight: "Variable; depends on age and sex",
    lifespanWild: "Approximately 20 years",

    // BIOLOGY
    diet: [
      "Other snakes",
      "Cobras",
      "Kraits",
      "Rat snakes",
      "Occasionally monitor lizards"
    ],
    huntingMethod: "Active hunting",
    activity: "Primarily diurnal",
    reproduction: "Oviparous (egg-laying)",
    clutchSize: "Approximately 21–40 eggs",

    // HABITAT AND DISTRIBUTION
    habitat: [
      "Tropical forests",
      "Bamboo forests",
      "Mangrove forests",
      "Forest edges",
      "Some agricultural landscapes"
    ],

    distribution:
      "South and Southeast Asia, including India, Nepal, Bangladesh, Myanmar, Thailand, Malaysia, Indonesia and parts of southern China.",

    // CONSERVATION
    conservationStatus: "Vulnerable",
    populationTrend: "Decreasing",
    majorThreats: [
      "Habitat destruction",
      "Deforestation",
      "Illegal wildlife trade",
      "Human persecution"
    ],

    // IMAGE
    image: "/images/snakes/king-cobra.png",

    // DESCRIPTION
    description:
      "The king cobra is a large venomous snake famous for its hood, impressive size and specialized diet of other snakes. It inhabits forests and several other natural environments across South and Southeast Asia.",

    // INTERESTING FACTS
    facts: [
      "It is the world's longest venomous snake.",
      "It primarily feeds on other snakes.",
      "Females construct nests for their eggs.",
      "It can raise a substantial portion of its body when threatened.",
      "It uses a distinctive hood display as a warning."
    ]
  },

  {
    id: "ball-python",

    // BASIC INFORMATION
    name: "Ball Python",
    scientificName: "Python regius",
    species: "P. regius",
    genus: "Python",
    family: "Pythonidae",
    order: "Squamata",
    class: "Reptilia",
    category: "Pythons",

    // VENOM
    venomous: false,
    venomType: "None",
    venomDetails:
      "A non-venomous constrictor that subdues prey by constriction.",

    // PHYSICAL CHARACTERISTICS
    averageLength: "1–1.5 metres",
    maximumLength: "Approximately 1.8 metres",
    averageWeight: "Approximately 1–3 kg; varies",
    lifespanWild: "Approximately 10–20 years",

    // BIOLOGY
    diet: [
      "Rats",
      "Mice",
      "Other small mammals",
      "Occasionally birds"
    ],
    huntingMethod: "Ambush and constriction",
    activity: "Primarily nocturnal",
    reproduction: "Oviparous (egg-laying)",
    clutchSize: "Approximately 3–11 eggs",

    // HABITAT AND DISTRIBUTION
    habitat: [
      "Grasslands",
      "Savannas",
      "Open forests",
      "Agricultural landscapes"
    ],

    distribution:
      "West and Central Africa, including countries such as Ghana, Nigeria, Benin, Togo and Cameroon.",

    // CONSERVATION
    conservationStatus: "Near Threatened",
    populationTrend: "Requires current assessment",
    majorThreats: [
      "Habitat degradation",
      "Collection for the pet trade",
      "Human exploitation"
    ],

    // IMAGE
    image: "/images/snakes/ball-python.png",

    // DESCRIPTION
    description:
      "The ball python is a non-venomous constrictor native to West and Central Africa. It is famous for curling into a tight ball with its head protected when threatened.",

    // INTERESTING FACTS
    facts: [
      "It is also called the royal python.",
      "It curls into a ball as a defensive response.",
      "Females are generally larger than males.",
      "It kills prey through constriction.",
      "It is one of the most popular pet python species."
    ]
  },
  

{
  id: "indian-cobra",
  name: "Indian Cobra",
  scientificName: "Naja naja",
  species: "N. naja",
  genus: "Naja",
  family: "Elapidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Cobras",

  venomous: true,
  venomType: "Neurotoxic",
  venomDetails:
    "Its venom affects the nervous system and can cause paralysis and respiratory failure.",

  averageLength: "1–1.5 metres",
  maximumLength: "Approximately 2.2 metres",
  averageWeight: "Approximately 1–2 kg",
  lifespanWild: "Approximately 15–20 years",

  diet: [
    "Rodents",
    "Frogs",
    "Lizards",
    "Other snakes",
    "Small mammals"
  ],

  huntingMethod: "Active hunting",
  activity: "Primarily nocturnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 10–30 eggs",

  habitat: [
    "Agricultural fields",
    "Grasslands",
    "Forests",
    "Wetlands",
    "Human settlements"
  ],

  distribution:
    "India, Pakistan, Bangladesh, Nepal, Bhutan and Sri Lanka.",

  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Illegal wildlife trade"
  ],

  image: "/images/snakes/indian-cobra.png",

  description:
    "The Indian cobra, also known as the spectacled cobra, is a highly venomous snake native to the Indian subcontinent. It is recognized by its expandable hood and distinctive spectacle-shaped marking.",

  facts: [
    "It is also called the spectacled cobra.",
    "It displays a distinctive spectacle-shaped marking on its hood.",
    "It spreads its hood when threatened.",
    "It helps control rodent populations.",
    "It is one of India's Big Four medically significant snakes."
  ]
},

{
  id: "russells-viper",
  name: "Russell's Viper",
  scientificName: "Daboia russelii",
  species: "D. russelii",
  genus: "Daboia",
  family: "Viperidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Vipers",

  venomous: true,
  venomType: "Hemotoxic and cytotoxic",
  venomDetails:
    "Its venom can cause severe bleeding, tissue damage, and kidney complications.",

  averageLength: "1–1.5 metres",
  maximumLength: "Approximately 1.7 metres",
  averageWeight: "Approximately 1–2 kg",
  lifespanWild: "Approximately 10–15 years",

  diet: [
    "Rats",
    "Mice",
    "Small mammals",
    "Birds",
    "Lizards",
    "Frogs"
  ],

  huntingMethod: "Ambush hunting",
  activity: "Primarily nocturnal",
  reproduction: "Viviparous (gives birth to live young)",
  clutchSize: "Approximately 5–50 live young",

  habitat: [
    "Grasslands",
    "Scrublands",
    "Agricultural fields",
    "Open forests",
    "Coastal lowlands",
    "Human settlements"
  ],

  distribution:
    "India, Pakistan, Nepal, Bangladesh, Bhutan and Sri Lanka.",

  conservationStatus: "Least Concern",
  populationTrend: "Decreasing",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Illegal wildlife trade"
  ],

  image: "/images/snakes/russells-viper.png",

  description:
    "Russell's viper is a highly venomous snake native to South Asia. It is recognized by its stout body, triangular head, and distinctive chain-like pattern of dark oval markings bordered by lighter edges. It is an important predator of rodents and one of India's medically significant venomous snakes.",

  facts: [
    "It is one of India's Big Four venomous snakes.",
    "Its body has three rows of distinctive oval markings.",
    "It produces live young instead of laying eggs.",
    "It helps control rodent populations.",
    "It can produce a loud hiss when threatened.",
    "It is primarily active during nighttime."
  ]
},

{
  id: "common-krait",

  // BASIC INFORMATION
  name: "Common Krait",
  scientificName: "Bungarus caeruleus",
  species: "B. caeruleus",
  genus: "Bungarus",
  family: "Elapidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Kraits",

  // VENOM
  venomous: true,
  venomType: "Neurotoxic",
  venomDetails:
    "Its venom contains powerful neurotoxins that interfere with nerve transmission and can cause paralysis and respiratory failure.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "0.9–1.2 metres",
  maximumLength: "Approximately 1.75 metres",
  averageWeight: "Approximately 0.5–1 kg; varies",
  lifespanWild: "Approximately 10–15 years",

  // BIOLOGY
  diet: [
    "Other snakes",
    "Lizards",
    "Small mammals",
    "Occasionally frogs"
  ],
  huntingMethod: "Active hunting, primarily feeding on other snakes",
  activity: "Primarily nocturnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 8–20 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Agricultural fields",
    "Grasslands",
    "Forests",
    "Rural settlements",
    "Areas near water"
  ],

  distribution:
    "India, Bangladesh, Nepal, Pakistan and Sri Lanka.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Snakebite-related killing"
  ],

  // IMAGE
  image: "/images/snakes/common-krait.png",

  // DESCRIPTION
  description:
    "The common krait is a highly venomous snake native to the Indian subcontinent. It is recognized by its glossy black or bluish-black body with narrow white bands and is primarily active at night.",

  // INTERESTING FACTS
  facts: [
    "It is one of India's Big Four medically significant snakes.",
    "It has highly potent neurotoxic venom.",
    "It frequently feeds on other snakes.",
    "It is generally more active at night.",
    "It may enter houses while searching for prey or shelter."
  ]
},

{
  id: "indian-rat-snake",

  // BASIC INFORMATION
  name: "Indian Rat Snake",
  scientificName: "Ptyas mucosa",
  species: "P. mucosa",
  genus: "Ptyas",
  family: "Colubridae",
  order: "Squamata",
  class: "Reptilia",
  category: "Rat Snakes",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous snake that captures prey using its speed and strong jaws.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "1.5–2 metres",
  maximumLength: "Approximately 3 metres",
  averageWeight: "Approximately 1–3 kg; varies",
  lifespanWild: "Approximately 10–15 years",

  // BIOLOGY
  diet: [
    "Rats",
    "Mice",
    "Frogs",
    "Lizards",
    "Birds",
    "Small mammals"
  ],
  huntingMethod: "Active hunting and pursuit",
  activity: "Primarily diurnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 6–16 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Agricultural fields",
    "Grasslands",
    "Forests",
    "Wetlands",
    "Human settlements"
  ],

  distribution:
    "India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka and parts of Southeast Asia.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/indian-rat-snake.png",

  // DESCRIPTION
  description:
    "The Indian rat snake is a fast-moving, non-venomous snake commonly found across the Indian subcontinent. It helps control rodent populations and is frequently encountered in agricultural areas and near human settlements.",

  // INTERESTING FACTS
  facts: [
    "It is commonly called the dhaman in India.",
    "It is an excellent climber.",
    "It is an important natural controller of rodent populations.",
    "It can move rapidly when threatened.",
    "It may raise its head and inflate its neck when threatened."
  ]
},
{
  id: "saw-scaled-viper",

  // BASIC INFORMATION
  name: "Saw-scaled Viper",
  scientificName: "Echis carinatus",
  species: "E. carinatus",
  genus: "Echis",
  family: "Viperidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Vipers",

  // VENOM
  venomous: true,
  venomType: "Hemotoxic",
  venomDetails:
    "A highly venomous snake whose venom affects blood clotting and can cause severe bleeding, tissue damage and other serious complications.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "30–60 cm",
  maximumLength: "Approximately 80 cm",
  averageWeight: "Approximately 100–250 g; varies",
  lifespanWild: "Approximately 10–15 years",

  // BIOLOGY
  diet: [
    "Rodents",
    "Lizards",
    "Frogs",
    "Scorpions",
    "Large insects",
    "Small mammals"
  ],
  huntingMethod: "Ambush hunting",
  activity: "Primarily nocturnal; may be active during cooler daytime conditions",
  reproduction: "Ovoviparous (gives birth to live young in Central Asia , South Asia and Middle East)",
  clutchSize: "Approximately 3–15 young",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Dry grasslands",
    "Rocky areas",
    "Deserts",
    "Scrublands",
    "Agricultural fields",
    "Semi-arid regions"
  ],

  distribution:
    "India, Pakistan, Sri Lanka, Bangladesh and parts of the Middle East.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/saw-scaled-viper.png",

  // DESCRIPTION
  description:
    "The saw-scaled viper is a small but highly venomous snake found in dry and rocky regions of the Indian subcontinent. It is recognized by its rough, keeled scales and characteristic defensive hissing sound produced by rubbing its body coils together. It is considered one of the medically important venomous snakes in India.",

  // INTERESTING FACTS
  facts: [
    "It is one of the Big Four medically important venomous snakes in India.",
    "It produces a distinctive hissing sound by rubbing its rough scales together.",
    "It is relatively small compared to many other vipers.",
    "It has strongly keeled scales that give its body a rough appearance.",
    "It can strike rapidly when threatened.",
    "It is an important predator of rodents and other small animals."
  ]
},
{
  id: "indian-rock-python",

  // BASIC INFORMATION
  name: "Indian Rock Python",
  scientificName: "Python molurus",
  species: "P. molurus",
  genus: "Python",
  family: "Pythonidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Pythons",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous constrictor that captures prey using its strong body coils and kills by constriction.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "2.5–3.5 metres",
  maximumLength: "Approximately 5–6 metres",
  averageWeight: "Approximately 20–40 kg; varies",
  lifespanWild: "Approximately 15–20 years",

  // BIOLOGY
  diet: [
    "Rats",
    "Mice",
    "Rabbits",
    "Birds",
    "Monkeys",
    "Deer",
    "Other small mammals"
  ],
  huntingMethod: "Ambush hunting and constriction",
  activity: "Primarily nocturnal and crepuscular",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 8–100 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Tropical forests",
    "Grasslands",
    "Rocky hills",
    "Wetlands",
    "Riverbanks",
    "Swamps",
    "Agricultural areas"
  ],

  distribution:
    "India, Pakistan, Nepal, Bangladesh and Sri Lanka.",

  // CONSERVATION
  conservationStatus: "Near Threatened",
  populationTrend: "Decreasing",
  majorThreats: [
    "Habitat destruction",
    "Illegal wildlife trade",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/indian-rock-python.png",

  // DESCRIPTION
  description:
    "The Indian rock python is a large, non-venomous snake native to the Indian subcontinent. It is recognized by its thick muscular body and beautiful brown, yellow and black patterns. It captures prey using its powerful body coils and plays an important role in maintaining ecological balance by controlling populations of mammals and birds.",

  // INTERESTING FACTS
  facts: [
    "It is one of the largest snake species found in India.",
    "It kills its prey through constriction rather than venom.",
    "It is an excellent swimmer.",
    "It can climb trees despite its large body.",
    "Female pythons coil around their eggs to protect and warm them.",
    "It can go for extended periods without eating after a large meal."
  ]
},
{
  id: "banded-krait",

  // BASIC INFORMATION
  name: "Banded Krait",
  scientificName: "Bungarus fasciatus",
  species: "B. fasciatus",
  genus: "Bungarus",
  family: "Elapidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Kraits",

  // VENOM
  venomous: true,
  venomType: "Neurotoxic",
  venomDetails:
    "A highly venomous snake whose neurotoxic venom affects the nervous system and can cause paralysis and respiratory failure.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "1.5–2 metres",
  maximumLength: "Approximately 2.5 metres",
  averageWeight: "Approximately 2–3 kg; varies",
  lifespanWild: "Approximately 10–15 years",

  // BIOLOGY
  diet: [
    "Other snakes",
    "Lizards",
    "Rodents",
    "Small mammals",
    "Frogs",
    "Fish"
  ],
  huntingMethod: "Active hunting and ambush",
  activity: "Primarily nocturnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 4–14 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Grasslands",
    "Forests",
    "Wetlands",
    "Agricultural fields",
    "Riverbanks",
    "Marshy areas"
  ],

  distribution:
    "India, Bangladesh, Nepal, Bhutan, Myanmar, Thailand, Cambodia, Vietnam, Malaysia and parts of Southeast Asia.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/banded-krait.png",

  // DESCRIPTION
  description:
    "The banded krait is a highly venomous snake recognized by its distinctive alternating black and yellow bands. It is commonly found in forests, grasslands and wetland habitats. It mainly feeds on other snakes and small animals and is generally active at night.",

  // INTERESTING FACTS
  facts: [
    "It has distinctive black and yellow bands across its body.",
    "It is one of the largest krait species.",
    "It mainly feeds on other snakes.",
    "It is primarily active during nighttime.",
    "It has strongly neurotoxic venom.",
    "It is generally shy and avoids human contact."
  ]
},
{
  id: "checkered-keelback",

  // BASIC INFORMATION
  name: "Checkered Keelback",
  scientificName: "Fowlea piscator",
  species: "F. piscator",
  genus: "Fowlea",
  family: "Natricidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Water Snakes",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous water snake that captures and swallows prey using its jaws.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "60–90 cm",
  maximumLength: "Approximately 1.5 metres",
  averageWeight: "Approximately 200–500 g; varies",
  lifespanWild: "Approximately 8–10 years",

  // BIOLOGY
  diet: [
    "Fish",
    "Frogs",
    "Tadpoles",
    "Small rodents",
    "Lizards",
    "Aquatic animals"
  ],
  huntingMethod: "Active hunting in and around water",
  activity: "Primarily diurnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 10–40 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Ponds",
    "Lakes",
    "Rivers",
    "Marshes",
    "Wetlands",
    "Agricultural fields",
    "Water channels"
  ],

  distribution:
    "India, Pakistan, Bangladesh, Nepal, Sri Lanka and other parts of South Asia.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Wetland destruction",
    "Water pollution",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/checkered-keelback.png",

  // DESCRIPTION
  description:
    "The checkered keelback is a non-venomous water snake commonly found near ponds, lakes, rivers and wetlands. It is recognized by its distinctive dark checkered patterns. It is an excellent swimmer and mainly feeds on fish, frogs and other small aquatic animals.",

  // INTERESTING FACTS
  facts: [
    "It is commonly found near freshwater habitats.",
    "It is an excellent swimmer.",
    "Its body has a distinctive checkered pattern.",
    "It mainly feeds on fish and frogs.",
    "It can move quickly both on land and in water.",
    "It plays an important role in aquatic ecosystems."
  ]
},

{
  id: "hump-nosed-pit-viper",

  // BASIC INFORMATION
  name: "Hump-nosed Pit Viper",
  scientificName: "Hypnale hypnale",
  species: "H. hypnale",
  genus: "Hypnale",
  family: "Viperidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Pit Vipers",

  // VENOM
  venomous: true,
  venomType: "Hemotoxic",
  venomDetails:
    "A venomous pit viper with medically significant venom that can cause swelling, tissue damage and blood-clotting abnormalities.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "30–45 cm",
  maximumLength: "Approximately 55 cm",
  averageWeight: "Approximately 100–300 g; varies",
  lifespanWild: "Approximately 10–15 years; estimated",

  // BIOLOGY
  diet: [
    "Frogs",
    "Lizards",
    "Small rodents",
    "Small mammals"
  ],
  huntingMethod: "Ambush hunting",
  activity: "Primarily nocturnal",
  reproduction: "Viviparous (gives birth to live young)",
  clutchSize: "Approximately 5–20 young",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Moist forests",
    "Leaf litter",
    "Rocky areas",
    "Coffee plantations",
    "Forest edges",
    "Dense vegetation"
  ],

  distribution:
    "Western Ghats of southwestern India and Sri Lanka.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Agricultural activities"
  ],

  // IMAGE
  image: "/images/snakes/hump-nosed-pit-viper.png",

  // DESCRIPTION
  description:
    "The hump-nosed pit viper is a venomous snake found in the Western Ghats and Sri Lanka. It is recognized by its stout body, triangular head and distinctive upturned snout. It usually inhabits moist forests and leaf litter and feeds on frogs, lizards and small rodents.",

  // INTERESTING FACTS
  facts: [
    "It has a distinctive upturned, hump-like snout.",
    "It possesses heat-sensing pits between its eyes and nostrils.",
    "It is a venomous pit viper with medically significant venom.",
    "It is primarily active during the night.",
    "It mainly hunts frogs, lizards and small rodents.",
    "It is native to the Western Ghats and Sri Lanka."
  ]
},

{
  id: "common-wolf-snake",

  // BASIC INFORMATION
  name: "Common Wolf Snake",
  scientificName: "Lycodon aulicus",
  species: "L. aulicus",
  genus: "Lycodon",
  family: "Colubridae",
  order: "Squamata",
  class: "Reptilia",
  category: "Wolf Snakes",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous snake that captures prey using its sharp teeth without venom.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "50–60 cm",
  maximumLength: "Approximately 85 cm",
  averageWeight: "Approximately 100–300 g; varies",
  lifespanWild: "Approximately 8–10 years; estimated",

  // BIOLOGY
  diet: [
    "Geckos",
    "Lizards",
    "Skinks",
    "Small frogs",
    "Small rodents"
  ],
  huntingMethod: "Active hunting",
  activity: "Primarily nocturnal",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 4–7 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Rocky areas",
    "Forests",
    "Stone piles",
    "Tree hollows",
    "Buildings",
    "Human habitations"
  ],

  distribution:
    "India, Sri Lanka, Nepal, Bangladesh, Pakistan, Bhutan and Myanmar.",

  // CONSERVATION
  conservationStatus: "Least Concern",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Accidental killing"
  ],

  // IMAGE
  image: "/images/snakes/common-wolf-snake.png",

  // DESCRIPTION
  description:
    "The common wolf snake is a non-venomous snake widely distributed across India. It has a slender body with brown or greyish-brown coloration and distinctive white or yellow bands. It is mainly nocturnal and commonly feeds on geckos, lizards and small frogs. It is often mistaken for the common krait because of its banded appearance.",

  // INTERESTING FACTS
  facts: [
    "It is completely non-venomous.",
    "It is often mistaken for the common krait.",
    "It has sharp teeth resembling those of a wolf.",
    "It is primarily active during the night.",
    "It can climb walls and other rough surfaces.",
    "It commonly enters houses in search of geckos."
  ]
},
{
  id: "malabar-pit-viper",

  // BASIC INFORMATION
  name: "Malabar Pit Viper",
  scientificName: "Craspedocephalus malabaricus",
  species: "C. malabaricus",
  genus: "Craspedocephalus",
  family: "Viperidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Pit Vipers",

  // VENOM
  venomous: true,
  venomType: "Hemotoxic and cytotoxic components",
  venomDetails:
    "Venomous pit viper capable of causing pain, swelling and local tissue injury. Some bites may also cause blood-clotting abnormalities and other systemic complications. Medical treatment is essential after a bite.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 50–70 cm",
  maximumLength: "Approximately 100–130 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Frogs",
    "Toads",
    "Lizards",
    "Small rodents",
    "Small mammals",
    "Small birds",
    "Bird eggs"
  ],
  huntingMethod: "Ambush predation",
  activity: "Primarily nocturnal",
  reproduction: "Ovoviviparous (gives birth to live young)",
  clutchSize: "Litter size not well documented",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Tropical rainforests",
    "Evergreen forests",
    "Semi-evergreen forests",
    "Rocky areas",
    "Stream banks",
    "Trees and bushes",
    "Moist forest vegetation"
  ],

  distribution:
    "Endemic to India's Western Ghats, including Maharashtra, Goa, Karnataka, Kerala and Tamil Nadu.",

  // CONSERVATION
  conservationStatus: "Least Concern (LC)",
  populationTrend: "Stable (IUCN assessment in 2010)",
  majorThreats: [
    "Habitat destruction",
    "Deforestation",
    "Agricultural expansion",
    "Road mortality",
    "Human persecution"
  ],

  // IMAGE
  image: "/images/snakes/malabar-pit-viper.png",

  // DESCRIPTION
  description:
    "The Malabar Pit Viper is a venomous snake endemic to the Western Ghats of India. It has a broad triangular head, vertically elliptical pupils and heat-sensing pits between the eyes and nostrils. Its body displays remarkable colour variations, including green, turquoise, yellow, orange, reddish-brown and dark brown. It is mainly nocturnal and is commonly found near streams, on rocks, bushes and low tree branches. It uses its venom to immobilize prey.",

  // INTERESTING FACTS
  facts: [
    "It is endemic to the Western Ghats of India.",
    "It has heat-sensing pits between its eyes and nostrils.",
    "It displays several different colour variations.",
    "It has a prehensile tail that helps it climb and grip branches.",
    "It is primarily active during the night.",
    "It commonly hunts frogs near streams and water bodies.",
    "It is an ambush predator that waits for prey to approach.",
    "It gives birth to live young rather than laying eggs."
  ]
},
{
  id: "indian-trinket-snake",

  // BASIC INFORMATION
  name: "Indian Trinket Snake",
  scientificName: "Coelognathus helena",
  species: "C. helena",
  genus: "Coelognathus",
  family: "Colubridae",
  order: "Squamata",
  class: "Reptilia",
  category: "Trinket Snakes",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous snake that captures and subdues prey using its teeth and muscular body. It poses no venom-related danger to humans, although it may bite if handled.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 70 cm",
  maximumLength: "Approximately 168 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Rats",
    "Mice",
    "Lizards",
    "Geckos",
    "Skinks",
    "Small frogs",
    "Birds",
    "Bird eggs"
  ],
  huntingMethod: "Active hunting and constriction",
  activity: "Diurnal and crepuscular; activity may vary",
  reproduction: "Oviparous (egg-laying)",
  clutchSize: "Approximately 6–12 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Forests",
    "Deciduous forests",
    "Rocky areas",
    "Termite mounds",
    "Rock piles",
    "Bushes",
    "Agricultural fields",
    "Human habitations"
  ],

  distribution:
    "India, Sri Lanka, Nepal, Bangladesh and Pakistan.",

  // CONSERVATION
  conservationStatus: "Least Concern (LC)",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Road mortality",
    "Human persecution",
    "Accidental killing",
    "Habitat fragmentation"
  ],

  // IMAGE
  image: "/images/snakes/indian-trinket-snake.png",

  // DESCRIPTION
  description:
    "The Indian Trinket Snake is a non-venomous snake distributed across the Indian subcontinent. It has a slender body with tan, olive-brown or chocolate-brown coloration. Its forebody often displays distinctive dark and pale crossbands, while the posterior body has two dark longitudinal stripes. It is an excellent climber and commonly inhabits forests, rocky areas, termite mounds and human settlements. It primarily feeds on rodents, lizards and other small animals. It is frequently encountered near houses while searching for geckos and rats.",

  // INTERESTING FACTS
  facts: [
    "It is completely non-venomous.",
    "It is an excellent climber.",
    "It is an effective natural controller of rats and mice.",
    "Its body has distinctive dark and pale patterns.",
    "It is sometimes mistaken for the Common Krait.",
    "It can enter houses in search of geckos.",
    "It may form defensive S-shaped coils when threatened.",
    "It lays eggs rather than giving birth to live young."
  ]
},
{
  id: "bamboo-pit-viper",

  // BASIC INFORMATION
  name: "Bamboo Pit Viper",
  scientificName: "Craspedocephalus gramineus",
  species: "C. gramineus",
  genus: "Craspedocephalus",
  family: "Viperidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Pit Vipers",

  // VENOM
  venomous: true,
  venomType: "Hemotoxic and cytotoxic components",
  venomDetails:
    "Its venom can cause pain, swelling, local tissue damage and bleeding-related complications. Bite severity varies. Immediate hospital assessment is essential after a bite.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 60–90 cm",
  maximumLength: "Approximately 120 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Frogs",
    "Lizards",
    "Geckos",
    "Small rodents",
    "Small birds"
  ],
  huntingMethod: "Ambush predation",
  activity: "Primarily nocturnal",
  reproduction: "Viviparous (gives birth to live young)",
  clutchSize: "Litter size varies; exact typical range is not well documented",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Evergreen forests",
    "Moist deciduous forests",
    "Bamboo thickets",
    "Plantations",
    "Forest edges",
    "Shrubs",
    "Tree branches",
    "Hill forests"
  ],

  distribution:
    "India, primarily the Western Ghats and adjoining hill regions of southern and western India.",

  // CONSERVATION
  conservationStatus: "Least Concern (LC)",
  populationTrend: "Unknown",
  majorThreats: [
    "Deforestation",
    "Habitat fragmentation",
    "Agricultural expansion",
    "Road mortality",
    "Human persecution"
  ],

  // IMAGE
  image: "/images/snakes/bamboo-pit-viper.png",

  // DESCRIPTION
  description:
    "The Bamboo Pit Viper is a venomous arboreal snake found in parts of India. It commonly has a bright green body, although yellowish, brownish and other colour variations occur. It has a triangular head, vertically elliptical pupils and heat-sensing pits between its eyes and nostrils. It spends much of its time resting on vegetation, bamboo and low branches. It is an ambush predator that mainly feeds on frogs, lizards and small rodents.",

  // INTERESTING FACTS
  facts: [
    "It is a venomous pit viper.",
    "It is commonly found in vegetation and bamboo thickets.",
    "It has heat-sensing pits between its eyes and nostrils.",
    "It is an excellent climber.",
    "It commonly displays green coloration.",
    "It hunts frogs and lizards through ambush predation.",
    "It gives birth to live young.",
    "It is primarily active during the night.",
    "Its colour helps it blend into green vegetation."
  ]
},
{
  id: "indian-coral-snake",

  // BASIC INFORMATION
  name: "Indian Coral Snake",
  scientificName: "Calliophis melanurus",
  species: "C. melanurus",
  genus: "Calliophis",
  family: "Elapidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Coral Snakes",

  // VENOM
  venomous: true,
  venomType: "Neurotoxic venom",
  venomDetails:
    "It is a venomous elapid with small fixed front fangs. Bites are rare, and detailed clinical information is limited. Any suspected bite requires immediate medical attention.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 25–30 cm",
  maximumLength: "Approximately 35–40 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Small snakes",
    "Worm snakes",
    "Burrowing reptiles",
    "Other small animals"
  ],
  huntingMethod: "Active searching among soil and leaf litter",
  activity: "Mainly nocturnal and fossorial",
  reproduction: "Oviparous (lays eggs)",
  clutchSize: "Approximately 2–6 eggs",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Forest floors",
    "Leaf litter",
    "Loose soil",
    "Under fallen logs",
    "Lowland and hill forests"
  ],
  distribution:
    "India, Bangladesh and Sri Lanka; recorded in several parts of peninsular India, including Andhra Pradesh, Karnataka, Kerala and Tamil Nadu.",

  // CONSERVATION
  conservationStatus: "Least Concern (GBIF listing)",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat destruction",
    "Deforestation",
    "Soil disturbance",
    "Road mortality"
  ],

  // IMAGE
  image: "/images/snakes/indian-coral-snake.png",

  // DESCRIPTION
  description:
    "The Indian Coral Snake, also known as the Slender Coral Snake, is a small, secretive venomous snake. It has a very slender body, a dark head with pale markings and a distinctive dark tail that may show bright coloration underneath. It spends much of its time beneath leaf litter, fallen logs and loose soil. It is rarely encountered because of its secretive, burrowing lifestyle.",

  // INTERESTING FACTS
  facts: [
    "It is one of India's smallest venomous snakes.",
    "It belongs to the cobra family, Elapidae.",
    "It has small fixed front fangs.",
    "It spends much of its time underground.",
    "It feeds on small snakes and other burrowing reptiles.",
    "It lays eggs rather than giving birth to live young.",
    "It may curl and display its brightly coloured tail when disturbed.",
    "It is rarely seen because of its secretive lifestyle."
  ]
},
{
  id: "indian-red-sand-boa",

  // BASIC INFORMATION
  name: "Indian Red Sand Boa",
  scientificName: "Eryx johnii",
  species: "E. johnii",
  genus: "Eryx",
  family: "Boidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Boas",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous constrictor. It is generally harmless to humans and may bite if handled.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 45–60 cm",
  maximumLength: "Approximately 90 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Rats",
    "Mice",
    "Small rodents",
    "Lizards",
    "Other small vertebrates"
  ],
  huntingMethod: "Constriction and ambush",
  activity: "Primarily nocturnal and fossorial",
  reproduction: "Ovoviviparous (gives birth to live young)",
  clutchSize: "Approximately 6–14 young",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Dry scrubland",
    "Sandy plains",
    "Rocky areas",
    "Dry grasslands",
    "Loose soil",
    "Underground burrows"
  ],
  distribution:
    "India, Pakistan, Afghanistan and Iran.",

  // CONSERVATION
  conservationStatus: "Near Threatened (NT)",
  populationTrend: "Unknown",
  majorThreats: [
    "Illegal wildlife trade",
    "Habitat destruction",
    "Road mortality",
    "Human persecution"
  ],

  // IMAGE
  image: "/images/snakes/indian-red-sand-boa.png",

  // DESCRIPTION
  description:
    "The Indian Red Sand Boa is a non-venomous, stout-bodied snake with smooth, glossy scales and a short, blunt tail that resembles its head. It spends much of its time underground in loose soil and burrows. It catches small animals and kills its prey by constriction.",

  // INTERESTING FACTS
  facts: [
    "It is completely non-venomous.",
    "Its tail resembles a second head.",
    "It is an excellent burrower.",
    "It catches prey using constriction.",
    "It gives birth to live young.",
    "It is also called John's Sand Boa.",
    "It is threatened by illegal wildlife trade.",
    "It is protected under Indian wildlife law."
  ]
},
{
  id: "sind-krait",

  // BASIC INFORMATION
  name: "Sind Krait",
  scientificName: "Bungarus sindanus",
  species: "B. sindanus",
  genus: "Bungarus",
  family: "Elapidae",
  order: "Squamata",
  class: "Reptilia",
  category: "Kraits",

  // VENOM
  venomous: true,
  venomType: "Neurotoxic",
  venomDetails:
    "Its potent venom affects the nervous system and can cause paralysis and respiratory failure. A bite is a medical emergency.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 100–130 cm",
  maximumLength: "Approximately 150 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Other snakes",
    "Lizards",
    "Small vertebrates"
  ],
  huntingMethod: "Nocturnal hunting",
  activity: "Primarily nocturnal",
  reproduction: "Oviparous (lays eggs)",
  clutchSize: "Not well documented",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Dry plains",
    "Semi-arid regions",
    "Scrubland",
    "Agricultural landscapes",
    "Areas near human settlements"
  ],
  distribution:
    "Northwestern India, including Rajasthan, Gujarat, Punjab and parts of Maharashtra; also found in Pakistan.",

  // CONSERVATION
  conservationStatus: "Least Concern (LC)",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat alteration",
    "Road mortality",
    "Human persecution"
  ],

  // IMAGE
  image: "/images/snakes/sind-krait.png",

  // DESCRIPTION
  description:
    "The Sind Krait is a highly venomous member of the cobra family. It has a glossy dark body with pale crossbands, a relatively small head and a slender neck. It is mainly active at night and may be encountered in dry landscapes and agricultural areas. Like other kraits, it has potent neurotoxic venom.",

  // INTERESTING FACTS
  facts: [
    "It belongs to the family Elapidae.",
    "It is highly venomous.",
    "It is mainly active at night.",
    "It has a glossy dark body with pale bands.",
    "It may feed on other snakes.",
    "It lays eggs.",
    "Its venom can cause severe paralysis.",
    "It is closely related to other South Asian kraits."
  ]
},
{
  id: "banded-racer",

  // BASIC INFORMATION
  name: "Banded Racer",
  scientificName: "Argyrogena fasciolata",
  species: "A. fasciolata",
  genus: "Argyrogena",
  family: "Colubridae",
  order: "Squamata",
  class: "Reptilia",
  category: "Racers",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "A non-venomous snake. It may bite defensively if captured or threatened.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 75–100 cm",
  maximumLength: "Up to approximately 180 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Rodents",
    "Frogs",
    "Lizards",
    "Small birds"
  ],
  huntingMethod: "Active searching and occasional constriction",
  activity: "Primarily diurnal",
  reproduction: "Oviparous (lays eggs)",
  clutchSize: "Usually around 5–12 eggs; larger clutches have been recorded",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Dry deciduous forests",
    "Grasslands",
    "Scrubland",
    "Agricultural fields",
    "Rocky areas",
    "Areas near human settlements"
  ],
  distribution:
    "India, Nepal, Pakistan, Bangladesh and northern Sri Lanka.",

  // CONSERVATION
  conservationStatus: "Least Concern (LC)",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat loss",
    "Road mortality",
    "Human persecution",
    "Agricultural activities"
  ],

  // IMAGE
  image: "/images/snakes/banded-racer.png",

  // DESCRIPTION
  description:
    "The Banded Racer is a fast-moving, non-venomous snake found across parts of South Asia. Adults are often brown or olive-brown, while younger snakes may display more noticeable pale crossbands. It is mainly a ground-dwelling snake that hunts rodents, frogs and lizards. When threatened, it may raise the front part of its body and flatten its neck, sometimes resembling a cobra.",

  // INTERESTING FACTS
  facts: [
    "It is completely non-venomous.",
    "It is known for its quick movements.",
    "Young snakes often have more prominent bands.",
    "Adults may lose much of their banded appearance.",
    "It feeds on rodents and other small animals.",
    "It may flatten its neck when threatened.",
    "It is sometimes mistaken for a cobra.",
    "It lays eggs rather than giving birth to live young."
  ]
}






];
