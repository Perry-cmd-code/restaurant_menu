export interface MenuItem {
  nome: string;
  description?: string;
  section: SectionTypeEn;
  subSection?: SubSectionTypeEn;
  price?: string;
  allergens?: AllergeniEn[];
}

export enum SectionTypeEn {
  antipastiMare = "Seafood starter",
  antipastiClassici = "Classic starter",
  primiPesce = "First courses",
  secondiPesce = "Second courses",
  contorni = "Side dishes",
  pizzeria = "Pizzas",
  bibite = "Drinks",
  allergeni = "Allergens",
}
export enum SubSectionTypeEn {
  pizzeClassiche = "Classic pizzas",
  pizzeCrema = "Pizze speciali con crema",
  pizzeBufala = "Pizzas with buffalo mozzarella DOP",

  viniBianchi = "White wines",
  birreClassiche = "Classic beers",
  spumanti = "Sparkling wines",
  champagne = "Champagne",
}

export enum AllergeniEn {
  // 1
  glutine = "Gluten",
  // 2
  crostacei = "Crustaceans",
  // 3
  uova = "Eggs",
  // 4
  pesce = "Fish",
  // 5
  arachidi = "Peanuts",
  // 6
  soia = "Soya",
  // 7
  latte = "Milk",
  // 8
  fruttaGuscio = "Tree nuts",
  // 9
  sedano = "Celery",
  // 10
  senape = "Mustard",
  // 11
  sesamo = "Sesame",
  // 12
  anidride = "Sulphites",
  // 13
  lupini = "Lupin",
  // 14
  molluschi = "Molluscs",
}

export const menuEnglish: MenuItem[] = [
  {
    nome: "Bon bon di baccalà in pastella",
    section: SectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Mussel soup",
    section: SectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Soutè di molluschi",
    section: SectionTypeEn.antipastiMare,
    price: "€ 12,00",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Cocktail di gambero",
    section: SectionTypeEn.antipastiMare,
    price: "€ 12,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.senape],
  },
  {
    nome: "Insalata di mare",
    section: SectionTypeEn.antipastiMare,
    price: "€ 14,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.molluschi],
  },
  {
    nome: "Grilled octopus on paprika potato cream",
    section: SectionTypeEn.antipastiMare,
    price: "€ 14,00",
    allergens: [AllergeniEn.latte, AllergeniEn.sedano, AllergeniEn.molluschi],
  },
  {
    nome: "Trio of pink prawn tartare, salmon and amberjack",
    section: SectionTypeEn.antipastiMare,
    price: "€ 25,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.pesce],
  },
  {
    nome: "Tempura red shrimps from Mazara del Vallo",
    section: SectionTypeEn.antipastiMare,
    price: "€ 16,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.crostacei, AllergeniEn.uova],
  },
  {
    nome: "Marinated red shrimps 5pieces",
    section: SectionTypeEn.antipastiMare,
    price: "€ 16,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Bruschetta with urchins 5pieces",
    section: SectionTypeEn.antipastiMare,
    price: "€ 20,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Oyster 1piece",
    section: SectionTypeEn.antipastiMare,
    price: "€ 3,50",
    allergens: [AllergeniEn.molluschi],
  },
  // {
  //   nome: "Gamberone rosso di Mazara del Vallo (1° scelta) 4pz.",
  //   section: SectionTypeEn.antipastiMare,
  //   price: "€ 20,00",
  // },
  {
    nome: "Scamponi from the Mediterranean Sea (1° choice) 4 pieces",
    section: SectionTypeEn.antipastiMare,
    price: "€ 20,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Cruditè x2",
    section: SectionTypeEn.antipastiMare,
    price: "€ 50,00",
    allergens: [
      AllergeniEn.crostacei,
      AllergeniEn.pesce,
      AllergeniEn.molluschi,
    ],
  },

  //ANTIPASTI CLASSICI
  {
    nome: "Classic bruschetta 6pieces.",
    section: SectionTypeEn.antipastiClassici,
    description: "Fresh tomato, garlic, basil, oil, salt, pepper, origan",
    price: "€ 5,00",
  },
  {
    nome: "Pane pizza bruschetta",
    section: SectionTypeEn.antipastiClassici,
    description: "Fresh tomato, garlic, basil, oil, salt, pepper, origan",
    price: "€ 9,00",
  },
  {
    nome: "Antipasto Caldo",
    section: SectionTypeEn.antipastiClassici,
    description:
      "French fries, panelle, crocchè, onion rings, meat arancine, butter and ham arancine, fried mini mozzarella",
    price: "€ 6,00",
  },
  {
    nome: "French fries portion",
    section: SectionTypeEn.antipastiClassici,
    price: "€ 3,00",
  },

  //PRIMI PIATTI MARE
  {
    nome: "Spaghetti with clams",
    section: SectionTypeEn.primiPesce,
    price: "€ 14,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Linguine with cuttlefish ink",
    section: SectionTypeEn.primiPesce,
    price: "€ 15,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Linguine with cuttlefish ink, sea urchins and shrimps",
    section: SectionTypeEn.primiPesce,
    price: "€ 20,00",
    allergens: [
      AllergeniEn.glutine,
      AllergeniEn.crostacei,
      AllergeniEn.molluschi,
    ],
  },
  {
    nome: "Linguine with lobster",
    section: SectionTypeEn.primiPesce,
    price: "€ 22,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.crostacei],
  },
  {
    nome: "Spaghettone with sea urchins",
    section: SectionTypeEn.primiPesce,
    price: "€ 20,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Paccheri red shrimp, scampi and pistachio pesto",
    section: SectionTypeEn.primiPesce,
    price: "€ 18,00",
    allergens: [
      AllergeniEn.glutine,
      AllergeniEn.crostacei,
      AllergeniEn.fruttaGuscio,
    ],
  },
  {
    nome: "Risotto with seafood",
    section: SectionTypeEn.primiPesce,
    price: "€ 14,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.uova, AllergeniEn.molluschi],
  },

  //SECONDI DI PESCE
  {
    nome: "Red shrimp from Mazara del Vallo 4 pieces",
    section: SectionTypeEn.secondiPesce,
    price: "€ 20,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Scamponi from the Mediterranean Sea (1° choice) 4 pieces",
    section: SectionTypeEn.secondiPesce,
    price: "€ 20,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Lobster",
    section: SectionTypeEn.secondiPesce,
    price: "€ 120,00/kg",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Local catch of the day (displayed in the window)",
    section: SectionTypeEn.secondiPesce,
    price: "€ 65,00/kg",
    allergens: [AllergeniEn.pesce],
  },

  //CONTORNI
  {
    nome: "Baked potatoes",
    section: SectionTypeEn.contorni,
  },
  {
    nome: "Seasonal grilled vegetables",
    section: SectionTypeEn.contorni,
  },
  {
    nome: "Summer salad",
    section: SectionTypeEn.contorni,
  },

  //PIZZE

  //PIZZE CLASSICHE
  // {
  //   nome: "Pane pizza aromatizzato",
  //   description: "salt, pepper, origan",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 3,00"
  // },
  {
    nome: "Biancaneve",
    description: "Fiordilatte from Campania, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 6,00",
  },
  {
    nome: "Margherita",
    description: "Tomato, fiordilatte from Campania, basil, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 6,00",
  },
  {
    nome: "Napoli",
    description: "Tomato, Fiordilatte from Campania, anchovies, basil, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 7,00",
  },
  {
    nome: "Romana",
    description:
      "Tomato, Fiordilatte from Campania, ham (preservative free), origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "4 Gusti",
    description:
      "Tomato, fiordilatte from Campania, ham (preservative free), artichokes, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Calzone",
    description: "Tomato, Fiordilatte from Campania, ham (preservative free)",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Diavola",
    description: "Tomato, Fiordilatte from Campania, onion e spicy salami",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Topolino",
    description: "Tomato, fiordilatte from Campania, french fries, wurstel",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Capricciosa",
    description:
      "Tomato, Fiordilatte from Campania, ham (preservative free), fresh mushrooms, artichokes, olives, wurstel",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Parmigiana",
    description:
      "Tomato, fiordilatte from Campania, sliced ​​aubergines, fresh tomato, grated Grana Padana DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  // {
  //   nome: "Boscaiola",
  //   description: "Tomato, Fiordilatte from Campania, ​​aubergines, fresh mushrooms e Tomato a fette",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Vegetariana",
    description:
      "Tomato, fresh mushrooms, sliced tomato, roasted aubergines, roasted courgettes, spinach*",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Marinara",
    description: "Tomato, anchovies, garlic oil, Calabrian olives",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Calabrese",
  //   description: "Tomato, Fiordilatte from Campania, sausage, gorgonzola, spicy salami",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Pizza sfincione",
    description: "Sfincione sauce, anchovies, bread crumbs, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Faccia da vecchia",
  //   description: "Tomato, Tomatoa fette, anchovies, onion, bread crumbs, cacio cavallo",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 8,00"
  // },
  // {
  //   nome: "Cavallino",
  //   description: "Tomato, Fiordilatte from Campania, pepperroni, sausage, olives calabresi",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Sicilianella",
    description:
      "Tomato, Fiordilatte from Campania, diced aubergines, spicy salami, anchovies, onion, bread crumbs, cacio cavallo",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Tonno",
    description: "Tomato, Fiordilatte from Campania, Tropea onions, tuna",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "4 Formaggi",
    description:
      "Fiordilatte from Campania, emmental, gorgonzola, grated Grana Padana DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "San Daniele",
    description:
      "Tomato, fiordilatte from Campania, rocket, Parma raw ham, flaky grain",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 10,00",
  },
  {
    nome: "Girasole",
    description:
      "Tomato, fiordilatte from Campania, fresh mushrooms, mascarpone, Parma raw ham, flaky grain",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 11,00",
  },
  {
    nome: "Salmone",
    description: "Fiordilatte from Campania, salmone all'uscita, salmon cream",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 12,00",
  },
  // {
  //   nome: "Civoleva",
  //   description: "Tomato, Fiordilatte from Campania, ​​aubergines a dadini, fresh mushrooms, spicy salami, sausage, wurstel",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Pizza pollo",
  //   description: "Tomato, Fiordilatte from Campania, diced fried chicken, salsa BBQ",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 8,00"
  // },
  {
    nome: "Chicken chips",
    description:
      "Tomato, fiordilatte from Campania, diced fried chicken, French fries*, BBQ sauce",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Pizza kebab",
    description: "Fiordilatte from Campania, turkey kebab, yogurt sauce",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Schiacciata classica",
    description:
      "Fiordilatte from Campania, ham (preservative free), sliced tomato, extra virgin olives oil, origan, salt",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Schiacciata campagnola",
  //   description: "Fiordilatte from Campania, sliced ​​aubergines, ham (preservative free), cacio cavallo a scaglie",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeClassiche,
  //   price: "€ 8,00"
  // },

  // PIZZE SPECIALI CON CREME
  {
    nome: "Radicchio",
    description:
      "Radicchio cream, Fiordilatte from Campania, mascarpone, bresaola, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "spinach",
    description:
      "Spinach cream, fiordilatte from Campania, fresh mushrooms, grated Grana Padana DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "Funghi",
    description:
      "Mushrooms cream, Fiordilatte from Campania, sliced tomato, speck, nuts",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "Elen",
    description:
      "Tuna cream, shrimp, cherry tomatoes, philadelphia, buffalo mozzarella, shrimps",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeCrema,
    price: "€ 13,00",
  },

  //PIZZE CON BUFALA DOP
  {
    nome: "Leggera",
    description: "Tomato, buffalo mozzarella, basil, extra virgin olives oil",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 8,00",
  },
  {
    nome: "Principe",
    description:
      "Tomato, buffalo mozzarella, fresh mushrooms, cherry tomatoes, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 11,00",
  },
  // {
  //   nome: "Francy",
  //   description: "Tomato, buffalo mozzarella, ham (preservative free), gorgonzola, cherry tomatoes",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Covaccino",
  //   description: "buffalo mozzarella, cherry tomatoes, pesto genovese, bresaola, grana padana flakes DOP",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 11,00"
  // },
  {
    nome: "Bufalina",
    description:
      "Buffalo mozzarella, cherry tomatoes, Parma raw ham, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 11,00",
  },
  // {
  //   nome: "Innamorata",
  //   description: "buffalo mozzarella, cherry tomatoes, salmone all'uscita, stracchino",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 12,00"
  // },
  {
    nome: "Delicata",
    description:
      "Buffalo mozzarella, porcini mushrooms, cherry tomatoes, bresaola, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 12,00",
  },
  {
    nome: "Ai porcini",
    description:
      "Buffalo mozzarella, aubergines a dadini, mushrooms porcini, tomato, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 11,00",
  },
  {
    nome: "Friarelli",
    description: "Buffalo mozzarella, neapolitan broccoli, sausage",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 11,00",
  },
  {
    nome: "Pistacchiosa",
    description:
      "Fiordilatte from Campania, mortadella, buffalo stracciatella, Pistachio pesto, morsel of buffalo, chopped pistachios",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 13,00",
  },
  // {
  //   nome: "Bronte",
  //   description: "Fiordilatte from Campania, speck, stracciatela di bufala, Pistachio pesto, morsel of buffalo, chopped pistachios",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 13,00"
  // },
  {
    nome: "Mortadella",
    description: "buffalo mozzarella, mortadella, chopped pistachios",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 10,00",
  },
  // {
  //   nome: "Civoleva",
  //   description: "buffalo mozzarella, speck, noci, miele",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Pinsa",
  //   description: "buffalo mozzarella, mortadella, Pistachio pesto, buffalo stracciatella, chopped pistachios",
  //   section: SectionTypeEn.pizzeria,
  //   subSection: SubSectionTypeEn.pizzeBufala,
  //   price: "€ 13,00"
  // },
  {
    nome: "Sfilatino",
    description:
      "Buffalo mozzarella, Parma raw ham, cherry tomatoes, buffalo stracciatella, aubergine strips",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 13,00",
  },
  // {
  //     nome: "Calzone speciale",
  //     description: "buffalo mozzarella, gorgonzola, scamorza affumicata, ricotta, Parma raw ham, Pistachio pesto",
  //     section: SectionTypeEn.pizzeria,
  //     subSection: SubSectionTypeEn.pizzeBufala,
  //     price: "€ 13,00"
  //   },
  {
    nome: "Pescatore",
    description: "Tomato, seafood",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 16,00",
  },

  //BIBITE
  {
    nome: "Water 1 lt.",
    section: SectionTypeEn.bibite,
    price: "€ 2,00",
  },
  {
    nome: "Coca cola in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Coca cola in glass bottle 1,5lt.",
    section: SectionTypeEn.bibite,
    price: "€ 4,00",
  },
  {
    nome: "Fanta in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Sprite in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,50",
  },
  {
    nome: "Chinotto S. Pellegrino 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 0,00",
  },

  //BIRRE CLASSICHE
  {
    nome: "Heineken 33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 2,50",
  },
  {
    nome: "Heineken 66cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Beck's 33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 2,50",
  },
  {
    nome: "Beck's 66cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Moretti  33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 2,00",
  },
  {
    nome: "Moretti 66cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 3,00",
  },
  {
    nome: "Messina to salt crystals 50cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Tennent's 33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Corona 33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },

  {
    nome: "Ceres 33cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.birreClassiche,
    price: "€ 4,00",
  },

  //VINI BIANCHI
  {
    nome: "Charme sparkling",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 22,00",
  },
  {
    nome: "Charme sparkling",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 7,00",
  },
  {
    nome: "Charme rosè",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 22,00",
  },
  {
    nome: "Charme rosè",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 7,00",
  },
  {
    nome: "Angimbé Cusumano",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 20,00",
  },
  {
    nome: "Angimbé Cusumano",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 6,00",
  },

  {
    nome: "Bianco di Nera",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 20,00",
  },
  {
    nome: "Bianco di Nera",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 6,00",
  },
  {
    nome: "Grillo",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 18,00",
  },
  {
    nome: "Grillo",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 5,00",
  },
  {
    nome: "Maria Costanza bollicine",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 28,00",
  },
  {
    nome: "Maria Costanza bollicine",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 9,00",
  },
  {
    nome: "Rapitalà",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 18,00",
  },
  {
    nome: "Rapitalà",
    description: "Glass",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 6,00",
  },
  {
    nome: "Principe di Corleone",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.viniBianchi,
    price: "€ 20,00",
  },

  // SPUMANTI
  {
    nome: "Berlucchi 61 Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.spumanti,
    price: "€ 35,00",
  },
  {
    nome: "Berlucchi 61 Rosè",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.spumanti,
    price: "€ 45,00",
  },
  {
    nome: "Ferrari Maximum Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.spumanti,
    price: "€ 40,00",
  },
  {
    nome: "Ferrari Maximum Rosè",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.spumanti,
    price: "€ 50,00",
  },
  {
    nome: "Bellavita Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.spumanti,
    price: "€ 50,00",
  },

  // CHAMPAGNE
  {
    nome: "Moët & Chandon Imperial Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.champagne,
    price: "€ 70,00",
  },
  {
    nome: "Veuve Clicquot Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.champagne,
    price: "€ 80,00",
  },
  {
    nome: "Pommery Blanc",
    section: SectionTypeEn.bibite,
    subSection: SubSectionTypeEn.champagne,
    price: "€ 60,00",
  },
];
