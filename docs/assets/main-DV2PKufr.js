(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const g=([n,t,o])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.keys(t).forEach(e=>{i.setAttribute(e,String(t[e]))}),o?.length&&o.forEach(e=>{const a=g(e);i.appendChild(a)}),i},w=(n,t={})=>{const i={...b,...t};return g(["svg",i,n])};const y=n=>Array.from(n.attributes).reduce((t,o)=>(t[o.name]=o.value,t),{}),E=n=>typeof n=="string"?n:!n||!n.class?"":n.class&&typeof n.class=="string"?n.class.split(" "):n.class&&Array.isArray(n.class)?n.class:"",M=n=>n.flatMap(E).map(o=>o.trim()).filter(Boolean).filter((o,i,e)=>e.indexOf(o)===i).join(" "),A=n=>n.replace(/(\w)(\w*)(_|-|\s*)/g,(t,o,i)=>o.toUpperCase()+i.toLowerCase()),h=(n,{nameAttr:t,icons:o,attrs:i})=>{const e=n.getAttribute(t);if(e==null)return;const a=A(e),r=o[a];if(!r)return console.warn(`${n.outerHTML} icon name was not found in the provided icons object.`);const s=y(n),u={...b,"data-lucide":e,...i,...s},m=M(["lucide",`lucide-${e}`,s,i]);m&&Object.assign(u,{class:m});const v=w(r,u);return n.parentNode?.replaceChild(v,n)};const k=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M16 22a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"15",r:"3"}]];const L=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];const $=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];const l=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];const j=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];const S=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const p=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const c=({icons:n={},nameAttr:t="data-lucide",attrs:o={},root:i=document,inTemplates:e}={})=>{if(!Object.values(n).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof i>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(i.querySelectorAll(`[${t}]`)).forEach(r=>h(r,{nameAttr:t,icons:n,attrs:o})),e&&Array.from(i.querySelectorAll("template")).forEach(s=>c({icons:n,nameAttr:t,attrs:o,root:s.content,inTemplates:e})),t==="data-lucide"){const r=i.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>h(s,{nameAttr:"icon-name",icons:n,attrs:o})))}};class T extends HTMLElement{connectedCallback(){const t=document.documentElement.dataset.theme==="dark",o=window.location.pathname,i=a=>a==="/"?o==="/"||o==="/index.html":o===a||o.startsWith(a.replace(".html","")),e=(a,r)=>`<a href="${a}" class="${i(a)?"active":""}">${r}</a>`;this.innerHTML=`
      <nav class="navbar">
        <a class="nav-logo" href="/">Jonathan Quinn</a>

        <div class="nav-links">
          ${e("/projects.html","Projects")}
          ${e("/timeline.html","Timeline")}
          ${e("/blog.html","Writing")}
          ${e("/about.html","About")}
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
            <i data-lucide="${t?"sun":"moon"}"></i>
          </button>
        </div>

        <!-- Mobile: theme + hamburger always visible -->
        <div class="nav-mobile-controls">
          <button class="icon-btn" id="theme-toggle-mobile" aria-label="Toggle theme">
            <i data-lucide="${t?"sun":"moon"}"></i>
          </button>
          <button class="icon-btn nav-hamburger" id="menu-toggle" aria-label="Toggle menu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </nav>

      <div class="nav-mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-links">
          ${e("/projects.html","Projects")}
          ${e("/timeline.html","Timeline")}
          ${e("/blog.html","Writing")}
          ${e("/about.html","About")}
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
    `,this.renderIcons(),this.setupThemeToggle(),this.setupMobileMenu()}renderIcons(){c({icons:{Github:L,Mail:$,FileUser:k,Moon:j,Sun:S,Menu:l,X:p}})}setupThemeToggle(){const t=o=>{this.querySelector(o)?.addEventListener("click",()=>{const i=document.documentElement;i.dataset.theme==="dark"?(delete i.dataset.theme,localStorage.removeItem("theme")):(i.dataset.theme="dark",localStorage.setItem("theme","dark")),this.connectedCallback()})};t("#theme-toggle"),t("#theme-toggle-mobile")}setupMobileMenu(){const t=this.querySelector("#menu-toggle"),o=this.querySelector("#mobile-menu");!t||!o||(t.addEventListener("click",()=>{const i=o.classList.toggle("open");o.setAttribute("aria-hidden",String(!i)),t.innerHTML=`<i data-lucide="${i?"x":"menu"}"></i>`,c({icons:{Menu:l,X:p}})}),o.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{o.classList.remove("open"),o.setAttribute("aria-hidden","true"),t.innerHTML='<i data-lucide="menu"></i>',c({icons:{Menu:l}})})}))}}customElements.define("site-navbar",T);class C extends HTMLElement{connectedCallback(){const t=this.getAttribute("title"),o=this.getAttribute("tagline"),i=this.getAttribute("image"),e=this.getAttribute("link");this.innerHTML=`
      <a class="card" href="${e}">
        <img src="${i}" alt="${t}" />
        <div class="card-content">
          <div class="card-title">${t}</div>
          <div class="card-tagline">${o}</div>
        </div>
      </a>
    `}}customElements.define("project-card",C);const d=document.createElement("div");d.className="scroll-progress";document.body.prepend(d);window.addEventListener("scroll",()=>{const n=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,o=t>0?n/t*100:0;d.style.setProperty("--progress",o+"%")},{passive:!0});const f=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),f.unobserve(t.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(n=>f.observe(n));
