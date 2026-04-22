/* ============================================================
   CHIARA DIOMEI — PORTFOLIO
   Logica principale: cursore, animazioni, modale, marquee
   ============================================================
   Di norma NON serve modificare questo file.
   Per cambiare i CONTENUTI dei progetti vai su js/projects.js
   Per cambiare GRAFICA / COLORI vai su css/style.css
   ============================================================ */


/* ============================================================
   1. MARQUEE — generazione testo scorrevole infinito
   Le parole sono definite in projects.js -> marqueeWords
   ============================================================ */
(function buildMarquee() {
  const track = document.getElementById("cdMarqueeTrack");
  if (!track || typeof marqueeWords === "undefined") return;

  // duplichiamo la lista 2 volte per ottenere lo scorrimento continuo
  let html = "";
  for (let k = 0; k < 2; k++) {
    marqueeWords.forEach((w) => {
      html += `<span class="cd-m-item">${w}</span><span class="cd-m-dot"></span>`;
    });
  }
  track.innerHTML = html;
})();


/* ============================================================
   2. GRIGLIA PROGETTI — generazione card
   I dati sono in projects.js -> projects
   ============================================================ */
(function buildGrid() {
  const grid = document.getElementById("cdGrid");
  const count = document.getElementById("cdWorkCount");
  if (!grid || typeof projects === "undefined") return;

  count.textContent =
    String(projects.length).padStart(2, "0") + " Progetti";

  grid.innerHTML = projects
    .map(
      (p, i) => `
    <div class="cd-pi">
      <button type="button" class="cd-card cd-hv" data-idx="${i}" aria-label="Apri ${p.title}">
        <div class="cd-card-img">
          <img src="${p.img}" alt="${p.title} — ${p.cat}"
               loading="${i === 0 ? 'eager' : 'lazy'}"
               ${i === 0 ? 'fetchpriority="high"' : ''} />
          <div class="cd-card-ov">
            <div class="cd-card-cta">
              <div class="cd-card-arrow">→</div>
              Scopri
            </div>
          </div>
        </div>
        <div class="cd-card-num">${String(i + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</div>
        <div class="cd-card-name">${p.title}</div>
        <div class="cd-card-cat">${p.cat}</div>
      </button>
    </div>
  `
    )
    .join("");

  // click su una card -> apre la modale
  grid.querySelectorAll(".cd-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      openPanel(idx);
    });
  });
})();


/* ============================================================
   3. MODALE DETTAGLIO PROGETTO
   ============================================================ */
const panel      = document.getElementById("cdPanel");
const panelBg    = document.getElementById("cdPanelBg");
const panelClose = document.getElementById("cdPanelClose");
const panelContent = document.getElementById("cdPanelContent");
const panelPrev  = document.getElementById("cdPanelPrev");
const panelNext  = document.getElementById("cdPanelNext");

let currentIdx = 0;   // traccia il progetto aperto

function openPanel(idx, animate) {
  // Clamp index
  idx = ((idx % projects.length) + projects.length) % projects.length;
  currentIdx = idx;
  const p = projects[idx];
  if (!p) return;

  // Aggiorna nav prev/next labels
  const prevP = projects[((idx - 1) + projects.length) % projects.length];
  const nextP = projects[(idx + 1) % projects.length];
  if (panelPrev) panelPrev.querySelector(".cd-pn-nav-title").textContent = prevP.title;
  if (panelNext) panelNext.querySelector(".cd-pn-nav-title").textContent = nextP.title;

  // Renderizza contenuto
  panelContent.innerHTML = `
    <img class="cd-pn-hero" src="${p.img}" alt="${p.title}" />
    <div class="cd-pn-body">
      <div class="cd-pn-eye">— ${p.cat}</div>
      <h3 class="cd-pn-title">${p.title}</h3>
      <div class="cd-pn-meta">
        <div><label>Anno</label><span>${p.year}</span></div>
        <div><label>Ruolo</label><span>${p.role}</span></div>
        <div><label>Strumenti</label><span>${p.tools}</span></div>
      </div>
      <p class="cd-pn-desc">${p.desc}</p>
      <div class="cd-pn-section-label">— Processo &amp; Visuals</div>
      <div class="cd-pn-gallery">
        ${p.gallery
          .map(
            (slot) => slot.src
              ? `<figure class="cd-pn-img${slot.wide ? " cd-pn-img-wide" : ""}">
                   <img src="${slot.src}" alt="${slot.label}" loading="lazy" />
                   <figcaption>${slot.label}</figcaption>
                 </figure>`
              : `<div class="cd-pn-slot${slot.wide ? " cd-pn-slot-wide" : ""}">↑ ${slot.label}</div>`
          )
          .join("")}
      </div>
    </div>
  `;

  // Torna in cima allo sheet
  const sheet = document.querySelector(".cd-pn-sheet");
  if (sheet) sheet.scrollTop = 0;

  // Prima apertura: apri il panel
  if (!panel.classList.contains("open")) {
    panel.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // Animazione staggered del contenuto con GSAP (se disponibile)
  if (typeof gsap !== "undefined") {
    gsap.fromTo(".cd-pn-hero",
      { opacity: 0, scale: 1.04 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }
    );
    gsap.fromTo(".cd-pn-body > *",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.07,
        ease: "power2.out", delay: 0.15 }
    );
  }
}

function closePanel() {
  panel.classList.remove("open");
  document.body.style.overflow = "";
}

function goPanel(dir) {
  // dir: +1 prossimo, -1 precedente
  openPanel(currentIdx + dir, true);
}

panelBg.addEventListener("click", closePanel);
panelClose.addEventListener("click", closePanel);
if (panelPrev) panelPrev.addEventListener("click", () => goPanel(-1));
if (panelNext) panelNext.addEventListener("click", () => goPanel(+1));
document.addEventListener("keydown", (e) => {
  if (!panel.classList.contains("open")) return;
  if (e.key === "Escape")      closePanel();
  if (e.key === "ArrowRight")  goPanel(+1);
  if (e.key === "ArrowLeft")   goPanel(-1);
});


/* ============================================================
   3b. HAMBURGER MENU (mobile)
   ============================================================ */
(function burgerMenu() {
  const burger = document.getElementById("cdBurger");
  const nav    = document.getElementById("cdNav");
  if (!burger || !nav) return;

  function toggleMenu(forceClose) {
    const isOpen = forceClose === true ? true : nav.classList.contains("open");
    if (isOpen) {
      nav.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      // Ripristina scroll solo se il panel non è aperto
      if (!panel || !panel.classList.contains("open")) {
        document.body.style.overflow = "";
      }
    } else {
      nav.classList.add("open");
      burger.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  }

  burger.addEventListener("click", () => toggleMenu());

  // Chiudi il menu cliccando su un link interno
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => toggleMenu(true));
  });

  // Chiudi con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      toggleMenu(true);
    }
  });
})();


/* ============================================================
   4. CURSORE PERSONALIZZATO (solo desktop con mouse)
   ============================================================ */
(function customCursor() {
  if (!window.matchMedia("(hover: hover)").matches) return;
  const ball = document.getElementById("cdBall");
  const ring = document.getElementById("cdRing");
  if (!ball || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    ball.style.left = mx + "px"; ball.style.top = my + "px";
  });
  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();
  // ingrandimento del cerchio sopra elementi .cd-hv
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".cd-hv")) ring.classList.add("on");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".cd-hv")) ring.classList.remove("on");
  });
})();


/* ============================================================
   5. ANIMAZIONI (GSAP + ScrollTrigger + Lenis smooth scroll)
   ============================================================ */
window.addEventListener("load", () => {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  const lenis = new Lenis({
    duration: 1.35,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  // Click sui link interni con scroll fluido
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    });
  });

  // PRELOADER → animazione di ingresso
  const pl = document.getElementById("cd-preloader");
  const fill = document.getElementById("cd-pl-fill");
  const pctEl = document.getElementById("cd-pl-pct");
  const w1 = document.getElementById("cd-pl1");
  const w2 = document.getElementById("cd-pl2");
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(100, p + Math.random() * 22 + 6);
    fill.style.width = p + "%";
    pctEl.textContent = Math.floor(p) + "%";
    if (p >= 100) {
      clearInterval(iv);
      gsap.to([w1, w2], {
        y: "0%", duration: 1.2, stagger: 0.14, ease: "power4.out",
        onComplete() {
          setTimeout(() => {
            gsap.to(pl, {
              yPercent: -100, duration: 1.1, ease: "power4.inOut",
              onComplete() { pl.remove(); boot(); },
            });
          }, 420);
        },
      });
    }
  }, 130);

  // Animazioni post-preloader
  function boot() {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(".cd-hn-word", { y: "0%", duration: 1.5, stagger: 0.12, ease: "power4.out" })
      .to(".cd-hero-eye span", { y: "0%", opacity: 1, duration: 1.1, ease: "power3.out" }, "-=1.2")
      .to(".cd-hero-desc", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=.9")
      .to(".cd-hero-scroll", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=.9");

    gsap.from(".cd-sec-label", {
      scrollTrigger: { trigger: ".cd-manifesto", start: "top 82%", once: true },
      x: -24, opacity: 0, duration: 0.9, ease: "power3.out",
    });
    gsap.from(".cd-m-reveal", {
      scrollTrigger: { trigger: ".cd-m-reveal", start: "top 80%", once: true },
      y: 55, opacity: 0, duration: 1.5, ease: "power3.out",
    });
    gsap.from(".cd-m-reveal-sub", {
      scrollTrigger: { trigger: ".cd-m-reveal-sub", start: "top 85%", once: true },
      y: 30, opacity: 0, duration: 1.1, delay: 0.2, ease: "power3.out",
    });
    gsap.from(".cd-work-title", {
      scrollTrigger: { trigger: ".cd-work-head", start: "top 85%", once: true },
      y: 45, opacity: 0, duration: 1.2, ease: "power3.out",
    });

    // Parallax e fade-in per ogni card
    gsap.utils.toArray(".cd-card").forEach((c, i) => {
      gsap.from(c, {
        scrollTrigger: { trigger: c, start: "top 88%", once: true },
        y: 75, opacity: 0, duration: 1.3, delay: (i % 2) * 0.15, ease: "power3.out",
      });
      const img = c.querySelector("img");
      if (img) {
        gsap.to(img, {
          scrollTrigger: { trigger: c, start: "top bottom", end: "bottom top", scrub: 1.8 },
          y: -35, ease: "none",
        });
      }
    });

    // Animazione luna + stelle
    const moonEl = document.querySelector(".cd-c-moon");
    if (moonEl) {
      gsap.fromTo(moonEl,
        { opacity: 0, scale: 0.7, filter: "blur(14px)", y: -20 },
        { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 2.2, ease: "power3.out", delay: 0.2 }
      );
      gsap.to(moonEl, { y: "+=14", duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
    gsap.utils.toArray(".cd-c-star").forEach((s, i) => {
      gsap.fromTo(s,
        { opacity: 0, scale: 0.3 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "elastic.out(1, 0.55)", delay: 0.5 + i * 0.1 }
      );
      gsap.to(s, {
        y: `+=${10 + (i % 3) * 6}`,
        duration: 3 + (i % 4) * 0.7,
        repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.2,
      });
      const inner = s.querySelector("img");
      if (inner) {
        gsap.to(inner, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 22 + i * 3, repeat: -1, ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    });

    // Parallax mouse sull'hero
    const hero = document.querySelector(".cd-hero");
    const elements = gsap.utils.toArray(".cd-c-el");
    if (hero && elements.length) {
      hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        elements.forEach((el) => {
          const depth = parseFloat(el.dataset.depth || "20");
          gsap.to(el, { x: -cx * depth, y: -cy * depth, duration: 1.1, ease: "power2.out", overwrite: "auto" });
        });
      });
    }

    // Fade-out della costellazione allo scroll
    gsap.to(".cd-constellation", {
      scrollTrigger: { trigger: ".cd-hero", start: "top top", end: "bottom top", scrub: true },
      opacity: 0, y: -80,
    });

    // ── UCCELLO ─────────────────────────────────────────────
    const birdEl = document.querySelector(".cd-c-bird");
    if (birdEl) {
      // Entra in scena con un leggero drift dall'alto-destra
      gsap.fromTo(birdEl,
        { opacity: 0, x: 40, y: -30, scale: 0.85 },
        { opacity: 1, x: 0, y: 0, scale: 1,
          duration: 2.8, delay: 0.8, ease: "power3.out" }
      );
      // Respiro verticale continuo — più ampio della luna
      gsap.to(birdEl, {
        y: "+=22", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      // Micro-dondolo sull'asse x — simula un volo planato
      gsap.to(birdEl, {
        x: "+=12", duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1,
      });
    }

    // ── ABOUT / CHI SONO ────────────────────────────────────
    const aboutSection = document.querySelector(".cd-about");
    if (aboutSection) {
      gsap.from(".cd-about-anim-left", {
        scrollTrigger: { trigger: ".cd-about-inner", start: "top 80%", once: true },
        x: -50, opacity: 0, duration: 1.3, ease: "power3.out",
      });
      gsap.from(".cd-about-anim-right", {
        scrollTrigger: { trigger: ".cd-about-inner", start: "top 80%", once: true },
        x: 40, opacity: 0, duration: 1.3, delay: 0.18, ease: "power3.out",
      });
      gsap.utils.toArray(".cd-exp-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 92%", once: true },
          x: 20, opacity: 0, duration: 0.7, delay: i * 0.07, ease: "power2.out",
        });
      });
    }

    // ── CURSOR IMAGE-FOLLOW ──────────────────────────────────
    // Solo su dispositivi con mouse vero (non touch)
    if (window.matchMedia("(hover: hover)").matches) {
      const cursorImgWrap = document.getElementById("cdCursorImg");
      const cursorImgEl   = cursorImgWrap ? cursorImgWrap.querySelector("img") : null;

      if (cursorImgWrap && cursorImgEl) {
        let curX = window.innerWidth / 2;
        let curY = window.innerHeight / 2;
        let targetX = curX;
        let targetY = curY;
        let isShowing = false;

        // Smooth follow — laggy per effetto inerzia editoriale
        (function followLoop() {
          curX += (targetX - curX) * 0.09;
          curY += (targetY - curY) * 0.09;
          cursorImgWrap.style.left = curX + "px";
          cursorImgWrap.style.top  = curY + "px";
          requestAnimationFrame(followLoop);
        })();

        document.addEventListener("mousemove", (e) => {
          targetX = e.clientX;
          targetY = e.clientY;
        });

        // Ogni card mostra la sua immagine al hover
        document.querySelectorAll(".cd-card").forEach((card, i) => {
          card.addEventListener("mouseenter", () => {
            if (projects[i]) cursorImgEl.src = projects[i].img;
            gsap.to(cursorImgWrap, {
              opacity: 1, scale: 1, rotate: -3,
              duration: 0.45, ease: "power2.out", overwrite: true,
            });
            isShowing = true;
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(cursorImgWrap, {
              opacity: 0, scale: 0.88, rotate: -4,
              duration: 0.35, ease: "power2.in", overwrite: true,
            });
            isShowing = false;
          });
        });

        // Nasconde il cursor-img quando il panel è aperto
        document.getElementById("cdPanel").addEventListener("transitionend", () => {
          if (document.getElementById("cdPanel").classList.contains("open") && isShowing) {
            gsap.set(cursorImgWrap, { opacity: 0 });
          }
        });
      }
    }

    // ── SCROLL PROGRESS BAR ──────────────────────────────────
    const scrollBar = document.getElementById("cdScrollBar");
    if (scrollBar) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          scrollBar.style.width = (self.progress * 100).toFixed(2) + "%";
        },
      });
    }
  }
});
