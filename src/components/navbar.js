import { createIcons, Github, Mail, FileUser, Moon, Sun } from "lucide";

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const isDark = document.documentElement.dataset.theme === "dark";

    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-left">
          <a href="/">Jonathan Quinn</a>
        </div>
        <div class="nav-right">
          <a href="/projects.html">Projects</a>
          <a href="/about.html">About</a>
          <a href="https://github.com/yourname" aria-label="GitHub">
            <i data-lucide="github"></i>
          </a>
          <a href="mailto:you@email.com" aria-label="Email">
            <i data-lucide="mail"></i>
          </a>
          <a href="/public/cv.pdf" aria-label="Download CV">
            <i data-lucide="file-user"></i>
          </a>
          <button class="icon-button" id="theme-toggle" aria-label="Toggle theme">
            <i data-lucide="${isDark ? "sun" : "moon"}"></i>
          </button>
        </div>
      </nav>
    `;

    this.renderIcons();
    this.setupThemeToggle();
  }

  renderIcons() {
    createIcons({
      icons: { Github, Mail, FileUser, Moon, Sun }
    });
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

      // Re-render navbar to guarantee icon sync
      this.connectedCallback();
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
