export interface MenuItem {
  nome: string;
  description?:string;
  section: SectionType;
  subSection?: SubSectionType;
  price?: string;
}

export enum SectionType {
// home = "Home",
  antipastiMare = "Antipasti",
  primiPesce = "Primi piatti",
  secondiPesce = "Secondi piatti",
  contorni = "Contorni",
  pizzeria = "Pizzeria",
  //dessert = "Dessert",
  bibite = "Bibite",
  //amari = "Amari",
}
export enum SubSectionType {
    antipasti = "Antipasti",
    pizzeClassiche = "Pizze classiche",
    pizzeCrema = "Pizze speciali con crema",
    pizzeBufala = "Pizze con Bufala DOP",
  }

export const menuIta: MenuItem[] = [
  {
    nome: "Bon bon di baccalà in pastella",
    section: SectionType.antipastiMare,
    price: "€ 10,00",
  },
  {
    nome: "Zuppa di cozze",
    section: SectionType.antipastiMare,
    price: "€ 10,00",
  },
  {
    nome: "Soutè di molluschi",
    section: SectionType.antipastiMare,
    price: "€ 12,00",
  },
  {
    nome: "Cocktail di gambero",
    section: SectionType.antipastiMare,
    price: "€ 12,00",
  },
  {
    nome: "Insalata di mare",
    section: SectionType.antipastiMare,
    price: "€ 14,00",
  },
  {
    nome: "Pollo alla piastra su crema di patate alla paprika",
    section: SectionType.antipastiMare,
    price: "€ 14,00",
  },
  {
    nome: "Tris di tartara gambero rosa, salmone e ricciola",
    section: SectionType.antipastiMare,
    price: "€ 25,00",
  },
  {
    nome: "Gamberone di Mazara del Vallo in tempura",
    section: SectionType.antipastiMare,
    price: "€ 16,00",
  },
  {
    nome: "Gamberone rosso marinato 5pz.",
    section: SectionType.antipastiMare,
    price: "€ 16,00",
  },
  {
    nome: "Bruschetta ai ricci 5pz.",
    section: SectionType.antipastiMare,
    price: "€ 20,00",
  },
  {
    nome: "Ostrica al pz.",
    section: SectionType.antipastiMare,
    price: "€ 3,50",
  },
  // {
  //   nome: "Gamberone rosso di Mazara del Vallo (1° scelta) 4pz.",
  //   section: SectionType.antipastiMare,
  //   price: "€ 20,00",
  // },
  {
    nome: "Scampone del Mediterraneo (1° scelta) 4pz.",
    section: SectionType.antipastiMare,
    price: "€ 20,00",
  },
  {
    nome: "Cruditè x2",
    section: SectionType.antipastiMare,
    price: "€ 50,00",
  },

  //PRIMI PIATTI MARE
  {
    nome: "Spaghetti vongole veraci",
    section: SectionType.primiPesce,
    price: "€ 14,00",
  },
  {
    nome: "Linguine al nero di seppia",
    section: SectionType.primiPesce,
    price: "€ 15,00",
  },
  {
    nome: "Linguine al nero di seppia, ricci e gamberi",
    section: SectionType.primiPesce,
    price: "€ 20,00",
  },
  {
    nome: "Linguine all'astice",
    section: SectionType.primiPesce,
    price: "€ 22,00",
  },
  {
    nome: "Spaghettone ai ricci",
    section: SectionType.primiPesce,
    price: "€ 20,00",
  },
  {
    nome: "Paccheri gambero rosso, scampi e pesto di pistacchio",
    section: SectionType.primiPesce,
    price: "€ 18,00",
  },
  {
    nome: "Risotto ai frutti di mare",
    section: SectionType.primiPesce,
    price: "€ 14,00",
  },

  //SECONDI DI PESCE
  {
    nome: "Gamberone rosso di Mazara del Vallo 4pz.",
    section: SectionType.secondiPesce,
    price: "€ 20,00",
  },
  {
    nome: "Scamponi del Mar Mediterraneo (1° scelta) 4pz.",
    section: SectionType.secondiPesce,
    price: "€ 20,00",
  },
  {
    nome: "Aragosta",
    section: SectionType.secondiPesce,
    price: "€ 120,00/kg",
  },
  {
    nome: "Pescato locale del giorno (esposto in vetrina)",
    section: SectionType.secondiPesce,
    price: "€ 65,00/kg",
  },


  //CONTORNI
  {
    nome: "Patate al forno",
    section: SectionType.contorni,
  },
  {
    nome: "Verdure grigliate di stagione",
    section: SectionType.contorni,
  },
  {
    nome: "Insalata estiva",
    section: SectionType.contorni,
  },

  //PIZZE

  //ANTIPASTI
  {
    nome: "Bruschetta classica 6pz.",
    section: SectionType.pizzeria,
    subSection: SubSectionType.antipasti,
    description: "Pomodoro fresco, aglio, basilico, olio, sale, pepe, origano",
    price: "€ 5,00"
  },
  {
    nome: "Pane pizza bruschetta",
    section: SectionType.pizzeria,
    subSection: SubSectionType.antipasti,
    description: "Pomodoro fresco, aglio, basilico, olio, sale, pepe, origano",
    price: "€ 9,00"
  },
  {
    nome: "Antipasto Caldo",
    section: SectionType.pizzeria,
    subSection: SubSectionType.antipasti,
    description: "Patatine fritte, panelle, crocchè, anelli di cipolla, arancine carne, arancine burro, mozzarelline",
    price: "€ 6,00"
  },
  {
    nome: "Patatine fritte porzione",
    section: SectionType.pizzeria,
    subSection: SubSectionType.antipasti,
    price: "€ 3,00"
  },

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
    price: "€ 6,00"
  },
  {
    nome: "Margherita",
    description: "Pomodoro, fiordilatte campana, basilico, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 6,00"
  },  
  {
    nome: "Napoli",
    description: "Pomodoro, fiordilatte campana, acciughe, basilico, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 7,00"
  },
  {
    nome: "Romana",
    description: "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
  }, 
  {
    nome: "4 Gusti",
    description: "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), carciofi, origano",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  }, 
  {
    nome: "Calzone",
    description: "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti)",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
  },  
  {
    nome: "Diavola",
    description: "Pomodoro, fiordilatte campana, cipolla e salamino piccante",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
  },
  {
    nome: "Topolino",
    description: "Pomodoro, fiordilatte campana, patatine fritte, wurstel",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
  }, 
  {
    nome: "Capricciosa",
    description: "Pomodoro, fiordilatte campana, prosciutto cotto (senza conservanti), funghi freschi, carciofi, olive, wurstel",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },  
  {
    nome: "Parmigiana",
    description: "Pomodoro, fiordilatte campana, melenzane a fette, pomodoro fresco, grana padana DOP grattugiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
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
    description: "Pomodoro, funghi freschi, pomodoro a fette, melenzane arrostite, zucchine arrostite, spinaci*",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  }, 
  {
    nome: "Marinara",
    description: "Pomodoro, acciughe, olio d'aglio, olive calabresi",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
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
    price: "€ 8,00"
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
    description: "Pomodoro, fiordilatte campana, melenzane a dadini, salamino piccante, acciughe, cipolla, pangrattato, cacio cavallo",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },   
  {
    nome: "Tonno",
    description: "Pomodoro, fiordilatte campana, cipolla di tropea, tonno",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },  
  {
    nome: "4 Formaggi",
    description: "Fiordilatte campana, emmental, gorgonzola, grana padana DOP grattugiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },
  {
    nome: "San Daniele",
    description: "Pomodoro, fiordilatte campana, rucola, prosciutto crudo di Parma, grana a scaglie",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 10,00"
  },  
  {
    nome: "Girasole",
    description: "Pomodoro, fiordilatte campana, funghi freschi, mascarpone, prosciutto crudo di Parma, grana a scaglie",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 11,00"
  },  
  {
    nome: "Salmone",
    description: "Fiordilatte campana, salmone all'uscita e crema al salmone",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 12,00"
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
    nome: "Chicken chips",
    description: "Pomodoro, fiordilatte campana, pollo fritto a dadini, patatine fritte*, salsa BBQ",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },  
  {
    nome: "Pizza kebab",
    description: "Fiordilatte campana, kebab di tacchino, salsa yogurt",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 9,00"
  },  
  {
    nome: "Schiacciata classica",
    description: "Fiordilatte campana, prosciutto cotto (senza conservanti), pomodoro a fette, olio evo, origano, sale",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeClassiche,
    price: "€ 8,00"
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
    description: "Crema di radicchio, fiordilatte campana, mascarpone, bresaola, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00"
  },
  {
    nome: "Spinaci",
    description: "Crema di spinaci, fiordilatte campana, funghi freschi, grana padana DOP grattuggiata",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00"
  },
  {
    nome: "Funghi",
    description: "Crema di funghi, fiordilatte campana, pomodoro a fette, speck, noci",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeCrema,
    price: "€ 10,00"
  },
  {
  nome: "Elen",
  description: "Crema di tonno e gamberi, pomodorini,philadelphia, mzozarella di bufala, gamberetti",
  section: SectionType.pizzeria,
  subSection: SubSectionType.pizzeCrema,
  price: "€ 13,00"
},

//PIZZE CON BUFALA DOP
{
    nome: "Leggera",
    description: "Pomodoro, mozzarella di bufala, basilico, olio evo",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 8,00"
  },
  {
    nome: "Principe",
    description: "Pomodoro, mozzarella di bufala, funghi freschi, pomodorini, scaglie di granda padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00"
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
    description: "Mozzarella di bufala, pomodorini, prosciutto crudo di Parma, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00"
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
    description: "Mozzarella di bufala, funghi porcini, pomodorini, bresaola, scaglie di grana padana DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 12,00"
  },
  {
    nome: "Ai porcini",
    description: "Mozzarella di bufala, melenzane a dadini, funghi porcini, pomodoro, scaglie di grana pada DOP",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00"
  },
  {
    nome: "Friarelli",
    description: "Mozzarella di bufala, friarielli napoletani, salsiccia",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 11,00"
  },
  {
    nome: "Pistacchiosa",
    description: "Fiordilatte campana, mortadella, stracciatella di bufala, pesto di pistacchio, boccone di bufala, granella di pistacchio",
    section: SectionType.pizzeria,
    subSection: SubSectionType.pizzeBufala,
    price: "€ 13,00"
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
    price: "€ 10,00"
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
  description: "Mozzarella di bufala, prosciutto crudo di parma, pomodorini, stracciatella di bufala, straccetti di melenzane",
  section: SectionType.pizzeria,
  subSection: SubSectionType.pizzeBufala,
  price: "€ 13,00"
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
    subSection: SubSectionType.pizzeBufala,
    price: "€ 16,00"
  },

  //BIBITE
  {
  nome: "Acqua 1 lt.",
  section: SectionType.bibite,
  price: "€ 2,00"
},
{
    nome: "Coca cola in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 3,00"
  },
  {
    nome: "Coca cola in vetro 1,5lt.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },
  {
    nome: "Fanta in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 3,00"
  },
  {
    nome: "Sprite in vetro 33cl.",
    section: SectionType.bibite,
    price: "€ 2,50"
  },
  {
    nome: "Chinotto S. Pellegrino 33cl.",
    section: SectionType.bibite,
    price: "€ 0,00"
  },

  //BIRRE CLASSICHE
  {
    nome: "Heineken 33cl.",
    section: SectionType.bibite,
    price: "€ 2,50"
  },
  {
    nome: "Heineken 66cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },
  {
    nome: "Beck's 33cl.",
    section: SectionType.bibite,
    price: "€ 2,50"
  },
  {
    nome: "Beck's 66cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },
  {
    nome: "Moretti  33cl.",
    section: SectionType.bibite,
    price: "€ 2,00"
  },
  {
    nome: "Moretti 66cl.",
    section: SectionType.bibite,
    price: "€ 3,00"
  },
  {
    nome: "Messica cristalli di sale 50cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },
  {
    nome: "Tennent's 33cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },
  {
    nome: "Corona 33cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },

  {
    nome: "Ceres 33cl.",
    section: SectionType.bibite,
    price: "€ 4,00"
  },

  //VINI BIANCHI
  {
    nome: "Charme frizzante",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 22,00"
  },
  {
    nome: "Charme frizzante",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 7,00"
  },
  {
    nome: "Charme rosè",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 22,00"
  },
  {
    nome: "Charme rosè",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 7,00"
  },
  {
    nome: "Angimbé Cusumano",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 20,00"
  },
  {
    nome: "Angimbé Cusumano",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 6,00"
  },

  {
    nome: "Bianco di Nera",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 20,00"
  },
  {
    nome: "Bianco di Nera",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 6,00"
  },
  {
    nome: "Grillo",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 18,00"
  },
  {
    nome: "Grillo",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 5,00"
  },
  {
    nome: "Maria Costanza bollicine",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 28,00"
  },
  {
    nome: "Maria Costanza bollicine",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 9,00"
  },
  {
    nome: "Rapitalà",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 18,00"
  },
  {
    nome: "Rapitalà",
    description: "Calice",
    section: SectionType.bibite,
    price: "€ 6,00"
  },
  {
    nome: "Principe di Corleone",
    description: "Bottiglia 75 cl.",
    section: SectionType.bibite,
    price: "€ 20,00"
  },

 // SPUMANTI
 {
    nome: "Berlucchi 61 Blanc",
    section: SectionType.bibite,
    price: "€ 35,00"
  },
  {
    nome: "Berlucchi 61 Rosè",
    section: SectionType.bibite,
    price: "€ 45,00"
  },
  {
    nome: "Ferrari Maximum Blanc",
    section: SectionType.bibite,
    price: "€ 40,00"
  },
  {
    nome: "Ferrari Maximum Rosè",
    section: SectionType.bibite,
    price: "€ 50,00"
  },
  {
    nome: "Bellavita Blanc",
    section: SectionType.bibite,
    price: "€ 50,00"
  },

 // CHAMPAGNE
  {
    nome: "Moët & Chandon Imperial Blanc",
    section: SectionType.bibite,
    price: "€ 70,00"
  },
  {
    nome: "Veuve Clicquot Blanc",
    section: SectionType.bibite,
    price: "€ 80,00"
  },
  {
    nome: "Pommery Blanc",
    section: SectionType.bibite,
    price: "€ 60,00"
  },

];
