import GlutineIcon from "../src/assets/allergens/glutine.svg";
import AnidriteIcon from "../src/assets/allergens/anidrite.svg";
import ArachidiIcon from "../src/assets/allergens/arachidi.svg";
import CrostaceiIcon from "../src/assets/allergens/crostacei.svg";
import FruttaAGuscioIcon from "../src/assets/allergens/fruttaAGuscio.svg";
import LatteIcon from "../src/assets/allergens/latte.svg";
import LupiniIcon from "../src/assets/allergens/lupini.svg";
import MolluschiIcon from "../src/assets/allergens/molluschi.svg";
import PesceIcon from "../src/assets/allergens/pesce.svg";
import SedanoIcon from "../src/assets/allergens/sedano.svg";
import SenapeIcon from "../src/assets/allergens/senape.svg";
import SesamoIcon from "../src/assets/allergens/sesamo.svg";
import SoiaIcon from "../src/assets/allergens/soia.svg";
import UovaIcon from "../src/assets/allergens/uova.svg";

export interface MenuItem {
  nome: string;
  description?: string;
  section: SectionTypeEn;
  subSection?: SubSectionTypeEn;
  price?: string;
  allergens?: AllergeniEn[];
}

export enum SectionTypeEn {
  // antipastiMare = "Seafood starter",
  antipasti = "Starter",
  primiPiatti = "First courses",
  secondiPiatti = "Second courses",
  contorni = "Side dishes",
  pizzeria = "Pizzas",
  bibite = "Drinks",
  birre = "Beers",
  vini = "Wines",
  champagne = "Champagne",
  spumanti = "Bubbly wine",
  fruttaDessertDigestivi = "Fruit, dessert and digestif",
  cocktail = "Cocktails",
  allergeni = "Allergens",
}
export enum SubSectionTypeEn {
  pizzeClassiche = "Classic pizzas",
  pizzeCrema = "Pizze speciali con crema",
  pizzeBufala = " ",

  vinoBiancoJato = "White wines from Tenuto dello Jato",
  vinoRossoJato = "Red wines Tenuto dello Jato",

  antipasti = "Starter",
  antipastiMare = "Seafood starter",

  primiPiatti = "First courses",
  primiPiattiMare = "Seafood first courses",

  secondiPiatti = "Second courses",
  secondiPiattiMare = "Seafood second courses"
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

export function allergeneToSvgEn(allergene: AllergeniEn): string | undefined {
  switch (allergene) {
    case AllergeniEn.glutine:
      return GlutineIcon;
    case AllergeniEn.anidride:
      return AnidriteIcon;
    case AllergeniEn.crostacei:
      return CrostaceiIcon;
    case AllergeniEn.arachidi:
      return ArachidiIcon;
    case AllergeniEn.fruttaGuscio:
      return FruttaAGuscioIcon;
    case AllergeniEn.latte:
      return LatteIcon;
    case AllergeniEn.lupini:
      return LupiniIcon;
    case AllergeniEn.molluschi:
      return MolluschiIcon;
    case AllergeniEn.pesce:
      return PesceIcon;
    case AllergeniEn.sedano:
      return SedanoIcon;
    case AllergeniEn.senape:
      return SenapeIcon;
    case AllergeniEn.sesamo:
      return SesamoIcon;
    case AllergeniEn.soia:
      return SoiaIcon;
    case AllergeniEn.uova:
      return UovaIcon;
    default:
      break;
  }
}

export const menuEnglish: MenuItem[] = [
  //ANTIPASTI
  {
    nome: "Portion of french fries",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipasti,
    price: "€ 3,00",
  },
  {
    nome: "Antipasto Caldo",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipasti,
    description:
      "French fries, panelle, crocchè, onion rings, meat arancine, butter and ham arancine, mozzarellina in carrozza",
    price: "€ 6,00",
  },
  {
    nome: "Classic bruschetta 6pieces.",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipasti,
    description: "Fresh tomato, garlic, basil, oil, salt, pepper, origan",
    price: "€ 6,00",
  },
  {
    nome: "Pane pizza bruschetta",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipasti,
    description: "Fresh tomato, garlic, basil, oil, salt, pepper, origan",
    price: "€ 9,00",
  },
  {
    nome: "Sicilian caponata",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipasti,
    price: "€ 7,00",
    allergens: [],
  },
  {
    nome: "Mussel soup",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Peppered Mussels",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 8,00",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Shellfish sauté",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 14,00",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Sea salad",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 15,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.molluschi],
  },

  {
    nome: "Prawn tartare",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 20,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Marinated red shrimps from Mazara del Vallo",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 18,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Bruschetta with urchins 4pieces",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 20,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Oyster 1piece",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 3,50",
    allergens: [AllergeniEn.molluschi],
  },
  {
    nome: "Cruditè x2",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 40,00",
    allergens: [
      AllergeniEn.crostacei,
      AllergeniEn.pesce,
      AllergeniEn.molluschi,
    ],
  },

  {
    nome: "Frittura!",
    description: "Fried squid, baby squid and prawn",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 15,00",
    allergens: [
      AllergeniEn.crostacei,
      AllergeniEn.pesce,
      AllergeniEn.molluschi,
    ],
  },
  {
    nome: "Prawn cocktail",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [],
  },
  {
    nome: "Panko crusted shrimp tempura 4pieces",
    section: SectionTypeEn.antipasti,
    price: "€ 18,00",
    allergens: [],
  },

  {
    nome: "Fried cod",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [],
  },
  {
    nome: "Swordfish caponata",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 10,00",
    allergens: [],
  },

  {
    nome: "Beccafico sardines with Sicilian citrus fruit gel",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 7,00",
    allergens: [],
  },
  {
    nome: "Catalan-style octopus on potato cream, sweet and sour onion and confit cherry tomato",
    section: SectionTypeEn.antipasti,
    subSection: SubSectionTypeEn.antipastiMare,
    price: "€ 13,00",
    allergens: [],
  },


  //PRIMI PIATTI MARE
  {
    nome: "Spaghetti carbonara",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiatti,
    price: "€ 10,00",
    allergens: [],
  },

  {
    nome: "Spaghetti with pork ragout and fresh Sicilian ricotta chenelle",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiatti,
    price: "€ 12,00",
    allergens: [],
  },
  {
    nome: "Risotto with red pumpkin cream, crunchy speck and basil sauce",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiatti,
    price: "€ 12,00",
    allergens: [],
  },
  {
    nome: "Paccheri pistacchioso with bacon, buffalo stracciatella and pistachio pesto",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiatti,
    price: "€ 14,00",
    allergens: [],
  },
  {
    nome: "Spaghetti mussels",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 12,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Spaghetti mussels and clams",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 16,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Spaghetti with clams",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 15,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Cavatelli mussels, potatoes and smoked paprika powder",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 13,00",
    allergens: [],
  },
  {
    nome: "Linguine with cuttlefish ink",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 15,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Linguine with cuttlefish ink, shrimps tartare and sea urchins",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 25,00",
    allergens: [
      AllergeniEn.glutine,
      AllergeniEn.crostacei,
      AllergeniEn.molluschi,
    ],
  },
  // {
  //   nome: "Linguine with red lobster",
  //   section: SectionTypeEn.primiPiatti,
  //   price: "€ 25,00",
  //   allergens: [AllergeniEn.glutine, AllergeniEn.crostacei],
  // },
  {
    nome: "Spaghettone with sea urchins",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 25,00",
    allergens: [AllergeniEn.glutine, AllergeniEn.molluschi],
  },
  {
    nome: "Paccheri red shrimp, scampi, pistachio pesto and buffalo stracciatella ",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 22,00",
    allergens: [
      AllergeniEn.glutine,
      AllergeniEn.crostacei,
      AllergeniEn.fruttaGuscio,
    ],
  },
  {
    nome: "Risotto with seafood",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 15,00",
    allergens: [AllergeniEn.crostacei, AllergeniEn.uova, AllergeniEn.molluschi],
  },
  {
    nome: "Octopus linguine with crunchy courgettee",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 12,00",
    allergens: [],
  },
  {
    nome: "Busiata Lido",
    section: SectionTypeEn.primiPiatti,
    price: "€ 14,00",
    allergens: [],
  },

  {
    nome: "Scialatiello cream of red pumpkin and red prawn from Mazara del Vallo",
    section: SectionTypeEn.primiPiatti,
    price: "€ 16,00",
    allergens: [],
  },
  {
    nome: "Spaghetti red mullet and fennel",
    section: SectionTypeEn.primiPiatti,
    subSection: SubSectionTypeEn.primiPiattiMare,
    price: "€ 14,00",
    allergens: [],
  },

  //SECONDI 
  {
    nome: "Mediterranean stew soup",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiatti,
    price: "€ 18,00",
  },
  {
    nome: "Grilled veal trinch",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiatti,
    price: "€ 12,00",
  },
  {
    nome: "Trio of meat",
    description: "Skewers, trinch, sausage",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiatti,
    price: "€ 15,00",
  },
  {
    nome: "Grilled octopus on paprika potato cream",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 14,00",
    allergens: [AllergeniEn.latte, AllergeniEn.sedano, AllergeniEn.molluschi],
  },
  {
    nome: "Grilled red shrimp from Mazara del Vallo",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 18,00",
    allergens: [AllergeniEn.crostacei],
  },
  {
    nome: "Palermo-style swordfish revisited",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 15,00",
    allergens: [AllergeniEn.pesce],
  },
  {
    nome: "Grilled swordfish",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 14,00",
  },
  {
    nome: "Grilled squid",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 14,00",
  },
  {
    nome: "Grilled sea bream",
    section: SectionTypeEn.secondiPiatti,
    subSection: SubSectionTypeEn.secondiPiattiMare,
    price: "€ 20,00",
  },
  // {
  //   nome: "Red prawn sauté from Mazara del Vallo 4 pieces",
  //   section: SectionTypeEn.secondiPiatti,
  //   price: "€ 20,00",
  //   allergens: [AllergeniEn.crostacei],
  // },



  // {
  //   nome: "Swordfish parmigiana with tomato gel and buffalo stracciatella",
  //   section: SectionTypeEn.secondiPiatti,
  //   price: "€ 13,00",
  // },

  // {
  //   nome: "Grilled sea bream with a side of baked potatoes",
  //   section: SectionTypeEn.secondiPiatti,
  //   price: "€ 16,00",
  // },




  //CONTORNI
  {
    nome: "Baked potatoes",
    section: SectionTypeEn.contorni,
    price: "€ 4,00",
  },
  {
    nome: "Seasonal grilled vegetables",
    section: SectionTypeEn.contorni,
    price: "€ 5,00",
  },
  {
    nome: "Summer salad",
    section: SectionTypeEn.contorni,
    price: "€ 6,00",
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
    price: "€ 7,00",
  },
  {
    nome: "Margherita",
    description: "Tomato, fiordilatte from Campania, basil, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 7,00",
  },
  {
    nome: "Napoli",
    description: "Tomato, Fiordilatte from Campania, anchovies, basil, origan",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 8,00",
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
    description: "Tomato, Fiordilatte from Campania, onion, spicy salami",
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
    price: "€ 10,00",
  },
  {
    nome: "Parmigiana",
    description:
      "Tomato, fiordilatte from Campania, sliced ​​aubergines, fresh tomato, grated Grana Padana DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 10,00",
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
    price: "€ 10,00",
  },
  {
    nome: "Tonno",
    description: "Tomato, Fiordilatte from Campania, Tropea red onions, tuna",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 10,00",
  },
  {
    nome: "4 Formaggi",
    description:
      "Fiordilatte from Campania, emmental, gorgonzola, grated Grana Padana DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 10,00",
  },
  {
    nome: "San Daniele",
    description:
      "Tomato, fiordilatte from Campania, rocket, Parma raw ham, flaky grain",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeClassiche,
    price: "€ 11,00",
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
    nome: "Pizza pollo",
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
    price: "€ 9,00",
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
      "Buffalo mozzarella, aubergines a dadini, mushrooms porcini, cherry tomatoes, grana padana flakes DOP",
    section: SectionTypeEn.pizzeria,
    subSection: SubSectionTypeEn.pizzeBufala,
    price: "€ 12,00",
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
    nome: "Still water 0,75 cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Sparkling water 0,75 cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Coca cola in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Coca cola zero in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Fanta in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Sprite in glass bottle 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Chinotto S. Pellegrino 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,50",
  },
  {
    nome: "Redbull.",
    section: SectionTypeEn.bibite,
    price: "€ 3,50",
  },
  {
    nome: "Peach tea San Benedetto 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,00",
  },
  {
    nome: "Lemon tea San Benedetto 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,00",
  },
  {
    nome: "Schweppes lemon 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,50",
  },
  {
    nome: "Schweppes tonic 33cl.",
    section: SectionTypeEn.bibite,
    price: "€ 2,50",
  },

  //BIRRE CLASSICHE
  {
    nome: "Draft beer 0,20cl.",
    section: SectionTypeEn.birre,
    price: "€ 3,00",
  },
  {
    nome: "Draft beer 0,40cl.",
    section: SectionTypeEn.birre,
    price: "€ 5,00",
  },
  {
    nome: "Messina to salt crystals 33cl.",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },
  // {
  //   nome: "Messina 33cl.",
  //   section: SectionTypeEn.birre,
  //   price: "€ 4,00 ",
  // },
  {
    nome: "Tennent's 33cl.",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },
  {
    nome: "Corona 33cl.",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },

  {
    nome: "Ceres",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },
  {
    nome: "Moretti 66cl.",
    section: SectionTypeEn.birre,
    price: "€ 3,50",
  },

  {
    nome: "Heineken 66cl.",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },

  {
    nome: "Beck's 66cl.",
    section: SectionTypeEn.birre,
    price: "€ 4,00",
  },

  {
    nome: "Moretti 33cl.",
    section: SectionTypeEn.birre,
    price: "€ 2,50",
  },
  {
    nome: "Heineken 33cl.",
    section: SectionTypeEn.birre,
    price: "€ 3,00",
  },

  {
    nome: "Beck's 3cl.",
    section: SectionTypeEn.birre,
    price: "€ 3,00",
  },

  //VINI BIANCHI
  {
    nome: "Charme bianco",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    price: "€ 24,00",
  },
  // {
  //   nome: "Charme bianco",
  //   description: "Glass",
  //   section: SectionTypeEn.vini,
  //   price: "€ 7,00",
  // },
  {
    nome: "Charme rosè",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    price: "€ 25,00",
  },
  // {
  //   nome: "Charme rosè",
  //   description: "Glass",
  //   section: SectionTypeEn.vini,
  //   price: "€ 8,00",
  // },
  {
    nome: "Angimbé Cusumano",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    price: "€ 20,00",
  },
  // {
  //   nome: "Angimbé Cusumano",
  //   description: "Glass",
  //   section: SectionTypeEn.vini,
  //   price: "€ 6,00",
  // },

  {
    nome: "Bianco di Nera",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    price: "€ 24,00",
  },
  // {
  //   nome: "Bianco di Nera",
  //   description: "Glass",
  //   section: SectionTypeEn.vini,
  //   price: "€ 6,00",
  // },
  // {
  //   nome: "Grillo",
  //   description: "Bottiglia 75 cl.",
  //   section: SectionType.bibite,
  //   subSection: SubSectionType.viniBianchi,
  //   price: "€ 18,00",
  // },
  // {
  //   nome: "Grillo",
  //   description: "Calice",
  //   section: SectionType.vini,
  //   price: "€ 5,00",
  // },
  {
    nome: "Maria Costanza",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    price: "€ 32,00",
  },
  // {
  //   nome: "Maria Costanza",
  //   description: "Glass",
  //   section: SectionTypeEn.vini,
  //   price: "€ 9,00",
  // },
  // {
  //   nome: "Rapitalà",
  //   description: "Bottiglia 75 cl.",
  //   section: SectionType.vini,
  //   price: "€ 18,00",
  // },
  // {
  //   nome: "Rapitalà",
  //   description: "Calice",
  //   section: SectionType.vini,
  //   price: "€ 6,00",
  // },
  // {
  //   nome: "Principe di Corleone",
  //   description: "Bottiglia 75 cl.",
  //   section: SectionType.vini,
  //   price: "€ 20,00",
  // },
  // {
  //   nome: "Principe di Corleone",
  //   description: "Calice",
  //   section: SectionType.vini,
  //   price: "€ 6,00",
  // },

  {
    nome: "4 Luglio bianco frizzante IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoBiancoJato,
    price: "€ 20,00",
  },
  // {
  //   nome: "Al mio amico Grillo DOC Sicily",
  //   description: "Bottle 75 cl.",
  //   section: SectionTypeEn.vini,
  //   subSection: SubSectionTypeEn.vinoBiancoJato,
  //   price: "€ 20,00",
  // },
  {
    nome: "Catarratto IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoBiancoJato,
    price: "€ 18,00",
  },
  {
    nome: "Chardonnay IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoBiancoJato,
    price: "€ 18,00",
  },
  {
    nome: "Etna bianco",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoBiancoJato,
    price: "€ 25,00",
  },
  {
    nome: "Grillo DOC di Sicily",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoBiancoJato,
    price: "€ 18,00",
  },


  //  VINI ROSSi
  {
    nome: "Al mio amico Nero d'Avola DOC Sicilia",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 22,00",
  },
  {
    nome: "Cabernet Sauvignon IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 18,00",
  },

  {
    nome: "Frappato IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 20,00",
  },
  {
    nome: "Merlot IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 18,00",
  },
  {
    nome: "Nero d'Avola DOC Sicilia",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 18,00",
  },
  {
    nome: "Perricone IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 18,00",
  },
  {
    nome: "Syrah IGP terre siciliane",
    description: "Bottle 75 cl.",
    section: SectionTypeEn.vini,
    subSection: SubSectionTypeEn.vinoRossoJato,
    price: "€ 18,00",
  },


  // SPUMANTI
  {
    nome: "Berlucchi 61 Blanc",
    section: SectionTypeEn.spumanti,
    price: "€ 35,00",
  },
  {
    nome: "Berlucchi 61 Rosè",
    section: SectionTypeEn.spumanti,
    price: "€ 45,00",
  },
  {
    nome: "Ferrari Blanc",
    section: SectionTypeEn.spumanti,
    price: "€ 40,00",
  },
  {
    nome: "Ferrari Rosè",
    section: SectionTypeEn.spumanti,
    price: "€ 50,00",
  },
  {
    nome: "Bellavista Blanc",
    section: SectionTypeEn.spumanti,
    price: "€ 50,00",
  },
  {
    nome: "Tenute dello Jato brut",
    section: SectionTypeEn.spumanti,
    price: "€ 20,00",
  },

  // CHAMPAGNE
  {
    nome: "Moët & Chandon",
    section: SectionTypeEn.champagne,
    price: "€ 70,00",
  },
  {
    nome: "Veuve Clicquot",
    section: SectionTypeEn.champagne,
    price: "€ 80,00",
  },
  {
    nome: "Pommery",
    section: SectionTypeEn.champagne,
    price: "€ 60,00",
  },
  // COCKTAIL
  {
    nome: "Negroni",
    section: SectionTypeEn.cocktail,
    description: "Gin, Campari, red Martini",
    price: "€ 7,00",
  },
  {
    nome: "Negroni sbagliato",
    section: SectionTypeEn.cocktail,
    description: "Sparkling wine, Campari,red Martini",
    price: "€ 7,00"
  },
  {
    nome: "Negroski",
    section: SectionTypeEn.cocktail,
    description: "Vodka, Campari, Martini",
    price: "€ 7,00",
  },
  {
    nome: "Margarita",
    section: SectionTypeEn.cocktail,
    description: "Tequila, triple sec, lime",
    price: "€ 7,00",
  },
  {
    nome: "Mojito",
    section: SectionTypeEn.cocktail,
    description: "Rum, lime, mint leaves, brown sugar, soda",
    price: "€ 7,00",
  },
  {
    nome: "Sex on the beach",
    section: SectionTypeEn.cocktail,
    description: "Vodka, peach three, succo d'arancia, succo di mirtillo",
    price: "€ 7,00",
  },
  {
    nome: "Aperol spritz",
    section: SectionTypeEn.cocktail,
    description: "Aperol, prosecco, soda",
    price: "€ 7,00",
  },
  {
    nome: "Montenegro",
    section: SectionTypeEn.cocktail,
    description: "Amaro Montenegro, red bull",
    price: "€ 6,00",
  },
  {
    nome: "Vodka e red bull",
    section: SectionTypeEn.cocktail,
    price: "€ 6,00",
  },
  {
    nome: "Moscow mule",
    section: SectionTypeEn.cocktail,
    description: "Vodka, ginger beer, lime juice",
    price: "€ 7,00",
  },
  {
    nome: "Malibù",
    section: SectionTypeEn.cocktail,
    description: "Ananas juice, malibù, strawberry syrup",
    price: "€ 7,00",
  },
  {
    nome: "Gin tonic/lemon",
    section: SectionTypeEn.cocktail,
    price: "€ 6,00",
  },
  {
    nome: "Americano",
    description: "Red Martini, Campari, soda",
    section: SectionTypeEn.cocktail,
    price: "€ 7,00",
  },
  {
    nome: "London mule",
    description: "Gin, ginger beer, lime",
    section: SectionTypeEn.cocktail,
    price: "€ 7,00",
  },
  {
    nome: "Tequila sunrise",
    description: "Tequila, orange juice, granadine",
    section: SectionTypeEn.cocktail,
    price: "€ 7,00",
  },
  {
    nome: "Pina colada",
    description: "Rum, coconut cream, ananas juice",
    section: SectionTypeEn.cocktail,
    price: "€ 7,00",
  },
  {
    nome: "Drink alcohol free",
    section: SectionTypeEn.cocktail,
    price: "€ 6,00",
  },


  // FRUTTA DESSERT E DIGESTIVI
  {
    nome: "Fruit fruit of your choice",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 5,00",
  },
  {
    nome: "Mixed fruits",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 5,00",
  },
  {
    nome: "Ice cream",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 4,00",
  },
  // {
  //   nome: "Dessert",
  //   section: SectionTypeEn.fruttaDessertDigestivi,
  //   price: "€ 5,00",
  // },
  {
    nome: "Espresso coffe",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 1,00",
  },
  {
    nome: "Amaro del capo",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 4,00",
  },
  {
    nome: "Amaro Montenegro",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 4,00",
  },
  {
    nome: "Amaro Jagermeister",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 4,00",
  },
  {
    nome: "Amaro Averna",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 4,00",
  },
  {
    nome: "Limoncello",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 3,00",
  },
  {
    nome: "Sambuca",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 3,00",
  },
  {
    nome: "Grappa 903",
    section: SectionTypeEn.fruttaDessertDigestivi,
    price: "€ 5,00",
  },
];
