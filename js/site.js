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

  // 初期化実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initCopyrightYear();
      initSlimHeader();
    });
  } else {
    initCopyrightYear();
    initSlimHeader();
  }
})();
