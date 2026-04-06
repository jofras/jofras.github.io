import { createIcons, Github, Mail, FileUser, Moon, Sun, Menu, X } from "lucide";

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const isDark = document.documentElement.dataset.theme === "dark";
    const path = window.location.pathname;

    const isActive = (href) => {
      if (href === "/") return path === "/" || path === "/index.html";
      return path === href || path.startsWith(href.replace(".html", ""));
    };

    const link = (href, label) =>
      `<a href="${href}" class="${isActive(href) ? "active" : ""}">${label}</a>`;

    this.innerHTML = `
      <nav class="navbar">
        <a class="nav-logo" href="/">Jonathan Quinn</a>

        <div class="nav-links">
          ${link("/projects.html", "Projects")}
          ${link("/timeline.html", "Timeline")}
          ${link("/blog.html", "Writing")}
          ${link("/about.html", "About")}
        </div>

        <div class="nav-icons">
          <a class="icon-btn" href="https://github.com/jofras" target="_blank" rel="noopener" aria-label="GitHub">
            <i data-lucide="github"></i>
          </a>
          <a class="icon-btn" href="mailto:jonfquinn@proton.me" aria-label="Email">
            <i data-lucide="mail"></i>
          </a>
          <a class="icon-btn" href="/cv_jq_current.pdf" aria-label="Download CV">
            <i data-lucide="file-user"></i>
          </a>
          <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
            <i data-lucide="${isDark ? "sun" : "moon"}"></i>
          </button>
        </div>

        <!-- Mobile: theme + hamburger always visible -->
        <div class="nav-mobile-controls">
          <button class="icon-btn" id="theme-toggle-mobile" aria-label="Toggle theme">
            <i data-lucide="${isDark ? "sun" : "moon"}"></i>
          </button>
          <button class="icon-btn nav-hamburger" id="menu-toggle" aria-label="Toggle menu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </nav>

      <div class="nav-mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-links">
          ${link("/projects.html", "Projects")}
          ${link("/timeline.html", "Timeline")}
          ${link("/blog.html", "Writing")}
          ${link("/about.html", "About")}
        </div>
        <div class="mobile-menu-icons">
          <a class="icon-btn" href="https://github.com/jofras" target="_blank" rel="noopener" aria-label="GitHub">
            <i data-lucide="github"></i>
          </a>
          <a class="icon-btn" href="mailto:jonfquinn@proton.me" aria-label="Email">
            <i data-lucide="mail"></i>
          </a>
          <a class="icon-btn" href="/cv_jq_current.pdf" aria-label="Download CV">
            <i data-lucide="file-user"></i>
          </a>
        </div>
      </div>
    `;

    this.renderIcons();
    this.setupThemeToggle();
    this.setupMobileMenu();
  }

  renderIcons() {
    createIcons({ icons: { Github, Mail, FileUser, Moon, Sun, Menu, X } });
  }

  setupThemeToggle() {
    const toggle = (id) => {
      this.querySelector(id)?.addEventListener("click", () => {
        const root = document.documentElement;
        const isDark = root.dataset.theme === "dark";
        if (isDark) {
          delete root.dataset.theme;
          localStorage.removeItem("theme");
        } else {
          root.dataset.theme = "dark";
          localStorage.setItem("theme", "dark");
        }
        this.connectedCallback();
      });
    };
    toggle("#theme-toggle");
    toggle("#theme-toggle-mobile");
  }

  setupMobileMenu() {
    const btn = this.querySelector("#menu-toggle");
    const menu = this.querySelector("#mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      menu.setAttribute("aria-hidden", String(!isOpen));
      // Swap hamburger ↔ X icon
      btn.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
      createIcons({ icons: { Menu, X } });
    });

    // Close menu on nav link click
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        btn.innerHTML = `<i data-lucide="menu"></i>`;
        createIcons({ icons: { Menu } });
      });
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
