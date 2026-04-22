# Chiara Diomei — Portfolio

Sito statico del portfolio di Chiara Diomei.  
Nessuna build, nessun framework: estrai lo zip, apri `index.html` nel browser.

---

## 📁 Struttura dei file

```
chiara-portfolio/
├── index.html            ← Pagina principale
├── css/
│   └── style.css         ← Tutti gli stili (colori, font, layout)
├── js/
│   ├── projects.js       ← DATI DEI PROGETTI ← modifica qui
│   └── main.js           ← Animazioni e logica (non toccare)
└── assets/
    ├── giannasi.jpeg         Copertine progetti originali
    ├── penna.jpeg
    ├── tinvito.jpeg
    ├── wes.jpeg
    ├── lbnl-*.jpg            Little but not least — gallery
    ├── nonnival-*.jpg        Nonnival — gallery
    ├── rewild-*.jpg          (Re)Wild — gallery
    ├── pvdd-*.jpg            PVDD Design Week — gallery
    ├── fumo-*.jpg            Fumo — gallery
    ├── cd-star-1..4.png      Stelle decorative hero
    ├── cd-moon.png           Luna — estratta dalla copertina del portfolio
    ├── cd-bird.png           Uccello — estratto dalla copertina del portfolio
    ├── chiara.png            Foto profilo (sezione Chi sono)
    ├── favicon.svg           Favicon (luna su sfondo scuro)
    └── og-image.jpg          Immagine per condivisione social (1200×630)
```

---

## ✏️ Come modificare i contenuti

| Cosa vuoi cambiare | File da aprire |
|---|---|
| Aggiungere / rimuovere / modificare progetti | `js/projects.js` |
| Parole del marquee scorrevole | `js/projects.js` → `marqueeWords` |
| Colori globali, font, dimensioni | `css/style.css` → sezione `1. VARIABILI` |
| Nome, email, descrizione hero | `index.html` |
| Bio e esperienze "Chi sono" | `index.html` → sezione `cd-about` |
| Immagini progetti | Sostituisci i file in `assets/` con gli stessi nomi |
| Foto profilo | Sostituisci `assets/chiara.png` |

### Aggiungere un progetto in `projects.js`

Copia questo blocco dentro l'array `projects` e riempilo:

```js
{
  title: "Nome progetto",
  cat:   "Categoria",
  img:   "assets/cover.jpg",       // immagine copertina card
  year:  "2024",
  role:  "Tuo ruolo",
  tools: "Strumento 1 · Strumento 2",
  desc:  "Descrizione del progetto...",
  gallery: [
    { src: "assets/img-1.jpg", label: "Didascalia", wide: true },
    { src: "assets/img-2.jpg", label: "Altra immagine" },
  ],
},
```

`wide: true` fa sì che l'immagine occupi tutta la larghezza nel pannello.

---

## 🚀 Pubblicare su GitHub Pages

1. Crea una repo su GitHub (es. `portfolio`)
2. Carica tutti i file nella radice della repo
3. Vai su **Settings → Pages**
4. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → **Save**
5. Aspetta 1–2 minuti: il sito sarà online su `https://USERNAME.github.io/portfolio/`

> **Nota sul dominio personalizzato:** se vuoi usare `chiaradiomei.com` invece del link GitHub, aggiungi un file `CNAME` nella root della repo con solo il tuo dominio dentro, poi configura i DNS dal tuo provider.

---

## 🖥️ Provare in locale

Doppio click su `index.html` — funziona direttamente nel browser.  
Per sviluppo con auto-reload: estensione **Live Server** di VSCode.

---

## 📦 Librerie (CDN, nessuna installazione)

| Libreria | Uso |
|---|---|
| [GSAP 3.12](https://gsap.com/) | Animazioni (preloader, hero, scroll, bird, stelle) |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Animazioni legate allo scroll |
| [Lenis 1.0](https://lenis.darkroom.engineering/) | Scroll fluido |
| Google Fonts | Instrument Serif + Inter |

