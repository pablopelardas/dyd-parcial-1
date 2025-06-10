class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-dyd-900 text-white py-4 dark:bg-dark-header-bg dark:text-dark-text">
        <div class="container mx-auto text-center">
          <p>&copy; 2025 Diseño y Desarrollo Web - Pablo Pelardas.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);