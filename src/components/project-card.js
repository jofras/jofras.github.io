class ProjectCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const tagline = this.getAttribute("tagline");
    const image = this.getAttribute("image");
    const link = this.getAttribute("link");

    this.innerHTML = `
      <a class="card" href="${link}">
        <img src="${image}" alt="${title}" />
        <div class="card-content">
          <div class="card-title">${title}</div>
          <div class="card-tagline">${tagline}</div>
        </div>
      </a>
    `;
  }
}

customElements.define("project-card", ProjectCard);
