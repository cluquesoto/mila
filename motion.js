(function () {
  'use strict';

  // --- Scroll-triggered reveals ---
  var revealEls = document.querySelectorAll('.reveal, .hero-reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // --- Page transitions ---
  var overlay = document.querySelector('.page-transition');
  if (!overlay) return;

  // On page load: play the "leaving" (wipe-out) animation to reveal content
  window.addEventListener('load', function () {
    overlay.classList.add('is-leaving');
    overlay.addEventListener('animationend', function handler() {
      overlay.classList.remove('is-leaving');
      overlay.removeEventListener('animationend', handler);
    });
  });

  // Intercept internal link clicks for transition
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    // Skip anchors, external links, and # links
    if (!href || href === '#' || href.startsWith('http') || href.startsWith('mailto:')) return;
    // Skip if modifier key held (open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    e.preventDefault();
    overlay.classList.add('is-entering');
    overlay.addEventListener('animationend', function handler() {
      overlay.classList.remove('is-entering');
      overlay.removeEventListener('animationend', handler);
      window.location.href = href;
    });
  });

  // --- Parallax on homepage hero clover ---
  var clover = document.querySelector('.hero__clover-img');
  var hero = document.querySelector('.hero');
  if (clover && hero) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var rect = hero.getBoundingClientRect();
          var visible = rect.bottom > 0 && rect.top < window.innerHeight;
          if (visible) {
            var progress = -rect.top / window.innerHeight;
            clover.style.transform = 'translateY(' + (progress * 30) + 'px) rotate(' + (progress * 40) + 'deg)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
