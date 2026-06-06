(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=["light","dark","pink"];function a(){const r=localStorage.getItem("theme");return r&&l.includes(r)?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function c(r){r==="light"?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r))}class m extends HTMLElement{connectedCallback(){const n=window.location.pathname,o=a(),i=t=>t==="/"?n==="/"||n==="/index.html":n===t||n.startsWith(t.replace(".html","")),e=(t,s)=>`<a href="${t}" class="${i(t)?"active":""}">${s}</a>`;this.innerHTML=`
      <nav class="navbar">
        <a class="nav-logo" href="/">JQ</a>

        <div class="nav-links">
          ${e("/projects.html","projects")}
          ${e("/timeline.html","timeline")}
          ${e("/blog.html","writing")}
          ${e("/about.html","about")}
        </div>

        <div class="nav-right">
          <a href="https://github.com/jofras" target="_blank" rel="noopener">gh</a>
          <a href="mailto:jonfquinn@proton.me">mail</a>
          <a href="/cv_jq_current.pdf">cv</a>
          <button class="theme-toggle" id="theme-toggle">[${o}]</button>
        </div>

        <div class="nav-mobile-controls">
          <button class="theme-toggle" id="theme-toggle-mobile">[${o}]</button>
          <button class="nav-hamburger" id="menu-toggle">☰</button>
        </div>
      </nav>

      <div class="nav-mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-links">
          ${e("/projects.html","projects")}
          ${e("/timeline.html","timeline")}
          ${e("/blog.html","writing")}
          ${e("/about.html","about")}
        </div>
        <div class="mobile-menu-extras">
          <a href="https://github.com/jofras" target="_blank" rel="noopener">gh</a>
          <a href="mailto:jonfquinn@proton.me">mail</a>
          <a href="/cv_jq_current.pdf">cv</a>
        </div>
      </div>
    `,this.setupThemeToggle(),this.setupMobileMenu()}setupThemeToggle(){const n=()=>{const o=a(),i=l[(l.indexOf(o)+1)%l.length];c(i),this.connectedCallback()};this.querySelector("#theme-toggle")?.addEventListener("click",n),this.querySelector("#theme-toggle-mobile")?.addEventListener("click",n)}setupMobileMenu(){const n=this.querySelector("#menu-toggle"),o=this.querySelector("#mobile-menu");!n||!o||(n.addEventListener("click",()=>{const i=o.classList.toggle("open");o.setAttribute("aria-hidden",String(!i)),n.textContent=i?"✕":"☰"}),o.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{o.classList.remove("open"),o.setAttribute("aria-hidden","true"),n.textContent="☰"})}))}}customElements.define("site-navbar",m);
