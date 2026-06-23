export const siteMeta = {
  title: "CHMONYA BARBER",
  description:
    "CHMONYA BARBER v Košiciach. Moderné strihy, kreatívna úprava brady a pokojná atmosféra bez zbytočného zhonu.",
}

export const assets = {
  hero: "/chmonya-barber/hero-haircut.jpg",
  gentleman: "/chmonya-barber/gentleman-barber.jpg",
  about: "/chmonya-barber/noznice.jpg",
  team: "/chmonya-barber/team-wide.png",
  barbers: "/chmonya-barber/barberi.jpg",
  faq: "/chmonya-barber/faq-barberi.jpg",
  shop: "/chmonya-barber/shop.jpg",
}

export const navItems = [
  { label: "Začiatok", href: "#uvod" },
  { label: "Príbeh", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Spojenie", href: "#kontakt" },
]

export const heroTags = ["Strih", "Kontúry", "Detail", "Pohoda"]

export const contact = {
  location: "Košice, Lunárna pasáž - prízemie",
  hours: "Denne od 10:00 - 20:00",
  phone: "+421 000 000 000",
  email: "info@chmonya-barber.test",
  address: "Mesačná 00, 000 00 Košice, Slovensko",
  company: "CHMONYA BARBER s. r. o.",
  billing: "IČO: 00000000, DIČ: 0000000000, IČ DPH: SK0000000000",
  maps: "https://www.google.com/maps/search/?api=1&query=Ko%C5%A1ice%2C+Slovensko",
}

export const bookingLinks = {
  phone: `tel:${contact.phone.replace(/\s/g, "")}`,
  email: `mailto:${contact.email}`,
  contact: "#kontakt",
}

export const serviceTags = ["Refresh", "Fade", "Brada", "Finish"]

export const styleCards = [
  {
    number: "01",
    title: "Nočný fade",
    description: "Čistý prechod s výraznou siluetou.",
    images: [
      "/chmonya-barber/gentleman-barber.jpg",
      "/chmonya-barber/elegantny-strih.jpg",
    ],
  },
  {
    number: "02",
    title: "Malý rebel",
    description: "Pohodový strih pre mladých dobrodruhov.",
    images: [
      "/chmonya-barber/juniorsky-strih.jpg",
      "/chmonya-barber/detsky-uces.jpg",
    ],
  },
  {
    number: "03",
    title: "Mestský chaos",
    description: "Textúra, objem a zámerne voľný výsledok.",
    images: [
      "/chmonya-barber/najnovsi-styl.jpg",
      "/chmonya-barber/moderny-uces.jpg",
    ],
  },
  {
    number: "04",
    title: "Tichý gentleman",
    description: "Nenápadná elegancia s presnými kontúrami.",
    images: [
      "/chmonya-barber/elegantny-uces.jpg",
      "/chmonya-barber/muz-zrely.jpg",
    ],
  },
  {
    number: "05",
    title: "Chmonya signature",
    description: "Výrazný strih vytvorený podľa nálady a tváre.",
    images: ["/chmonya-barber/trendy-vzhlad.jpg", "/chmonya-barber/trendy.jpg"],
  },
]

export const priceGroups = [
  {
    label: "RÝCHLO",
    items: [
      {
        number: "01",
        name: "Mini Chmonya",
        description: "Detský strih, jemné kontúry a finálny styling",
        price: "11 €",
      },
      {
        number: "02",
        name: "Študentský reset",
        description: "Svieži strih, umytie a matný finish",
        price: "14 €",
      },
      {
        number: "03",
        name: "Mestský strih",
        description: "Konzultácia, strih, umytie a styling",
        price: "19 €",
      },
      {
        number: "04",
        name: "Kontúrový servis",
        description: "Boky, zátylok a ostré línie bez úpravy vrchu",
        price: "12 €",
      },
      {
        number: "05",
        name: "Nulový režim",
        description: "Kompletné skrátenie strojčekom a upokojenie pokožky",
        price: "10 €",
      },
      {
        number: "06",
        name: "Brada na poriadok",
        description: "Tvarovanie brady, horúci uterák a olej",
        price: "12 €",
      },
    ],
  },
  {
    label: "NAPLNO",
    items: [
      {
        number: "07",
        name: "Campus combo",
        description: "Študentský strih, brada, umytie a finish",
        price: "21 €",
      },
      {
        number: "08",
        name: "Chmonya komplet",
        description: "Strih, detailná brada, kontúry a styling",
        price: "27 €",
      },
      {
        number: "09",
        name: "Hladká hlava + brada",
        description: "Strojček, britva, tvarovanie brady a balzam",
        price: "22 €",
      },
    ],
  },
  {
    label: "DROBNOSTI",
    items: [
      {
        number: "10",
        name: "Obočie na milimeter",
        description: "Rýchle zarovnanie a vyčistenie tvaru obočia",
        price: "3 €",
      },
      {
        number: "11",
        name: "Horúci uterák",
        description: "Krátky relaxačný rituál pred finálnou úpravou",
        price: "4 €",
      },
      {
        number: "12",
        name: "Kredit pre kamoša",
        description: "Darčekový kredit v ľubovoľnej zvolenej hodnote",
        price: "0 €",
      },
    ],
  },
]

export const barbers = [
  {
    name: "Marek Hmla",
    quote: "Každý detail má svoj dôvod.",
    role: "Barber",
    nick: "Hmlák",
  },
  {
    name: "Oliver Kríž",
    quote: "Najprv tvar, potom charakter.",
    role: "Barber",
    nick: "Oli",
  },
  {
    name: "Samuel Vŕba",
    quote: "Čisté línie, pokojná hlava.",
    role: "Barber",
    nick: "Samo",
  },
  {
    name: "Nina Kováčová",
    quote: "Dobrý strih nemusí kričať.",
    role: "Barberka",
    nick: "Nix",
  },
  {
    name: "Teodor Mráz",
    quote: "Fade ladím, kým nesedí.",
    role: "Barber",
    nick: "Teo",
  },
  {
    name: "Viktor Runa",
    quote: "Odchádzaš lepšie, než si prišiel.",
    role: "Barber",
    nick: "Vik",
  },
]

export const testimonials = [
  {
    name: "Roman Z.",
    relation: "Pravidelný návštevník",
    image: "/chmonya-barber/review-peto.jpg",
    quote:
      "Prišiel som bez predstavy a stačilo pár otázok. Výsledok bol presný, pohodlný na údržbu a konečne mi sedel aj po dvoch týždňoch.",
  },
  {
    name: "Miloš B.",
    relation: "Fanúšik krátkych strihov",
    image: "/chmonya-barber/review-jan.jpg",
    quote:
      "Oceňujem pokoj, žiadne ponáhľanie a čistú robotu. Kontúry držia a nemusím doma zachraňovať styling polovicou kúpeľne.",
  },
  {
    name: "Erik S.",
    relation: "Nový klient",
    image: "/chmonya-barber/review-jozef.jpg",
    quote:
      "Objednal som sa náhodou a zostal som kvôli prístupu. Vysvetlili mi, čo bude fungovať s mojimi vlasmi, a trafili to.",
  },
  {
    name: "Tomáš L.",
    relation: "Klient od otvorenia",
    image: "/chmonya-barber/review-vlado.jpg",
    quote:
      "CHMONYA má vlastnú atmosféru. Dám si kávu, vypnem hlavu a odchádzam upravený bez toho, aby som musel čokoľvek komplikovane opisovať.",
  },
  {
    name: "Zuzana M.",
    relation: "Mama mladého klienta",
    image: "/chmonya-barber/review-alena.jpg",
    quote:
      "Syn sa kedysi strihaniu vyhýbal. Tu mu všetko pokojne ukázali, nechali ho vybrať detail a teraz sa na ďalšiu návštevu teší.",
  },
]

export const faqItems = [
  {
    value: "booking",
    question: "Potrebujem rezerváciu, ak chcem iba rýchle kontúry?",
    answer:
      "Rezervácia je najistejšia aj pri krátkej službe. Ak je práve voľné kreslo, radi ťa vezmeme aj bez objednania.",
  },
  {
    value: "consultation",
    question: "Čo ak vôbec neviem, aký strih mi pristane?",
    answer:
      "To je úplne v poriadku. Pozrieme sa na tvar tváre, rast vlasov a tvoju bežnú rutinu a navrhneme riešenie, ktoré nebude fungovať iba v deň návštevy.",
  },
  {
    value: "late",
    question: "Čo mám urobiť, keď meškám?",
    answer:
      "Ozvi sa nám čo najskôr. Pri krátkom meškaní termín upravíme, pri väčšom sklze nájdeme nový čas, aby ďalší klient nemusel čakať.",
  },
  {
    value: "maintenance",
    question: "Ako často sa oplatí obnovovať fade?",
    answer:
      "Výrazný fade väčšinou vyzerá najlepšie pri obnove každé dva až tri týždne. Pri mäkšom prechode môže byť interval pokojne dlhší.",
  },
  {
    value: "beard",
    question: "Viete upraviť aj dlhšiu alebo nepravidelnú bradu?",
    answer:
      "Áno. Najprv nastavíme tvar, potom upravíme hustotu, kontúry a odporučíme jednoduchú domácu starostlivosť.",
  },
  {
    value: "products",
    question: "Musím si po strihu kúpiť profesionálne produkty?",
    answer:
      "Nemusíš. Ukážeme ti, ako výsledok upraviť aj s tým, čo už používaš, a produkt odporučíme iba vtedy, keď má pre tvoje vlasy zmysel.",
  },
  {
    value: "companions",
    question: "Môžem prísť s kamarátom alebo dieťaťom?",
    answer:
      "Áno, pokiaľ je v čakacej zóne miesto. Pri väčšej skupine nám radšej napíš vopred, aby prevádzka zostala pohodlná pre všetkých.",
  },
  {
    value: "payment",
    question: "Aké platobné možnosti prijímate?",
    answer:
      "Toto je ukážkový obsah. Aktuálne platobné možnosti si over pri rezervácii alebo priamo na prevádzke.",
  },
]

export const instagramImages = [
  "/chmonya-barber/instagram-1.jpg",
  "/chmonya-barber/instagram-2.jpg",
  "/chmonya-barber/instagram-3.jpg",
  "/chmonya-barber/instagram-4.jpg",
  "/chmonya-barber/instagram-5.jpg",
  "/chmonya-barber/instagram-6.jpg",
  "/chmonya-barber/instagram-7.jpg",
  "/chmonya-barber/instagram-8.jpg",
]
