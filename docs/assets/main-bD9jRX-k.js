(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const h=([e,n,o])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(n).forEach(t=>{r.setAttribute(t,String(n[t]))}),o?.length&&o.forEach(t=>{const s=h(t);r.appendChild(s)}),r},b=(e,n={})=>{const r={...m,...n};return h(["svg",r,e])};const v=e=>Array.from(e.attributes).reduce((n,o)=>(n[o.name]=o.value,n),{}),w=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",y=e=>e.flatMap(w).map(o=>o.trim()).filter(Boolean).filter((o,r,t)=>t.indexOf(o)===r).join(" "),E=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(n,o,r)=>o.toUpperCase()+r.toLowerCase()),u=(e,{nameAttr:n,icons:o,attrs:r})=>{const t=e.getAttribute(n);if(t==null)return;const s=E(t),c=o[s];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const a=v(e),l={...m,"data-lucide":t,...r,...a},d=y(["lucide",`lucide-${t}`,a,r]);d&&Object.assign(l,{class:d});const g=b(c,l);return e.parentNode?.replaceChild(g,e)};const A=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M16 22a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"15",r:"3"}]];const M=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];const k=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];const L=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];const $=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const p=({icons:e={},nameAttr:n="data-lucide",attrs:o={},root:r=document,inTemplates:t}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${n}]`)).forEach(c=>u(c,{nameAttr:n,icons:e,attrs:o})),t&&Array.from(r.querySelectorAll("template")).forEach(a=>p({icons:e,nameAttr:n,attrs:o,root:a.content,inTemplates:t})),n==="data-lucide"){const c=r.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(a=>u(a,{nameAttr:"icon-name",icons:e,attrs:o})))}};class C extends HTMLElement{connectedCallback(){const n=document.documentElement.dataset.theme==="dark",o=window.location.pathname,r=s=>s==="/"?o==="/"||o==="/index.html":o===s||o.startsWith(s.replace(".html","")),t=(s,c)=>`<a href="${s}" class="${r(s)?"active":""}">${c}</a>`;this.innerHTML=`
      <nav class="navbar">
        <a class="nav-logo" href="/">Jonathan Quinn</a>
        <div class="nav-links">
          ${t("/projects.html","Projects")}
          ${t("/timeline.html","Timeline")}
          ${t("/blog.html","Writing")}
          ${t("/about.html","About")}
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
            <i data-lucide="${n?"sun":"moon"}"></i>
          </button>
        </div>
      </nav>
    `,this.renderIcons(),this.setupThemeToggle()}renderIcons(){p({icons:{Github:M,Mail:k,FileUser:A,Moon:L,Sun:$}})}setupThemeToggle(){this.querySelector("#theme-toggle").addEventListener("click",()=>{const n=document.documentElement;n.dataset.theme==="dark"?(delete n.dataset.theme,localStorage.removeItem("theme")):(n.dataset.theme="dark",localStorage.setItem("theme","dark")),this.connectedCallback()})}}customElements.define("site-navbar",C);class N extends HTMLElement{connectedCallback(){const n=this.getAttribute("title"),o=this.getAttribute("tagline"),r=this.getAttribute("image"),t=this.getAttribute("link");this.innerHTML=`
      <a class="card" href="${t}">
        <img src="${r}" alt="${n}" />
        <div class="card-content">
          <div class="card-title">${n}</div>
          <div class="card-tagline">${o}</div>
        </div>
      </a>
    `}}customElements.define("project-card",N);const i=document.createElement("div");i.className="scroll-progress";document.body.prepend(i);window.addEventListener("scroll",()=>{const e=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight,o=n>0?e/n*100:0;i.style.setProperty("--progress",o+"%")},{passive:!0});const f=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),f.unobserve(n.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(e=>f.observe(e));
