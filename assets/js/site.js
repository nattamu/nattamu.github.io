(function () {
  const S = window.SITE;
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page;

  const ICON = {
    arrowUR: '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    arrowR: '<svg class="arrow arrow-r" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  };
  window.ICON = ICON;

  /* ---------- Nav ---------- */
  const links = [
    ["home", "Home", root || "./"],
    ["playground", "UX Playground", root + "ux-playground/"],
    ["experience", "Experience", root + "experience/"],
    ["about", "Contact me", root + "about-me/"],
  ];
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.setAttribute("aria-label", "Main");
  nav.innerHTML = `
    <a class="nav-logo" href="${root || "./"}" aria-label="${S.name}, home">${S.initials}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu"><span></span><span></span></button>
    <div class="nav-links" id="nav-links">
      ${links
        .map(([id, label, href]) => `<a class="nav-link" href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a>`)
        .join("")}
    </div>`;
  document.body.prepend(nav);

  // Mobile menu (the toggle is hidden from 768px up)
  const toggle = nav.querySelector(".nav-toggle");
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll(".nav-link").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setOpen(false); });

  const skip = document.createElement("a");
  skip.className = "skip-link";
  skip.href = "#main";
  skip.textContent = "Skip to content";
  document.body.prepend(skip);

  /* ---------- Footer ---------- */
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    const words = ["Designing with empathy", "Research-led UX", "Designing with empathy", "Inclusive by default"];
    const run = words.map((w) => `<span>${w} ✦</span>`).join("");
    footer.outerHTML = `
      <div class="marquee" aria-hidden="true"><div class="marquee-track">${run}${run}</div></div>
      <footer class="footer">
        <div class="container">
          <span class="eyebrow">Getting in touch?</span><br />
          <a class="footer-mail" href="mailto:${S.email}" title="${S.email}"><span class="footer-mail-text">${S.email}</span>${ICON.arrowUR}</a>
          <div class="footer-bar">
            <span class="status">Open to UX opportunities · ${S.location}</span>
            <div class="socials">
              <a href="${S.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a>
              <a href="mailto:${S.email}" aria-label="Email">${ICON.mail}</a>
            </div>
            <span>© ${new Date().getFullYear()} ${S.name}</span>
          </div>
        </div>
      </footer>`;
  }

  /* ---------- Project rendering ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function linkAttrs(p) {
    if (!p.link) return { tag: "div", attrs: "" };
    const ext = /^https?:/.test(p.link);
    const href = ext ? p.link : root + p.link;
    return { tag: "a", attrs: ` href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ""}` };
  }

  function media(p) {
    return p.image
      ? `<div class="card-media"${p.imageZoom ? ` style="--zoom:${Number(p.imageZoom)};--focus:${esc(p.imageFocus || "50% 50%")}"` : ""}><img src="${esc(/^https?:/.test(p.image) ? p.image : root + p.image)}" alt="" loading="lazy" /></div>`
      : `<div class="card-placeholder"><span>${esc(p.title.charAt(0))}</span></div>`;
  }

  function badge(p) {
    return p.status === "in-progress" ? '<span class="chip chip-accent">In progress</span>' : "";
  }

  window.renderFeatured = function (el) {
    const items = window.PROJECTS.filter((p) => p.featured).slice(0, 4);
    el.innerHTML = items
      .map((p, i) => {
        const { tag, attrs } = linkAttrs(p);
        // .card-reveal holds the extra detail shown on hover/focus (see .card-feature in style.css)
        return `<${tag} class="card card-feature reveal" style="--d:${(i % 2) * 0.1}s"${attrs}>
          ${media(p)}
          <div class="card-top"><span class="chip">${esc(p.tags[0])}</span>${badge(p)}</div>
          <div class="card-body">
            <div>
              <h3 class="card-title">${esc(p.title)}</h3>
              <p class="card-tagline">${esc(p.tagline)}</p>
              <div class="card-reveal">
                <div>
                  <p class="card-desc">${esc(p.description || p.summary)}</p>
                  <ul class="card-tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
                </div>
              </div>
            </div>
            ${p.link ? `<span class="card-go">${ICON.arrowR}</span>` : ""}
          </div>
        </${tag}>`;
      })
      .join("");
  };

  // Case-study footer (Figma "More Stories" layout), as image + title + period + summary.
  // `picks` is either a number (the next N projects after the current one, wrapping
  // round) or a list of slugs to recommend, e.g. ["promjai", "acoustic-aura"].
  // The title link is stretched over the whole card, so the card is one tap target.
  window.renderStories = function (el, currentSlug, picks = 2) {
    const pages = window.PROJECTS.filter((p) => p.link);
    let items;
    if (Array.isArray(picks)) {
      items = picks.map((slug) => pages.find((p) => p.slug === slug)).filter(Boolean);
    } else {
      const at = pages.findIndex((p) => p.slug === currentSlug);
      items = Array.from({ length: Math.min(picks, pages.length - 1) }, (_, i) => pages[(at + 1 + i) % pages.length]);
    }
    el.innerHTML = items
      .map((p, i) => {
        const { attrs } = linkAttrs(p);
        return `<article class="story reveal" style="--d:${i * 0.08}s">
          <div class="card story-media">${media(p)}<span class="card-go">${ICON.arrowR}</span></div>
          <h3><a${attrs}>${esc(p.title)}</a></h3>
          <p class="story-date">${esc(p.period || p.year)}</p>
          <p class="story-summary">${esc(p.summary)}</p>
        </article>`;
      })
      .join("");
  };

  window.renderProjectGrid = function (el, filter) {
    const items = window.PROJECTS.filter((p) => filter === "all" || p.category === filter || (filter === "in-progress" && p.status === "in-progress"));
    el.innerHTML = items
      .map((p, i) => {
        const { tag, attrs } = linkAttrs(p);
        return `<article class="p-card reveal" style="--d:${(i % 2) * 0.1}s">
          <${tag} class="card"${attrs}${p.link ? ` aria-label="Read the ${esc(p.title)} case study"` : ""}>
            ${media(p)}
            <div class="card-top">${badge(p)}</div>
            ${p.link ? `<span class="card-go">${ICON.arrowR}</span>` : ""}
          </${tag}>
          <div class="p-meta"><h3>${esc(p.title)}</h3><span class="year">${esc(p.year)}</span></div>
          <p class="p-tagline">${esc(p.tagline)}</p>
          <p class="p-summary">${esc(p.summary)}</p>
          <p class="p-role">Role: <b>${esc(p.role)}</b></p>
          <ul class="p-tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        </article>`;
      })
      .join("");
    observe(el.querySelectorAll(".reveal"));
  };

  /* ---------- Floating gallery ---------- */
  window.renderFloaters = function (section, images) {
    const wrap = section.querySelector(".floaters");
    // edge ("left"/"right"), inset from that edge (% of width), start y (% of section height), parallax speed.
    // Anchoring to an edge keeps floaters inside the viewport and out of the centred copy.
    const spots = [
      ["left", 4, 4, 0.25], ["right", 6, 10, 0.1], ["left", 8, 30, 0.18], ["right", 3, 36, 0.3], ["left", 3, 58, 0.08],
      ["right", 8, 62, 0.2], ["left", 7, 84, 0.14], ["right", 4, 86, 0.06], ["left", 12, 12, 0.22], ["right", 12, 76, 0.16],
    ];
    wrap.innerHTML = images
      .slice(0, spots.length)
      .map((src, i) => {
        const [edge, x, y, s] = spots[i];
        const rot = (i % 2 ? 1 : -1) * (3 + (i % 3) * 2);
        return `<figure class="floater" data-speed="${s}" data-rot="${rot}" style="${edge}:${x}%;top:${y}%;margin:0"><img src="${src}" alt="" loading="lazy" /></figure>`;
      })
      .join("");
    const floaters = [...wrap.children];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const update = () => {
      const r = section.getBoundingClientRect();
      const progress = -r.top;
      floaters.forEach((f) => {
        const y = progress * -Number(f.dataset.speed);
        f.style.transform = `translate3d(0, ${y}px, 0) rotate(${f.dataset.rot}deg)`;
      });
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  };

  /* ---------- Count-up stats ---------- */
  function countUp(el) {
    const target = Number(el.dataset.count);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = target; return; }
    const start = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - start) / 1400);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          e.target.querySelectorAll("[data-count]").forEach(countUp);
          io.unobserve(e.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observe(nodes) {
    nodes.forEach((n) => (io ? io.observe(n) : n.classList.add("in")));
  }
  window.observeReveal = observe;

  document.addEventListener("DOMContentLoaded", () => observe(document.querySelectorAll(".reveal")));

  /* ---------- Case study contents: highlight the section being read ---------- */
  const tocLinks = [...document.querySelectorAll(".cs-toc a")];
  if (tocLinks.length) {
    const heads = tocLinks.map((a) => document.getElementById(a.hash.slice(1)));
    let ticking = false;
    const spy = () => {
      // the last section heading above 30% of the viewport is the one being read
      let idx = -1;
      heads.forEach((h, i) => { if (h && h.getBoundingClientRect().top < innerHeight * 0.3) idx = i; });
      tocLinks.forEach((a, i) => (i === idx ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
    spy();
  }
})();
