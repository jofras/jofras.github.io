(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const m=([e,a,o])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(t=>{r.setAttribute(t,String(a[t]))}),o?.length&&o.forEach(t=>{const n=m(t);r.appendChild(n)}),r},p=(e,a={})=>{const r={...u,...a};return m(["svg",r,e])};const g=e=>Array.from(e.attributes).reduce((a,o)=>(a[o.name]=o.value,a),{}),b=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",v=e=>e.flatMap(b).map(o=>o.trim()).filter(Boolean).filter((o,r,t)=>t.indexOf(o)===r).join(" "),y=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,o,r)=>o.toUpperCase()+r.toLowerCase()),d=(e,{nameAttr:a,icons:o,attrs:r})=>{const t=e.getAttribute(a);if(t==null)return;const n=y(t),c=o[n];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=g(e),i={...u,"data-lucide":t,...r,...s},l=v(["lucide",`lucide-${t}`,s,r]);l&&Object.assign(i,{class:l});const f=p(c,i);return e.parentNode?.replaceChild(f,e)};const w=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M16 22a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"15",r:"3"}]];const A=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];const E=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];const M=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];const k=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const h=({icons:e={},nameAttr:a="data-lucide",attrs:o={},root:r=document,inTemplates:t}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${a}]`)).forEach(c=>d(c,{nameAttr:a,icons:e,attrs:o})),t&&Array.from(r.querySelectorAll("template")).forEach(s=>h({icons:e,nameAttr:a,attrs:o,root:s.content,inTemplates:t})),a==="data-lucide"){const c=r.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(s=>d(s,{nameAttr:"icon-name",icons:e,attrs:o})))}};class C extends HTMLElement{connectedCallback(){const a=document.documentElement.dataset.theme==="dark";this.innerHTML=`
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
            <i data-lucide="${a?"sun":"moon"}"></i>
          </button>
        </div>
      </nav>
    `,this.renderIcons(),this.setupThemeToggle()}renderIcons(){h({icons:{Github:A,Mail:E,FileUser:w,Moon:M,Sun:k}})}setupThemeToggle(){this.querySelector("#theme-toggle").addEventListener("click",()=>{const a=document.documentElement;a.dataset.theme==="dark"?(delete a.dataset.theme,localStorage.removeItem("theme")):(a.dataset.theme="dark",localStorage.setItem("theme","dark")),this.connectedCallback()})}}customElements.define("site-navbar",C);class L extends HTMLElement{connectedCallback(){const a=this.getAttribute("title"),o=this.getAttribute("tagline"),r=this.getAttribute("image"),t=this.getAttribute("link");this.innerHTML=`
      <a class="card" href="${t}">
        <img src="${r}" alt="${a}" />
        <div class="card-content">
          <div class="card-title">${a}</div>
          <div class="card-tagline">${o}</div>
        </div>
      </a>
    `}}customElements.define("project-card",L);
