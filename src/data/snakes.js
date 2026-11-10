
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
  id: "indian-smooth-snake",

  // BASIC INFORMATION
  name: "Indian Smooth Snake",
  scientificName: "Coronella brachyura",
  species: "C. brachyura",
  genus: "Coronella",
  family: "Colubridae",
  order: "Squamata",
  class: "Reptilia",
  category: "Colubrid Snakes",

  // VENOM
  venomous: false,
  venomType: "None",
  venomDetails:
    "The Indian Smooth Snake is non-venomous and is not considered dangerous to humans. It may bite if handled or threatened.",

  // PHYSICAL CHARACTERISTICS
  averageLength: "Approximately 40–60 cm",
  maximumLength: "Approximately 75 cm",
  averageWeight: "Not well documented",
  lifespanWild: "Not well documented",

  // BIOLOGY
  diet: [
    "Small lizards",
    "Geckos",
    "Skinks",
    "Small rodents",
    "Other small vertebrates"
  ],
  huntingMethod: "Active searching and constriction",
  activity: "Mainly terrestrial; activity varies with local conditions",
  reproduction: "Oviparous (lays eggs)",
  clutchSize: "Not well documented",

  // HABITAT AND DISTRIBUTION
  habitat: [
    "Rocky areas",
    "Scrubland",
    "Dry deciduous forests",
    "Grassland",
    "Agricultural edges"
  ],

  distribution:
    "India, particularly parts of the Deccan Plateau and peninsular region.",

  // CONSERVATION
  conservationStatus: "Not well assessed globally",
  populationTrend: "Unknown",
  majorThreats: [
    "Habitat loss",
    "Agricultural expansion",
    "Road mortality",
    "Human persecution"
  ],

  // IMAGE
  image: "/images/snakes/indian-smooth-snake.png",

  // DESCRIPTION
  description:
    "The Indian Smooth Snake is a small, non-venomous colubrid snake found in parts of India. It has a slender body with smooth scales and a relatively short head. It is generally secretive and is often associated with rocky habitats, scrubland and dry landscapes. It feeds on small reptiles and other small animals.",

  // INTERESTING FACTS
  facts: [
    "It is a non-venomous snake.",
    "Its scientific name is Coronella brachyura.",
    "It is a relatively small snake.",
    "It has smooth body scales.",
    "It is generally secretive and difficult to observe.",
    "It is associated with rocky and dry habitats.",
    "It helps control populations of small reptiles and other prey.",
    "It is not considered dangerous to humans."
  ]
}






];
