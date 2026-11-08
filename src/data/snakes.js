
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
  reproduction: "Viviparous (gives birth to live young)",
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
}




];
