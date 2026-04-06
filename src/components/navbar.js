import { createIcons, Github, Mail, FileUser, Moon, Sun } from "lucide";

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
      </nav>
    `;

    this.renderIcons();
    this.setupThemeToggle();
  }

  renderIcons() {
    createIcons({ icons: { Github, Mail, FileUser, Moon, Sun } });
  }

  setupThemeToggle() {
    this.querySelector("#theme-toggle").addEventListener("click", () => {
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
  }
}

customElements.define("site-navbar", SiteNavbar);
