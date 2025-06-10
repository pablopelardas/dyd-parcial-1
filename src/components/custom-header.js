class CustomHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = location.pathname.split("/").pop() || "index.html";

    this.innerHTML = `
      <nav class="bg-dyd-900 dark:bg-dark-header-bg">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button id="openMenuButton" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Abrir menú</span>
                <svg id="menuClosedIcon" class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
                <svg id="menuOpenedIcon" class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:gap-4 sm:justify-between">
              <div class="flex shrink-0 items-center">
                <img class="h-32 w-auto" src="img/logo.png" alt="DyD">
                <h2 class="text-white text-2xl hidden lg:block font-inter">Diseño y Desarrollo Web</h2>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 font-inter">
                  ${this.createNavLink("index.html", "Home", currentPage)}
                  ${this.createNavLink(
                    "materias.html",
                    "Materias",
                    currentPage
                  )}
                  ${this.createNavLink("avisos.html", "Avisos", currentPage)}
                  ${this.createNavLink(
                    "sobre-mi.html",
                    "Sobre mi",
                    currentPage
                  )}
                  ${this.createNavLink(
                    "contacto.html",
                    "Contacto",
                    currentPage
                  )}
                  <button
                      id="themeToggleBtn"
                      class="relative group text-gray-300 hover:text-white p-2 cursor-pointer transition-colors"
                      aria-label="Cambiar tema"
                    >
                      <svg
                        id="themeIcon"
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path id="iconPath" stroke-linecap="round" stroke-linejoin="round" d="" />
                      </svg>

                      <div class="absolute top-1/2 left-10 -translate-y-1/2 px-2 py-1 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        <span id="themeTooltip">Cambiar a tema oscuro</span>
                      </div>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3 font-inter">
            ${this.createNavLink("index.html", "Home", currentPage, true)}
            ${this.createNavLink(
              "materias.html",
              "Materias",
              currentPage,
              true
            )}
            ${this.createNavLink("avisos.html", "Avisos", currentPage, true)}
            ${this.createNavLink(
              "sobre-mi.html",
              "Sobre mi",
              currentPage,
              true
            )}
            ${this.createNavLink(
              "contacto.html",
              "Contacto",
              currentPage,
              true
            )}
             <button
                id="themeToggleBtnMobile"
                class="relative group text-gray-300 hover:text-white p-2 cursor-pointer transition-colors"
                aria-label="Cambiar tema"
              >
                <svg
                  id="themeIconMobile"
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path id="iconPathMobile" stroke-linecap="round" stroke-linejoin="round" d="" />
                </svg>

                <div class="absolute top-1/2 left-10 -translate-y-1/2 px-2 py-1 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <span id="themeTooltipMobile">Cambiar a tema oscuro</span>
                </div>
              </button>
          </div>
        </div>
      </nav>
    `;

    this.setupMenuToggle();
    this.setupThemeSwitcher();
    this.applyInitialTheme();
  }

  createNavLink(href, text, currentPage, isMobile = false) {
    const isActive = href === currentPage;
    const base = isMobile
      ? "block rounded-md px-3 py-2 text-base font-medium"
      : "rounded-md px-3 py-2 text-sm font-medium";
    return `
      <a href="./${href}" class="${base} ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }">${text}</a>
    `;
  }

  setupMenuToggle() {
    const openMenuButton = this.querySelector("#openMenuButton");
    const mobileMenu = this.querySelector("#mobile-menu");
    const menuClosedIcon = this.querySelector("#menuClosedIcon");
    const menuOpenedIcon = this.querySelector("#menuOpenedIcon");

    if (!openMenuButton) return;

    let isMenuOpen = false;
    openMenuButton.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle("hidden", !isMenuOpen);
      menuClosedIcon.classList.toggle("hidden", isMenuOpen);
      menuOpenedIcon.classList.toggle("hidden", !isMenuOpen);
      openMenuButton.setAttribute("aria-expanded", isMenuOpen.toString());
    });
  }

setupThemeSwitcher() {
  const setups = [
    {
      toggleBtn: this.querySelector("#themeToggleBtn"),
      iconPath: this.querySelector("#iconPath"),
      tooltip: this.querySelector("#themeTooltip"),
    },
    {
      toggleBtn: this.querySelector("#themeToggleBtnMobile"),
      iconPath: this.querySelector("#iconPathMobile"),
      tooltip: this.querySelector("#themeTooltipMobile"),
    },
  ];

  const setThemeVisuals = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("themePreference", theme);

    setups.forEach(({ iconPath, tooltip }) => {
      if (!iconPath || !tooltip) return;
      iconPath.setAttribute(
        "d",
        isDark
          ? "M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71m0 14.14l.71-.71M19.95 19.95l.71-.71M21 12h1M2 12H1m11-5a5 5 0 000 10 5 5 0 000-10z"
          : "M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      );
      tooltip.textContent = isDark
        ? "Cambiar a tema claro"
        : "Cambiar a tema oscuro";
    });
  };

  setups.forEach(({ toggleBtn }) => {
    if (!toggleBtn) return;
    toggleBtn.addEventListener("click", () => {
      const current = localStorage.getItem("themePreference") || "light";
      const newTheme = current === "dark" ? "light" : "dark";
      setThemeVisuals(newTheme);
    });
  });

  const initialTheme = localStorage.getItem("themePreference") || "light";
  setThemeVisuals(initialTheme);
}

  applyInitialTheme() {
    const theme = localStorage.getItem("themePreference") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
}

customElements.define("custom-header", CustomHeader);
