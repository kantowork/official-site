/*!
 * Switch theme
 *
 * KANTO WORK LLC
 * Adapted for Pico CSS theme toggling
 */

(function () {
  "use strict";

  const BUTTON_TARGET = "#theme-toggle";
  const ROOT_ATTRIBUTE = "data-theme";
  const LOCAL_STORAGE_KEY = "kantoWorkColorScheme";

  const switchTheme = {
    // Config: Dark theme by default
    _scheme: "dark",

    // Initialize theme immediately in <head> to prevent FOUC
    initTheme() {
      this.scheme = this.schemeFromLocalStorage;
    },

    // Initialize toggle button and attach click event listener after DOM is ready
    initButton() {
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
      try {
        return window.localStorage?.getItem(LOCAL_STORAGE_KEY) ?? this._scheme;
      } catch {
        return this._scheme;
      }
    },

    // Preferred color scheme
    get preferredColorScheme() {
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    },

    // Update button icon and accessible title
    updateButton(button) {
      if (!button) return;
      const isDark = this.scheme === "dark";
      button.textContent = isDark ? "☀️" : "🌙";
      button.setAttribute("aria-label", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
      button.setAttribute("title", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
    },

    // Set and apply scheme
    set scheme(scheme) {
      if (scheme === "auto") {
        this._scheme = this.preferredColorScheme;
      } else if (scheme === "dark" || scheme === "light") {
        this._scheme = scheme;
      }
      this.applyScheme();
      this.schemeToLocalStorage();
    },

    get scheme() {
      return this._scheme;
    },

    // Apply scheme to <html> element
    applyScheme() {
      document.documentElement.setAttribute(ROOT_ATTRIBUTE, this.scheme);
    },

    // Store scheme to local storage
    schemeToLocalStorage() {
      try {
        window.localStorage?.setItem(LOCAL_STORAGE_KEY, this.scheme);
      } catch {
        // Ignore if storage access is restricted (e.g., private browsing)
      }
    },
  };

  // 1. Apply theme immediately in <head> to prevent flash of unstyled content (FOUC)
  switchTheme.initTheme();

  // 2. Initialize toggle button once DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    switchTheme.initButton();
  });
})();
