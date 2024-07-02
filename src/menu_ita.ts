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
  section: SectionType;
  subSection?: SubSectionType;
  price?: string;
  allergens?: Allergeni[];
}

export enum SectionType {
  // home = "Home",
  antipastiMare = "Antipasti di mare",
  antipastiClassici = "Antipasti classici",
  primiPesce = "Primi piatti",
  secondiPesce = "Secondi piatti",
  contorni = "Contorni",
  pizzeria = "Pizzeria",
  bibite = "Bibite",
  cocktail = "Cocktails",
  allergeni = "Allergeni",
}
export enum SubSectionType {
  pizzeClassiche = "Pizze classiche",
  pizzeCrema = "Pizze speciali con crema",
  pizzeBufala = "Pizze con Bufala DOP",

  viniBianchi = "Vini bianchi",
  birreClassiche = "Birre classiche",
  spumanti = "Spumanti",
  champagne = "Champagne",
}

export enum Allergeni {
  // 1
  glutine = "Glutine",
  // 2
  crostacei = "Crostacei",
  // 3
  uova = "Uova e derivati",
  // 4
  pesce = "Pesce",
  // 5
  arachidi = "Arachidi e derivati",
  // 6
  soia = "Soia",
  // 7
  latte = "Latte e derivati",
  // 8
  fruttaGuscio = "Frutta a Guscio",
  // 9
  sedano = "Sedano",
  // 10
  senape = "Senape",
  // 11
  sesamo = "Sesamo",
  // 12
  anidride = "Anidride solforosa e solfiti",
  // 13
  lupini = "Lupini",
  // 14
  molluschi = "Molluschi",
}

export function allergeneToPng(allergene: Allergeni) : string | undefined {
  switch (allergene) {
    case Allergeni.glutine:
      return GlutineIcon;
    case Allergeni.anidride:
      return AnidriteIcon;
    case Allergeni.crostacei:
      return CrostaceiIcon;
    case Allergeni.arachidi:
      return ArachidiIcon;
    case Allergeni.fruttaGuscio:
      return FruttaAGuscioIcon;
    case Allergeni.latte:
      return LatteIcon;
    case Allergeni.lupini:
      return LupiniIcon;
    case Allergeni.molluschi:
      return MolluschiIcon;
    case Allergeni.pesce:
      return PesceIcon;
    case Allergeni.sedano:
      return SedanoIcon;
    case Allergeni.senape:
      return SenapeIcon;
    case Allergeni.sesamo:
      return SesamoIcon;
    case Allergeni.soia:
      return SoiaIcon;
    case Allergeni.uova:
      return UovaIcon;
    default:
      break;
  }
}

export const menuIta: MenuItem[] = [
  {
    nome: "Bon bon di baccalà in pastella",
    section: SectionType.antipastiMare,
    price: "€ 10,00",
    allergens: [Allergeni.glutine, Allergeni.molluschi],
  },
  {
    nome: "Zuppa di cozze",
    section: SectionType.antipastiMare,
    price: "€ 10,00",
    allergens: [Allergeni.molluschi],
  },
  {
    nome: "Soutè di molluschi",
    section: SectionType.antipastiMare,
    price: "€ 12,00",
    allergens: [Allergeni.molluschi],
  },
  {
    nome: "Cocktail di gamberi",
    section: SectionType.antipastiMare,
    price: "€ 12,00",
    allergens: [Allergeni.crostacei, Allergeni.senape],
  },
  {
    nome: "Insalata di mare",
    section: SectionType.antipastiMare,
    price: "€ 14,00",
    allergens: [Allergeni.crostacei, Allergeni.molluschi],
  },
  {
    nome: "Polpo alla piastra su crema di patate alla paprika",
    section: SectionType.antipastiMare,
    price: "€ 14,00",
    allergens: [Allergeni.latte, Allergeni.sedano, Allergeni.molluschi],
  },
  {
    nome: "Tris di tartare gambero rosa, salmone e ricciola",
    section: SectionType.antipastiMare,
    price: "€ 25,00",
    allergens: [Allergeni.crostacei, Allergeni.pesce],
  },
  {
    nome: "Gamberone di Mazara del Vallo in tempura",
    section: SectionType.antipastiMare,
    price: "€ 16,00",
    allergens: [Allergeni.glutine, Allergeni.crostacei, Allergeni.uova],
  },
  {
    nome: "Gamberone rosso marinato 5pz.",
    section: SectionType.antipastiMare,
    price: "€ 16,00",
    allergens: [Allergeni.crostacei],
  },
  {
    nome: "Bruschetta ai ricci 5pz.",
    section: SectionType.antipastiMare,
    price: "€ 20,00",
    allergens: [Allergeni.glutine, Allergeni.molluschi],
  },
  {
    nome: "Ostrica al pz.",
    section: SectionType.antipastiMare,
    price: "€ 3,50",
    allergens: [Allergeni.molluschi],
  },
  // {
  //   nome: "Gamberone rosso di Mazara del Vallo (1° scelta) 4pz.",
  //   section: SectionType.antipastiMare,
  //   price: "€ 20,00",
  // allergens: [Allergeni.crostacei]
  // },
  {
    nome: "Scampone del Mediterraneo (1° scelta) 4pz.",
    section: SectionType.antipastiMare,
    price: "€ 20,00",
    allergens: [Allergeni.crostacei],
  },
  {
    nome: "Cruditè x2",
    section: SectionType.antipastiMare,
    price: "€ 50,00",
    allergens: [Allergeni.crostacei, Allergeni.pesce, Allergeni.molluschi],
  },

  //ANTIPASTI CLASSICI
  {
    nome: "Bruschetta classica 6pz.",
    section: SectionType.antipastiClassici,
    description: "Pomodoro fresco, aglio, basilico, olio, sale, pepe, origano",
    price: "€ 5,00",
  },
  {
    nome: "Pane pizza bruschetta",
    section: SectionType.antipastiClassici,
    description: "Pomodoro fresco, aglio, basilico, olio, sale, pepe, origano",
    price: "€ 9,00",
  },
  {
    nome: "Antipasto Caldo",
    section: SectionType.antipastiClassici,
    description:
      "Patatine fritte, panelle, crocchè, anelli di cipolla, arancine carne, arancine burro, mozzarelline",
    price: "€ 6,00",
  },
  {
    nome: "Porzione di patatine fritte",
    section: SectionType.antipastiClassici,
    price: "€ 3,00",
  },

  //PRIMI PIATTI MARE
  {
    nome: "Spaghetti vongole veraci",
    section: SectionType.primiPesce,
    price: "€ 14,00",
    allergens: [Allergeni.glutine, Allergeni.molluschi],
  },
  {
    nome: "Linguine al nero di seppia",
    section: SectionType.primiPesce,
    price: "€ 15,00",
    allergens: [Allergeni.glutine, Allergeni.molluschi],
  },
  {
    nome: "Linguine al nero di seppia, ricci e gamberi",
    section: SectionType.primiPesce,
    price: "€ 20,00",
    allergens: [Allergeni.glutine, Allergeni.crostacei, Allergeni.molluschi],
  },
  {
    nome: "Linguine all'astice",
    section: SectionType.primiPesce,
    price: "€ 22,00",
    allergens: [Allergeni.glutine, Allergeni.crostacei],
  },
  {
    nome: "Spaghettone ai ricci",
    section: SectionType.primiPesce,
    price: "€ 20,00",
    allergens: [Allergeni.glutine, Allergeni.molluschi],
  },
  {
    nome: "Paccheri gambero rosso, scampi e pesto di pistacchio",
    section: SectionType.primiPesce,
    price: "€ 18,00",
    allergens: [Allergeni.glutine, Allergeni.crostacei, Allergeni.fruttaGuscio],
  },
  {
    nome: "Risotto ai frutti di mare",
    section: SectionType.primiPesce,
    price: "€ 14,00",
    allergens: [Allergeni.crostacei, Allergeni.uova, Allergeni.molluschi],
  },

  //SECONDI DI PESCE
  {
    nome: "Gamberone rosso di Mazara del Vallo 4pz.",
    section: SectionType.secondiPesce,
    price: "€ 20,00",
    allergens: [Allergeni.crostacei],
  },
  {
    nome: "Scamponi del Mar Mediterraneo (1° scelta) 4pz.",
    section: SectionType.secondiPesce,
    price: "€ 20,00",
    allergens: [Allergeni.crostacei],
  },
  {
    nome: "Aragosta",
    section: SectionType.secondiPesce,
    price: "€ 12,00/etto",
    allergens: [Allergeni.crostacei],
  },
  {
    nome: "Pescato locale del giorno (esposto in vetrina)",
    section: SectionType.secondiPesce,
    price: "€ 7,00/etto",
    allergens: [Allergeni.pesce],
  },

  //CONTORNI
  {
    nome: "Patate al forno",
    section: SectionType.contorni,
    price: "€ 4,00"
  },
  {
    nome: "Verdure grigliate di stagione",
    section: SectionType.contorni,
    price: "€ 5,00"
  },
  {
    nome: "Insalata estiva",
    section: SectionType.contorni,
    price: "€ 4,00"

  },

  //PIZZE

  //PIZZE CLASSICHE
  // {
  //   nome: "Pane pizza aromatizzato",
  //   description: "Sale, pepe, origano",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 3,00"
  // },
  {
    nome: "Biancaneve",
    description: "Fiordilatte campana, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 6,00",
  },
  {
    nome: "Margherita",
    description: "Pomodoro, fiordilatte campana, basilico, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 6,00",
  },
  {
    nome: "Napoli",
    description: "Pomodoro, fiordilatte campana, acciughe, basilico, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 7,00",
  },
  {
    nome: "Romana",
    description:
      "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "4 Gusti",
    description:
      "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), carciofi, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Calzone",
    description:
      "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti)",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Diavola",
    description: "Pomodoro, fiordilatte campana, cipolla e salamino piccante",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Topolino",
    description: "Pomodoro, fiordilatte campana, patatine fritte, wurstel",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  {
    nome: "Capricciosa",
    description:
      "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), funghi freschi, carciofi, olive, wurstel",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Parmigiana",
    description:
      "Pomodoro, fiordilatte campana, melenzane a fette, pomodoro fresco, grana padana DOP grattugiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  // {
  //   nome: "Boscaiola",
  //   description: "Pomodoro, fiordilatte campana, melenzane, funghi freschi e pomodoro a fette",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Vegetariana",
    description:
      "Pomodoro, funghi freschi, pomodoro a fette, melenzane arrostite, zucchine arrostite, spinaci*",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Marinara",
    description: "Pomodoro, acciughe, olio d'aglio, olive calabresi",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Calabrese",
  //   description: "Pomodoro, fiordilatte campana, salsiccia, gorgonzola, salamino piccante",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Pizza sfincione",
    description: "Salsa di sfincione, acciughe, prangrattato, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Faccia da vecchia",
  //   description: "Pomodoro, pomodoro a fette, acciughe, cipolla, pangrattato, cacio cavallo",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 8,00"
  // },
  // {
  //   nome: "Cavallino",
  //   description: "Pomodoro, fiordilatte campana, peperoni, salsiccia, olive calabresi",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 9,00"
  // },
  {
    nome: "Sicilianella",
    description:
      "Pomodoro, fiordilatte campana, melenzane a dadini, salamino piccante, acciughe, cipolla, pangrattato, cacio cavallo",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Tonno",
    description: "Pomodoro, fiordilatte campana, cipolla rossa di Tropea, tonno",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "4 Formaggi",
    description:
      "Fiordilatte campana, emmental, gorgonzola, grana padana DOP grattugiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "San Daniele",
    description:
      "Pomodoro, fiordilatte campana, rucola, prosciutto crudo di Parma, grana a scaglie",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 10,00",
  },
  {
    nome: "Girasole",
    description:
      "Pomodoro, fiordilatte campana, funghi freschi, mascarpone, prosciutto crudo di Parma, grana a scaglie",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 11,00",
  },
  {
    nome: "Salmone",
    description: "Fiordilatte campana, salmone all'uscita e crema al salmone",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 12,00",
  },
  // {
  //   nome: "Civoleva",
  //   description: "Pomodoro, fiordilatte campana, melenzane a dadini, funghi freschi, salamino piccante, salsiccia, wurstel",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Pizza pollo",
  //   description: "Pomodoro, fiordilatte campana, pollo fritto a dadini, salsa BBQ",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 8,00"
  // },
  {
    nome: "Pizza pollo",
    description:
      "Pomodoro, fiordilatte campana, pollo fritto a dadini, patatine fritte*, salsa BBQ",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Pizza kebab",
    description: "Fiordilatte campana, kebab di tacchino, salsa yogurt",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00",
  },
  {
    nome: "Schiacciata classica",
    description:
      "Fiordilatte campana, prosciutto cotto (senza conservanti), pomodoro a fette, olio evo, origano, sale",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00",
  },
  // {
  //   nome: "Schiacciata campagnola",
  //   description: "Fiordilatte campana, melenzane a fette, prosciutto cotto (senza conservanti), cacio cavallo a scaglie",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeClassiche,
  //   price: "€ 8,00"
  // },

  // PIZZE SPECIALI CON CREME
  {
    nome: "Radicchio",
    description:
      "Crema di radicchio, fiordilatte campana, mascarpone, bresaola, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "Spinaci",
    description:
      "Crema di spinaci, fiordilatte campana, funghi freschi, grana padana DOP grattuggiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "Funghi",
    description:
      "Crema di funghi, fiordilatte campana, pomodoro a fette, speck, noci",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00",
  },
  {
    nome: "Elen",
    description:
      "Crema di tonno e gamberi, pomodorini,philadelphia, mzozarella di bufala, gamberetti",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 13,00",
  },

  //PIZZE CON BUFALA DOP
  {
    nome: "Leggera",
    description: "Pomodoro, mozzarella di bufala, basilico, olio evo",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 8,00",
  },
  {
    nome: "Principe",
    description:
      "Pomodoro, mozzarella di bufala, funghi freschi, pomodorini, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00",
  },
  // {
  //   nome: "Francy",
  //   description: "Pomodoro, mozzarella di bufala, prosciutto cotto (senza conservanti), gorgonzola, pomodorini",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Covaccino",
  //   description: "Mozzarella di bufala, pomodorini, pesto genovese, bresaola, scaglie di grana padana DOP",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 11,00"
  // },
  {
    nome: "Bufalina",
    description:
      "Mozzarella di bufala, pomodorini, prosciutto crudo di Parma, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00",
  },
  // {
  //   nome: "Innamorata",
  //   description: "Mozzarella di bufala, pomodorini, salmone all'uscita, stracchino",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 12,00"
  // },
  {
    nome: "Delicata",
    description:
      "Mozzarella di bufala, funghi porcini, pomodorini, bresaola, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 12,00",
  },
  {
    nome: "Ai porcini",
    description:
      "Mozzarella di bufala, melenzane a dadini, funghi porcini, pomodorini, scaglie di grana pada DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00",
  },
  {
    nome: "Friarelli",
    description: "Mozzarella di bufala, friarielli napoletani, salsiccia",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00",
  },
  {
    nome: "Pistacchiosa",
    description:
      "Fiordilatte campana, mortadella, stracciatella di bufala, pesto di pistacchio, boccone di bufala, granella di pistacchio",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 13,00",
  },
  // {
  //   nome: "Bronte",
  //   description: "Fiordilatte campana, speck, stracciatela di bufala, pesto di pistacchio, boccone di bufala, granella di pistacchio",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 13,00"
  // },
  {
    nome: "Mortadella",
    description: "Mozzarella di bufala, mortadella e granella di pistacchio",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 10,00",
  },
  // {
  //   nome: "Civoleva",
  //   description: "Mozzarella di bufala, speck, noci, miele",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 11,00"
  // },
  // {
  //   nome: "Pinsa",
  //   description: "Mozzarella di bufala, mortadella, pesto di pistacchio, stracciatella di bufala, granella di pistacchio",
  //   section: SectionType.pizzeria,
  //   subSection: SubSectionType.pizzeBufala,
  //   price: "€ 13,00"
  // },
  {
    nome: "Sfilatino",
    description:
      "Mozzarella di bufala, prosciutto crudo di parma, pomodorini, stracciatella di bufala, straccetti di melenzane",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 13,00",
  },
  // {
  //     nome: "Calzone speciale",
  //     description: "Mozzarella di bufala, gorgonzola, scamorza affumicata, ricotta, prosciutto crudo di parma, pesto di pistacchio",
  //     section: SectionType.pizzeria,
  //     subSection: SubSectionType.pizzeBufala,
  //     price: "€ 13,00"
  //   },
  {
    nome: "Pescatore",
    description: "Pomodoro e frutti di mare",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 16,00",
  },

  //BIBITE
  {
    nome: "Acqua 1 lt.",
    section: SectionType.bibite,
    price: "€ 2,00",
  },
  {
    nome: "Coca cola in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Coca cola in vetro 1lt.",
    section: SectionType.bibite,
    price: "€ 4,50",
  },
  {
    nome: "Fanta in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 3,00",
  },
  {
    nome: "Sprite in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 2,50",
  },
  {
    nome: "Chinotto S. Pellegrino 33cl.",
    section: SectionType.bibite,
    price: "€ 2,50",
  },

  //BIRRE CLASSICHE
  {
    nome: "Heineken 33cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 2,50",
  },
  {
    nome: "Heineken 66cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Beck's 33cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 2,50",
  },
  {
    nome: "Beck's 66cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Moretti  33cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 2,00",
  },
  {
    nome: "Moretti 66cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 3,00",
  },
  {
    nome: "Messina ai cristalli di sale 50cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Tennent's 33cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },
  {
    nome: "Corona 33cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },

  {
    nome: "Ceres",
    section: SectionType.bibite,
    subSection: SubSectionType.birreClassiche,
    price: "€ 4,00",
  },

  //VINI BIANCHI
  {
    nome: "Charme bianco",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 22,00",
  },
  {
    nome: "Charme bianco",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 7,00",
  },
  {
    nome: "Charme rosè",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 22,00",
  },
  {
    nome: "Charme rosè",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 7,00",
  },
  {
    nome: "Angimbé Cusumano",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 20,00",
  },
  {
    nome: "Angimbé Cusumano",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 6,00",
  },

  {
    nome: "Bianco di Nera",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 20,00",
  },
  {
    nome: "Bianco di Nera",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 6,00",
  },
  {
    nome: "Grillo",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 18,00",
  },
  {
    nome: "Grillo",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 5,00",
  },
  {
    nome: "Maria Costanza",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 28,00",
  },
  {
    nome: "Maria Costanza",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 9,00",
  },
  {
    nome: "Rapitalà",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 18,00",
  },
  {
    nome: "Rapitalà",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 6,00",
  },
  {
    nome: "Principe di Corleone",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 20,00",
  },
  {
    nome: "Principe di Corleone",
    description: "Calice",
    section: SectionType.bibite,
    subSection: SubSectionType.viniBianchi,
    price: "€ 6,00",
  },

  // SPUMANTI
  {
    nome: "Berlucchi 61 Blanc",
    section: SectionType.bibite,
    subSection: SubSectionType.spumanti,
    price: "€ 35,00",
  },
  {
    nome: "Berlucchi 61 Rosè",
    section: SectionType.bibite,
    subSection: SubSectionType.spumanti,
    price: "€ 45,00",
  },
  {
    nome: "Ferrari Blanc",
    section: SectionType.bibite,
    subSection: SubSectionType.spumanti,
    price: "€ 40,00",
  },
  {
    nome: "Ferrari Rosè",
    section: SectionType.bibite,
    subSection: SubSectionType.spumanti,
    price: "€ 50,00",
  },
  {
    nome: "Bellavista Blanc",
    section: SectionType.bibite,
    subSection: SubSectionType.spumanti,
    price: "€ 50,00",
  },

  // CHAMPAGNE
  {
    nome: "Moët & Chandon",
    section: SectionType.bibite,
    subSection: SubSectionType.champagne,
    price: "€ 70,00",
  },
  {
    nome: "Veuve Clicquot",
    section: SectionType.bibite,
    subSection: SubSectionType.champagne,
    price: "€ 80,00",
  },
  {
    nome: "Pommery",
    section: SectionType.bibite,
    subSection: SubSectionType.champagne,
    price: "€ 60,00",
  },

  // COCKTAIL
  {
    nome: "Negroni",
    section: SectionType.cocktail,
    description: "Gin, Campari, Vermouth rosso",
    price: "€ 7,00",
  },
  {
    nome: "Margarita",
    section: SectionType.cocktail,
    description: "Tequila, triple sec, lime",
    price: "€ 7,00",
  },
  {
    nome: "Mojito",
    section: SectionType.cocktail,
    description: "Rum, lime, foglie di menta, zucchero di canna, soda",
    price: "€ 7,00",
  },
  {
    nome: "Sex on the beach",
    section: SectionType.cocktail,
    description: "Vodka, peach three, succo d'arancia, succo di mirtillo",
    price: "€ 7,00",
  },
  {
    nome: "Aperol spritz",
    section: SectionType.cocktail,
    description: "Aperol, prosecco, soda",
    price: "€ 7,00",
  },
  {
    nome: "Montenegro",
    section: SectionType.cocktail,
    description: "Amaro Montenegro, red bull",
    price: "€ 6,00",
  },
  {
    nome: "Vodka e red bull",
    section: SectionType.cocktail,
    price: "€ 6,00",
  },
  {
    nome: "Moscow mule",
    section: SectionType.cocktail,
    description: "Vodka, ginger beer, succo di limone",
    price: "€ 7,00",
  },
  {
    nome: "Malibù",
    section: SectionType.cocktail,
    description: "Succo d'ananas, malibù, sciroppo alla fragola",
    price: "€ 7,00",
  },
  {
    nome: "Gin tonic/lemon",
    section: SectionType.cocktail,
    price: "€ 6,00",
  },
];
