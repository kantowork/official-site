/*!
 * Switch theme
 *
 * KANTO WORK LLC
 * Adapted for Pico CSS theme toggling
 */

const BUTTON_TARGET = "#theme-toggle";
const ROOT_ATTRIBUTE = "data-theme";
const LOCAL_STORAGE_KEY = "kantoWorkColorScheme";

const switchTheme = {
  // Config
  _scheme: "dark",

  // Init
  init() {
    this.scheme = this.schemeFromLocalStorage;
    const button = document.querySelector(BUTTON_TARGET);
    if (!button) return;

    this.updateButton(button);

    button.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        const currentScheme = this.scheme;
        this.scheme = currentScheme === "dark" ? "light" : "dark";
        this.updateButton(button);
      },
      false
    );
  },

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    return window.localStorage?.getItem(LOCAL_STORAGE_KEY) ?? this._scheme;
  },

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },

  // Update button icon and accessible title
  updateButton(button) {
    if (!button) return;
    const isDark = this.scheme === "dark";
    button.textContent = isDark ? "☀️" : "🌙";
    button.setAttribute("aria-label", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
    button.setAttribute("title", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
  },

  // Set scheme
  set scheme(scheme) {
    if (scheme === "auto") {
      this._scheme = this.preferredColorScheme;
    } else if (scheme === "dark" || scheme === "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  },

  // Get scheme
  get scheme() {
    return this._scheme;
  },

  // Apply scheme
  applyScheme() {
    document.querySelector("html")?.setAttribute(ROOT_ATTRIBUTE, this.scheme);
  },

  // Store scheme to local storage
  schemeToLocalStorage() {
    window.localStorage?.setItem(LOCAL_STORAGE_KEY, this.scheme);
  },
};

// Init
switchTheme.init();
