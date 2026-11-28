(function () {
  "use strict";

  // コピーライト年動的生成
  function initCopyrightYear() {
    const curYear = new Date().getFullYear();
    const yearEl = document.getElementById("copyright-year");
    if (yearEl) {
      yearEl.textContent = curYear > 2026 ? `2026-${curYear}` : "2026";
    }
  }

  // ヘッダースクロール監視 (スリム表示)
  function initSlimHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // モバイル用ハンバーガーメニュー開閉
  function initMobileNav() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const toggle = header.querySelector(".nav-toggle");
    const menu = header.querySelector(".nav-menu");
    if (!toggle || !menu) return;

    const setOpen = function (open) {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      setOpen(!header.classList.contains("menu-open"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("menu-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    const desktopMq = window.matchMedia("(min-width: 769px)");
    if (desktopMq.addEventListener) {
      desktopMq.addEventListener("change", function (event) {
        if (event.matches) setOpen(false);
      });
    }
  }

  // 初期化実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initCopyrightYear();
      initSlimHeader();
      initMobileNav();
    });
  } else {
    initCopyrightYear();
    initSlimHeader();
    initMobileNav();
  }
})();
