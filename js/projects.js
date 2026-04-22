/* ============================================================
   PROGETTI DEL PORTFOLIO — Chiara Diomei
   ============================================================
   Per AGGIUNGERE un progetto: copia un blocco { ... } e incollalo
   dentro l'array, separato da una virgola.
   Per MODIFICARE: cambia i campi del blocco corrispondente.
   Per RIMUOVERE: cancella il blocco { ... } completo.

   gallery: array di immagini reali.
     { src: "assets/nome.jpg", label: "Didascalia", wide: true/false }
     wide: true = larghezza piena nel pannello
   ============================================================ */

const projects = [

  {
    title: "Nonnival",
    cat:   "Branding \u00b7 Festival",
    img:   "assets/nonnival-cover.jpg",
    year:  "2024",
    role:  "Brand Designer",
    tools: "Illustrator \u00b7 Photoshop \u00b7 InDesign",
    desc:  "Ideazione e realizzazione dell\u2019identit\u00e0 visiva del festival Nonnival, dedicato al rapporto unico tra nonni e nipoti. Il progetto celebra la spensieratezza e la complicit\u00e0 intergenerazionale attraverso colori primari saturi, mascotte cartoon e una tipografia espressiva che trasmette calore e gioia. W/ Raffaele Panunzio, Luna Silingardi, Viola Sogno.",
    gallery: [
      { src: "assets/nonnival-hero.jpg",       label: "Key visual \u2014 billboard principale",  wide: true },
      { src: "assets/nonnival-billboards.jpg", label: "Sistema billboard declinato in 4 varianti" },
      { src: "assets/nonnival-programs.jpg",   label: "Programma 3 giorni \u2014 locandine evento" },
      { src: "assets/nonnival-merch.jpg",      label: "Merchandise, biglietti, furgone brandizzato", wide: true },
    ],
  },

  {
    title: "Giannasi",
    cat:   "Brand Design \u00b7 Advertising",
    img:   "assets/giannasi.jpeg",
    year:  "2024",
    role:  "Art Director",
    tools: "Photoshop \u00b7 InDesign",
    desc:  "Campagna pubblicitaria per Giannasi, storica rosticceria milanese dal 1967. Il progetto valorizza un luogo storicamente riconosciuto conservandone i tratti tipici, costruendo un linguaggio visivo contemporaneo che comunica la tradizione con energia e ironia. W/ Anna Perazzini, Emma Itria.",
    gallery: [
      { src: "assets/giannasi.jpeg", label: "Visual principale", wide: true },
    ],
  },

  {
    title: "T\u2019Invito",
    cat:   "Brand Design \u00b7 Editorial",
    img:   "assets/tinvito.jpeg",
    year:  "2024",
    role:  "Brand Designer",
    tools: "Illustrator \u00b7 Photoshop \u00b7 InDesign",
    desc:  "Identit\u00e0 visiva completa per T\u2019Invito, ristorante/osteria di autentica convivialit\u00e0 milanese. Il sistema di brand combina colori accoglienti, illustrazioni che evocano calore e familiarit\u00e0, e una tipografia espressiva che fa sentire ogni persona accolta. W/ Pasquale Di Meglio.",
    gallery: [
      { src: "assets/tinvito.jpeg", label: "Sistema brand \u2014 affissione esterna", wide: true },
    ],
  },

  {
    title: "Little but not least",
    cat:   "Campagna ADV Sociale",
    img:   "assets/lbnl-cover.jpg",
    year:  "2024",
    role:  "Art Director \u00b7 Copywriter",
    tools: "Photoshop \u00b7 InDesign",
    desc:  "Campagna advertising digitale che sfida i preconcetti sul nanismo. Una serie di soggetti con piccoli oggetti che hanno un impatto significativo nella vita quotidiana \u2014 api, viti, bottoni, diamanti \u2014 per trasmettere che il valore di un individuo non \u00e8 determinato dalla sua altezza. \u201cWe exist.\u201d",
    gallery: [
      { src: "assets/lbnl-hero.jpg",    label: "Key visual tipografico",         wide: true },
      { src: "assets/lbnl-bees.jpg",    label: "Soggetto \u2014 Api" },
      { src: "assets/lbnl-screws.jpg",  label: "Soggetto \u2014 Viti" },
      { src: "assets/lbnl-phones.jpg",  label: "Campagna completa \u2014 5 soggetti", wide: true },
    ],
  },

  {
    title: "Wes World",
    cat:   "Art Direction \u00b7 Editoria",
    img:   "assets/wes.jpeg",
    year:  "2024",
    role:  "Art Director",
    tools: "Photoshop \u00b7 After Effects \u00b7 InDesign",
    desc:  "Progetto editoriale che raccoglie pensieri sui film e sui personaggi di Wes Anderson. Ho cercato di riprodurre visivamente il cambiamento della sua produzione negli anni e di come lui ci regala caramelle bellissime con gusto amaro.",
    gallery: [
      { src: "assets/wes.jpeg", label: "Il progetto fisico \u2014 faldone e materiali", wide: true },
    ],
  },

  {
    title: "Storia di una penna",
    cat:   "Editoria \u00b7 Illustrazione",
    img:   "assets/penna.jpeg",
    year:  "2024",
    role:  "Graphic Designer \u00b7 Illustratrice",
    tools: "InDesign \u00b7 Illustrator",
    desc:  "Progetto editoriale illustrato che esplora la vita di una penna in diversi ruoli potenziali. La narrazione \u00e8 veicolata attraverso illustrazioni che creano un\u2019atmosfera intima, dipingendo un quadro delle esperienze di una penna con una combinazione delicata di parole e immagini.",
    gallery: [
      { src: "assets/penna.jpeg", label: "Copertina e copie del volume", wide: true },
    ],
  },

  {
    title: "(Re)Wild",
    cat:   "Editoria \u00b7 Art Direction",
    img:   "assets/rewild-cover.jpg",
    year:  "2024",
    role:  "Art Director \u00b7 Graphic Designer",
    tools: "InDesign \u00b7 Illustrator \u00b7 Photoshop",
    desc:  "Magazine editoriale ideato per discutere di spazi verdi urbani, diritti alla natura e benessere animale. La narrazione avviene attraverso la prospettiva di diverse specie, per enfatizzare la decostruzione della visione antropocentrica. Stampato su carte naturali e rilegato a mano.",
    gallery: [
      { src: "assets/rewild-hero.jpg",     label: "Il magazine \u2014 pagine interne",              wide: true },
      { src: "assets/rewild-spreads.jpg",  label: "Overview completa degli spread" },
      { src: "assets/rewild-pvenezia.jpg", label: "Copertina \u2014 Five Highlights of Porta Venezia" },
    ],
  },

  {
    title: "PVDD Design Week",
    cat:   "Visual System \u00b7 Segnaletica",
    img:   "assets/pvdd-cover.jpg",
    year:  "2024",
    role:  "Visual Designer",
    tools: "Illustrator \u00b7 InDesign",
    desc:  "Visual system per il quartiere di Porta Venezia in occasione della Milano Design Week. Sette parole chiave \u2014 Vita, Futuro, Natura, Libert\u00e0, Diversit\u00e0, Inclusione, Casa \u2014 trasformate in forme che creano composizioni spontanee applicate a bandiere, affissioni e segnaletica. W/ Balsamo Marco, Gasparotto Jaron, Trope Federico.",
    gallery: [
      { src: "assets/pvdd-flags.jpg",           label: "Bandiere esposte \u2014 Milano Design Week",      wide: true },
      { src: "assets/pvdd-flyer-billboard.jpg", label: "Flyer e affissione ambientata" },
      { src: "assets/pvdd-banner.jpg",          label: "Striscione via Venezia \u2014 street view",       wide: true },
    ],
  },

  {
    title: "Fumo",
    cat:   "Progetto Personale",
    img:   "assets/fumo-cover.jpg",
    year:  "2024",
    role:  "Fotografa \u00b7 Illustratrice",
    tools: "Fotografia analogica \u00b7 Disegno a mano",
    desc:  "\u201cCome se dietro l\u2019obiettivo operasse una coscienza selettiva che coglie nel mondo esterno ci\u00f2 che esprime il proprio mondo interno \u2014 perch\u00e9 uno scatto fotografico non \u00e8 mai un gesto obbiettivo ma risultato del tumulto della nostra anima.\u201d Fumo \u00e8 un progetto dove illustrazione e fotografia convergono nell\u2019esplorazione del caos interiore.",
    gallery: [
      { src: "assets/fumo-hero.jpg",     label: "Collage principale \u2014 fotografia e disegno", wide: true },
      { src: "assets/fumo-artifact.jpg", label: "L\u2019oggetto fisico \u2014 materiali del progetto" },
      { src: "assets/fumo-photos.jpg",   label: "Serie fotografica analogica",                  wide: true },
    ],
  },

];

/* ============================================================
   PAROLE DEL MARQUEE
   ============================================================ */
const marqueeWords = [
  "Visual Design",
  "Art Direction",
  "Editorial",
  "Brand Identity",
  "Advertising",
  "Illustrazione",
  "Communication",
  "Photography",
];
