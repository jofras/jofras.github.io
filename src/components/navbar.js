const THEMES = ["light", "dark", "pink"];

function getTheme() {
  const stored = localStorage.getItem("theme");
  if (stored && THEMES.includes(stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(t) {
  if (t === "light") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }
}

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const theme = getTheme();

    const isActive = (href) => {
      if (href === "/") return path === "/" || path === "/index.html";
      return path === href || path.startsWith(href.replace(".html", ""));
    };

    const link = (href, label) =>
      `<a href="${href}" class="${isActive(href) ? "active" : ""}">${label}</a>`;

    this.innerHTML = `
      <nav class="navbar">
        <a class="nav-logo" href="/">JQ</a>

        <div class="nav-links">
          ${link("/projects.html", "projects")}
          ${link("/timeline.html", "timeline")}
          ${link("/blog.html", "writing")}
          ${link("/about.html", "about")}
        </div>

        <div class="nav-right">
          <a href="https://github.com/jofras" target="_blank" rel="noopener">gh</a>
          <a href="mailto:jonfquinn@proton.me">mail</a>
          <a href="/cv_jq_current.pdf">cv</a>
          <button class="theme-toggle" id="theme-toggle">[${theme}]</button>
        </div>

        <div class="nav-mobile-controls">
          <button class="theme-toggle" id="theme-toggle-mobile">[${theme}]</button>
          <button class="nav-hamburger" id="menu-toggle">☰</button>
        </div>
      </nav>

      <div class="nav-mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-links">
          ${link("/projects.html", "projects")}
          ${link("/timeline.html", "timeline")}
          ${link("/blog.html", "writing")}
          ${link("/about.html", "about")}
        </div>
        <div class="mobile-menu-extras">
          <a href="https://github.com/jofras" target="_blank" rel="noopener">gh</a>
          <a href="mailto:jonfquinn@proton.me">mail</a>
          <a href="/cv_jq_current.pdf">cv</a>
        </div>
      </div>
    `;

    this.setupThemeToggle();
    this.setupMobileMenu();
  }

  setupThemeToggle() {
    const cycle = () => {
      const cur = getTheme();
      const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
      setTheme(next);
      this.connectedCallback();
    };
    this.querySelector("#theme-toggle")?.addEventListener("click", cycle);
    this.querySelector("#theme-toggle-mobile")?.addEventListener("click", cycle);
  }

  setupMobileMenu() {
    const btn = this.querySelector("#menu-toggle");
    const menu = this.querySelector("#mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      menu.setAttribute("aria-hidden", String(!isOpen));
      btn.textContent = isOpen ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        btn.textContent = "☰";
      });
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
