// ---------------------------------------------------------------
// Niladri Shekhar Dutt — site interactions
// ---------------------------------------------------------------
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll: nav + sun arc (day → sunset) + layer parallax ----
  var nav = document.querySelector(".nav");
  var sun = document.querySelector(".bg-sun-group");
  var gridLayer = document.querySelector(".bg-grid-layer");
  var farMountain = document.querySelector(".bg-mtn-far");
  var midMountain = document.querySelector(".bg-mtn-mid");
  var nearMountain = document.querySelector(".bg-mtn-near");
  var ticking = false;
  var applyScroll = function () {
    var y = window.scrollY || 0;
    if (nav) nav.classList.toggle("scrolled", y > 8);
    if (!reduceMotion) {
      var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      var p = Math.min(1, Math.max(0, y / max));
      var compactScene = window.innerWidth <= 720;
      // sun follows an arc (quadratic Bézier): high-left → over → sets into the ridge
      if (sun) {
        // Mobile uses a tighter, faster arc so the sun begins inside the cropped scene.
        var sunProgress = compactScene ? Math.min(1, p * 1.5) : p;
        var q = 1 - sunProgress;
        // control points (SVG coords); sun circle is authored at (330,132)
        var startX = compactScene ? 430 : 250;
        var controlX = compactScene ? 760 : 880;
        var endX = compactScene ? 1050 : 1210;
        var startY = compactScene ? 126 : 88;
        var controlY = compactScene ? 54 : 18;
        var endY = compactScene ? 350 : 384;
        var sx = q * q * startX + 2 * q * sunProgress * controlX + sunProgress * sunProgress * endX;
        var sy = q * q * startY + 2 * q * sunProgress * controlY + sunProgress * sunProgress * endY;
        sun.style.transform = "translate(" + (sx - 330) + "px," + (sy - 132) + "px)";
      }
      if (gridLayer) {
        gridLayer.style.transform = "translateY(" + (-y * (compactScene ? 0.012 : 0.022)) + "px) scale(" + (1 + p * (compactScene ? 0.006 : 0.012)) + ")";
      }
      if (farMountain) {
        farMountain.style.transform = "translateY(" + (-p * (compactScene ? 4 : 6)) + "px) scale(" + (1 + p * (compactScene ? 0.002 : 0.004)) + ")";
      }
      if (midMountain) {
        midMountain.style.transform = "translateY(" + (-p * (compactScene ? 10 : 15)) + "px) scale(" + (1 + p * (compactScene ? 0.006 : 0.011)) + ")";
      }
      if (nearMountain) {
        nearMountain.style.transform = "translateY(" + (-p * (compactScene ? 18 : 29)) + "px) scale(" + (1 + p * (compactScene ? 0.012 : 0.022)) + ")";
      }
    }
    ticking = false;
  };
  var onScroll = function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(applyScroll); }
  };
  applyScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Reveal elements on scroll ----
  var reveal = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveal.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(function (el) { io.observe(el); });
  }

  // ---- Harden external links (security: noopener/noreferrer) ----
  var host = window.location.hostname;
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (/^https?:\/\//i.test(href)) {
      try {
        var u = new URL(href);
        if (u.hostname !== host) {
          a.setAttribute("target", "_blank");
          a.setAttribute("rel", "noopener noreferrer");
        }
      } catch (e) { /* ignore malformed */ }
    }
  });

  // ---- Assemble obfuscated email (kept out of raw HTML) ----
  document.querySelectorAll("[data-user][data-domain]").forEach(function (el) {
    var user = el.getAttribute("data-user");
    var domain = el.getAttribute("data-domain");
    if (user && domain) el.setAttribute("href", "mailto:" + user + "@" + domain);
  });

  // ---- Footer year ----
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
