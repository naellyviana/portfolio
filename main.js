/* Naelly Viana — portfólio · JS puro */
(() => {
  /* ---------- traduções (PT fica no HTML; aqui só EN) ---------- */
  const EN = {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.welcome": "Welcome to my<br>portfolio",
    "hero.edition": "visual portfolio",
    "hero.role": "Designer &amp; Video editor",
    "hero.cta": "See work",
    "marquee.ai": "Artificial intelligence",
    "reel.play": "Watch · 60 s",
    "work.title": "Selected<br>work",
    "work.more": "See everything on Vimeo ↗",
    "w.more": "Watch and read more →",
    "t.voice": "AI voice-over",
    "t.stock": "Stock footage",
    "t.ai": "Generative AI",
    "w.croc.tag": "Concept commercial · Editing",
    "w.croc.desc": "A concept commercial with a 70s hippie aesthetic: what if cannabis ads existed in Brazil?",
    "w.croc.long": "<p>Drawing on the hippie aesthetic of the 70s, this concept commercial for the CrocBuds brand imagines what a cannabis ad would look like — if it were legal in Brazil. Hippie Yippie herbs bring back that good vibe the 70s hippies loved so much, which some even say was better than today's.</p><p>The commercial was made with free stock footage, AI voice-over and editing of the concept product in ChatGPT, Photoshop and Generative Fill, Adobe's technology.</p>",
    "w.vela.title": "Jasmine scented candle (3D)",
    "w.vela.tag": "3D modeling · Packaging",
    "w.vela.desc": "3D model made in Blender, packaging designed in Adobe Illustrator.",
    "w.vela.long": "<p>3D model made in Blender, packaging designed in Adobe Illustrator.</p>",
    "w.steal.tag": "Campaign · 3D · 30 s commercial",
    "w.steal.desc": "A fashion campaign for Mercado Livre: a dress-up game where the outfits can be bought on the spot.",
    "w.steal.long": "<p>An advertising campaign to boost fashion sales on Mercado Livre.</p><p>The term “Steal Her Look” was born on the internet to playfully mock a character's outfit, pointing out how and where to get the clothes they wear at a given moment. Characters from series, cartoons, celebrities and many others have been targets of the joke, which made the term known across the internet.</p><p>I used the popularity of this joke to imagine a game that was part of the childhood of many Gen Z women — the campaign's target audience. In it, the digital character can be customized to match the customer's body, and the clothes she wears can be bought directly on Mercado Livre once the customization is done. The project was made in Blender, and some of the clothes were created with artificial intelligence.</p><p>A 30-second commercial was also produced for the campaign.</p>",
    "w.easy.title": "Easyphone (concept)",
    "w.easy.tag": "3D concept · Realistic render",
    "w.easy.desc": "Made in Blender and rendered in Cycles for a more realistic look.",
    "w.easy.long": "<p>A concept project made in Blender and rendered in Cycles for a more realistic look.</p>",
    "w.cult.title": "Culture Week 2025 screens",
    "w.cult.tag": "Generative AI · Big-screen motion",
    "w.cult.desc": "Sets created and animated with generative AI for the Culture Week 2025 performances in Várzea, RN.",
    "w.cult.long": "<p>A project made with generative artificial intelligence to create the images and animations of the stage sets. It was part of the Culture Week 2025 performances, held in August in the city of Várzea, RN.</p><p>The screens were made with Midjourney and Gemini's artificial intelligence — both the image generator and the video generator, Veo 3, to animate the still images. Photoshop's Generative Fill was also used to fix details.</p>",
    "w.cult.count": "videos",
    "w.bienal.title": "Bienal em Natal campaign",
    "w.bienal.tag": "Campaign design · Behance",
    "w.bienal.desc": "Concept, panel and billboard for the international book fair.",
    "about.photo": "4:3 photo coming soon",
    "about.title": "Ideas into<br><span class=\"red\">visual projects</span>",
    "about.p1": "Always eager to learn new things and sharpen what I already know. Activities that let me exercise creativity are my favorite.",
    "about.p2": "I deliver creative edits in Photoshop, build 3D models in Blender, create concept art in Illustrator, edit videos in Premiere Pro and Canva, manage social media, craft authentic campaigns, improve my workflow with artificial intelligence and much more.",
    "about.p3": "I turn ideas into unique visual projects, focused on detail, modern aesthetics and storytelling.",
    "services.title": "What I do",
    "s1.t": "Video editing",
    "s1.d": "Cuts, pacing, dynamic captions and motion for Reels, YouTube and ads. Premiere Pro and Canva.",
    "s2.t": "Graphic design",
    "s2.d": "Creative edits and concept art in Photoshop and Illustrator.",
    "s3.t": "3D modeling",
    "s3.d": "Products and scenes modeled and animated in Blender.",
    "s4.t": "Social media &amp; campaigns",
    "s4.d": "Social media management and authentic campaigns, from concept to final piece.",
    "s5.t": "AI in the creative flow",
    "s5.d": "Artificial intelligence to produce faster without losing an authorial eye.",
    "contact.label": "05 — Contact · available for freelance",
    "contact.title": "Let's create<br>together?",
    "footer.made": "Handmade in Natal — RN, Brazil",
    "hero.place": "Natal — RN, Brazil",
    "footer.top": "Back to top ↑"
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  nodes.forEach(n => { n.dataset.pt = n.innerHTML; });
  const buttons = document.querySelectorAll(".lang button");

  function setLang(lang) {
    nodes.forEach(n => {
      const key = n.dataset.i18n;
      n.innerHTML = lang === "en" && EN[key] ? EN[key] : n.dataset.pt;
    });
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  buttons.forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved === "en" || (!saved && !navigator.language.toLowerCase().startsWith("pt"))) setLang("en");

  /* ---------- roleta: duplica os cards para a faixa girar sem emenda ---------- */
  const track = document.querySelector(".fan__track");
  if (track) {
    [...track.children].forEach(card => {
      const copy = card.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.tabIndex = -1;
      track.appendChild(copy);
    });
  }

  /* ---------- prévias sem som nos cards: só tocam quando o card está na tela ---------- */
  const previews = document.querySelectorAll(".card__video");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (previews.length && !calm && "IntersectionObserver" in window) {
    previews.forEach(v => {
      v.muted = true;
      v.addEventListener("playing", () => v.classList.add("is-playing"));
    });
    const watch = new IntersectionObserver(entries => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: "120px 0px" });
    previews.forEach(v => watch.observe(v));
  }

  /* ---------- vídeos (Vimeo) ---------- */
  const PLAYLISTS = {
    cultura: [
      { id: "1247728931", name: "Xaxado" },
      { id: "1247728911", name: "Pastoril" },
      { id: "1247728855", name: "Coco" },
      { id: "1247728858", name: "Aquarela" },
      { id: "1247728856", name: "Igreja" },
      { id: "1247728859", name: "Entrada" }
    ]
  };
  const VERTICAL = new Set(["1247732415", "1247732413"]);
  const vimeo = id => `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0&color=E3241B`;
  const iframe = (id, title) =>
    `<iframe src="${vimeo(id)}" title="${title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

  const modal = document.getElementById("modal");
  const frame = document.getElementById("modal-frame");
  const tabs = document.getElementById("modal-tabs");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const toolsEl = document.getElementById("modal-tools");

  function play(id, title) {
    frame.classList.toggle("is-vertical", VERTICAL.has(id));
    frame.innerHTML = iframe(id, title);
  }

  function open(trigger) {
    /* título e descrição completa vêm do card (já no idioma atual) */
    const card = trigger.dataset.project && document.querySelector(`article[data-project="${trigger.dataset.project}"]`);
    const title = (card && card.querySelector("h3").textContent) || trigger.dataset.title || "";
    titleEl.textContent = title;
    const long = card && card.querySelector(".card__more [data-i18n]");
    descEl.innerHTML = long ? long.innerHTML : "";
    const tools = card && card.querySelector(".tools");
    toolsEl.innerHTML = tools ? tools.innerHTML : "";
    tabs.innerHTML = "";
    const list = PLAYLISTS[trigger.dataset.playlist];
    if (list) {
      list.forEach((v, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = v.name;
        b.setAttribute("aria-pressed", String(i === 0));
        b.addEventListener("click", () => {
          tabs.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", "false"));
          b.setAttribute("aria-pressed", "true");
          play(v.id, `${title} — ${v.name}`);
        });
        tabs.appendChild(b);
      });
      play(list[0].id, `${title} — ${list[0].name}`);
    } else {
      play(trigger.dataset.video, title);
    }
    /* setas: navegam pelos projetos na ordem da grade */
    current = ORDER.indexOf(trigger.dataset.project);
    modal.classList.toggle("has-nav", current > -1);
    countEl.textContent = current > -1 ? `${current + 1} / ${ORDER.length}` : "";
    modal.scrollTop = 0;
    if (modal.open) return;
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }

  /* projetos com vídeo, na ordem em que aparecem em "Trabalhos" */
  const ORDER = [...document.querySelectorAll(".work__grid article[data-project]")].map(a => a.dataset.project);
  const countEl = document.getElementById("modal-count");
  let current = -1;

  function go(step) {
    if (current < 0) return;
    const key = ORDER[(current + step + ORDER.length) % ORDER.length];
    open(document.querySelector(`article[data-project="${key}"] .card__media`));
  }
  modal.querySelectorAll("[data-nav]").forEach(b => b.addEventListener("click", () => go(Number(b.dataset.nav))));
  document.addEventListener("keydown", e => {
    if (!modal.open) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  });

  function close() {
    frame.innerHTML = "";
    modal.close ? modal.close() : modal.removeAttribute("open");
  }

  document.querySelectorAll("[data-video], [data-playlist]").forEach(el => {
    if (el.closest(".reel__player")) return;
    el.addEventListener("click", () => open(el));
  });
  modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) close(); });
  modal.addEventListener("close", () => { frame.innerHTML = ""; });

  /* showreel: carrega o player só ao clicar */
  const reel = document.querySelector(".reel__player");
  reel.querySelector(".play").addEventListener("click", () => {
    reel.insertAdjacentHTML("beforeend", iframe(reel.dataset.embed, "Demo reel — Naelly Viana"));
    reel.querySelector(".play").remove();
  });

  /* ---------- menu ao rolar ---------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- entrada ao rolar ---------- */
  const targets = document.querySelectorAll(".section-head, .card, .reel__player, .about__grid, .services__list li, .contact > *");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(t => { t.classList.add("reveal"); io.observe(t); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
