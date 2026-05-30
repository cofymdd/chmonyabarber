export const siteMeta = {
  title: "INFINITY BARBER",
  description:
    "Infinity Barber v OC Eperia, Prešov. Profesionálna starostlivosť, pohodová atmosféra a presný strih podľa tvojich predstáv.",
}

export const assets = {
  logo: "/infinity/logo.svg",
  hero: "/infinity/hero-haircut.jpg",
  gentleman: "/infinity/gentleman-barber.jpg",
  about: "/infinity/noznice.jpg",
  team: "/infinity/team-wide.png",
  barbers: "/infinity/barberi.jpg",
  faq: "/infinity/faq-barberi.jpg",
  shop: "/infinity/shop.jpg",
}

export const navItems = [
  { label: "Úvod", href: "#uvod" },
  { label: "O nás", href: "#o-nas" },
  { label: "Cenník", href: "#sluzby" },
  { label: "Kontakt", href: "#kontakt" },
]

export const heroTags = ["Vlasy", "Brada", "Starostlivosť", "Relax"]

export const contact = {
  location: "Prešov, Eperia - 1. poschodie",
  hours: "Denne od 9:00 - 21:00",
  phone: "+421 949 177 635",
  email: "infinitybarberpresov@gmail.com",
  address: "OC Eperia, 1. poschodie, pri foodcourte",
  company: "Infinity Company s. r. o.",
  billing: "IČO: 56525915, DIČ: 2122339780, Budovateľská 698/10, 086 33 Zborov",
  maps: "https://www.google.com/maps/place/EPERIA+Shopping+Mall/@48.9888737,21.2606642,17z/data=!4m6!3m5!1s0x473eed0cde53953f:0xb9298f14766e21a1!8m2!3d48.9889195!4d21.2626222!16s%2Fg%2F11f_z8r59k",
}

export const bookingLinks = {
  phone: `tel:${contact.phone.replace(/\s/g, "")}`,
  email: `mailto:${contact.email}`,
  instagram: "https://www.instagram.com/infinity_barber_presov/",
}

export const socialLinks = [
  {
    label: "Instagram",
    href: bookingLinks.instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/infinitybarberpresov",
  },
]

export const serviceTags = ["Umytie", "Holenie", "Styling", "Strih"]

export const styleCards = [
  {
    number: "01",
    title: "Klasické strihy",
    description: "Elegancia, ktorá funguje vždy.",
    images: ["/infinity/gentleman-barber.jpg", "/infinity/elegantny-strih.jpg"],
  },
  {
    number: "02",
    title: "Aj pre najmladších",
    description: "Štýloví synovia.",
    images: ["/infinity/juniorsky-strih.jpg", "/infinity/detsky-uces.jpg"],
  },
  {
    number: "03",
    title: "Trendy look",
    description: "Podľa najnovších štýlov.",
    images: ["/infinity/najnovsi-styl.jpg", "/infinity/moderny-uces.jpg"],
  },
  {
    number: "04",
    title: "Pre zrelých pánov",
    description: "Strihy, ktoré vyniknú aj s vekom.",
    images: ["/infinity/elegantny-uces.jpg", "/infinity/muz-zrely.jpg"],
  },
  {
    number: "05",
    title: "Jedinečný výraz",
    description: "Originálny vzhľad pre odvážnych.",
    images: ["/infinity/trendy-vzhlad.jpg", "/infinity/trendy.jpg"],
  },
]

export const priceGroups = [
  {
    label: "SINGLE",
    items: [
      {
        number: "01",
        name: "JUNIOR Strih (do 10 r.)",
        description: "Strih, umytie, styling",
        price: "13 €",
      },
      {
        number: "02",
        name: "ŠTUDENT Strih (nad 10 r., ISIC, EURO 26)",
        description: "Strih, umytie, styling",
        price: "15 €",
      },
      {
        number: "03",
        name: "PÁNSKY Strih",
        description: "Strih, umytie, styling",
        price: "17 €",
      },
      {
        number: "04",
        name: "Strih LEN BOKY",
        description: "Strih, umytie, styling",
        price: "15 €",
      },
      {
        number: "05",
        name: "Holenie hlavy (1 nadstavec)",
        description: "Holenie britvou alebo strojčekom, umytie hlavy",
        price: "13 €",
      },
      {
        number: "06",
        name: "Úprava brady",
        description: "Úprava brady, tvarovanie, úprava kontúr",
        price: "13 €",
      },
    ],
  },
  {
    label: "COMBO",
    items: [
      {
        number: "07",
        name: "ŠTUDENT Strih + úprava brady (ISIC, EURO 26)",
        description: "Strih, úprava brady, umytie, styling",
        price: "20 €",
      },
      {
        number: "08",
        name: "PÁNSKY Strih + úprava brady",
        description: "Strih, úprava brady, umytie, styling",
        price: "24 €",
      },
      {
        number: "09",
        name: "Strih DOHOLA (1 nadstavec) + úprava brady",
        description: "Strih, umytie, styling, úprava brady",
        price: "18 €",
      },
    ],
  },
  {
    label: "NAVYSE",
    items: [
      {
        number: "10",
        name: "Depilácia nosa",
        description: "Odstránenie chĺpkov z nosa depilačným voskom",
        price: "2 €",
      },
      {
        number: "11",
        name: "Opaľovanie uší",
        description: "Tradičná technika odstránenia jemných chĺpkov v ušiach",
        price: "2 €",
      },
      {
        number: "12",
        name: "Darčeková poukážka",
        description: "Daruj štýl v ľubovoľnej hodnote",
        price: "- €",
      },
    ],
  },
]

export const barbers = [
  { name: "Kyril Lut", quote: "Bude to top!", role: "Barber", nick: "Kyril" },
  {
    name: "Richard Mendeľ",
    quote: "Roky praxe v každom ťahu.",
    role: "Barber",
    nick: "Riso",
  },
  {
    name: "Peter Maxim",
    quote: "Robím to, čo ma najviac baví.",
    role: "Barber",
    nick: "Maxo",
  },
  {
    name: "Lukáš Pilnik",
    quote: "Fakt dobre ťa ostrihám.",
    role: "Barber",
    nick: "Lukas",
  },
  {
    name: "Tatiana Struková",
    quote: "Určite budeš spokojný.",
    role: "Barber",
    nick: "Tatiana",
  },
  {
    name: "Dávid Talpaš",
    quote: "Vieš, že si v dobrých rukách.",
    role: "Barber",
    nick: "David",
  },
]

export const testimonials = [
  {
    name: "Peťo I.",
    relation: "Dlhoročný klient",
    image: "/infinity/review-peto.jpg",
    quote:
      "Chodím sa strihať už pár rokov a nikdy som nemal pocit, že by to bolo odfláknuté. Sadnem do kresla a viem, že to dopadne dobre.",
  },
  {
    name: "Ján V.",
    relation: "Klient, teraz už kamarát",
    image: "/infinity/review-jan.jpg",
    quote:
      "Najviac cením, že nemusím veľa vysvetľovať. Spraví to tak, ako má. Celé je to v pohode a výsledok vždy vyzerá dobre.",
  },
  {
    name: "Jozef D.",
    relation: "Dlhoročný klient",
    image: "/infinity/review-jozef.jpg",
    quote:
      "Mám rád klasický strih a úpravu brady, nič extra výstredné. Presne to tu vždy dostanem vo vysokej kvalite.",
  },
  {
    name: "Vlado K.",
    relation: "Prvá skúsenosť",
    image: "/infinity/review-vlado.jpg",
    quote:
      "Bol som prvýkrát a hneď som vedel, že sa vrátim. Všetko bolo precízne zastrihnuté a výsledok bol ešte lepší, než som čakal.",
  },
  {
    name: "Alena E.",
    relation: "Hugo - jej malý syn",
    image: "/infinity/review-alena.jpg",
    quote:
      "S malým sme mali inde problém. Tu sú barberi pokojní, majú trpezlivosť a Hugo sa sem dokonca teší.",
  },
]

export const faqItems = [
  {
    value: "walk-in",
    question: "Musím si dohodnúť termín, alebo môžem prísť len tak?",
    answer:
      "Môžeš prísť aj na počkanie, no rezervácia ti istí pripravené kreslo a konkrétny čas.",
  },
  {
    value: "duration",
    question: "Ako dlho trvá strihanie alebo úprava brady?",
    answer:
      "Samotný čas závisí od služby, no bežný strih alebo úprava brady je krátka návšteva. Combo si necháva viac priestoru na detail.",
  },
  {
    value: "wash",
    question: "Pred strihom si musím umyť vlasy doma?",
    answer:
      "Nie. Pri strihu počítame s umytím a stylingom, aby bol výsledok čistý a presný.",
  },
  {
    value: "result",
    question: "Čo ak sa mi výsledný strih nebude páčiť?",
    answer:
      "Povedz nám to priamo v kresle. Úpravu doladíme tak, aby si odchádzal spokojný.",
  },
  {
    value: "fade",
    question: "Robíte aj fade alebo iné moderné účesy?",
    answer:
      "Áno. Robíme klasiku, fade aj aktuálne trendy podľa toho, čo ti sedí a čo chceš nosiť.",
  },
  {
    value: "products",
    question: "Máte aj produkty na úpravu vlasov alebo brady?",
    answer:
      "Pri stylingu ti odporučíme vhodnú starostlivosť a spôsob úpravy podľa vlasov alebo brady.",
  },
  {
    value: "kids",
    question: "Robíte aj detské strihy alebo ženské?",
    answer:
      "V cenníku je juniorsky strih do 10 rokov. Pri špeciálnej požiadavke je najlepšie ozvať sa vopred.",
  },
  {
    value: "card",
    question: "Môžem platiť kartou?",
    answer:
      "Najrýchlejšie je overiť aktuálne možnosti priamo pri rezervácii alebo na prevádzke.",
  },
]

export const instagramImages = [
  "/infinity/instagram-1.jpg",
  "/infinity/instagram-2.jpg",
  "/infinity/instagram-3.jpg",
  "/infinity/instagram-4.jpg",
  "/infinity/instagram-5.jpg",
  "/infinity/instagram-6.jpg",
  "/infinity/instagram-7.jpg",
  "/infinity/instagram-8.jpg",
]
