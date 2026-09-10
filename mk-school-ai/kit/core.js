/* =============================================================
   ZEROCODER KIT — core.js (v1, 2026-09-03)
   Behaviour layer shared by all Zerocoder landings.
   No dependencies. Every module bails out with `if (!el) return`,
   so unused modules cost nothing and removed blocks never throw.

   Modules (all opt-in through markup):
     1. reveal        — .rv elements fade in on scroll, staggered via --rvd
     2. anchorFix     — re-jumps to #hash after lazy images shift the page
     3. fluidZoom     — <html data-zoom="1920">: zoom above base width
     4. modal         — [data-widget="slug"] opens #reg-<slug> (.reg-modal),
                        GetCourse script mounts lazily, StartWidget<uid>
     5. countdown     — [data-countdown] in four modes (see below)
     6. places        — [data-places] time-based "seats left" counter
     7. carousel      — [data-carousel] with prev/next/dots
     8. lightbox      — [data-lightbox] scope: click an <img> to enlarge
     9. tabs          — [data-tabs]: buttons [data-pane] + panes [data-pane-id]
    10. marquee       — .marq__track[data-clone] duplicates its children
    11. copy          — [data-copy="TEXT"] copies to clipboard

   Sources: vibe-lab, big-summer-sale-2026, ai-audit, offline-intensiv,
   freelance-guarantee (Zerocoder landings, July–Sept 2026).
   Event date rule lives in head.html (must run before first paint).
   ============================================================= */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  root.classList.add('js');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var MSK = 3 * 60 * 60 * 1000; /* Moscow = UTC+3, no DST */

  var qsa = function (sel, scope) { return [].slice.call((scope || doc).querySelectorAll(sel)); };
  var pad2 = function (n) { return n < 10 ? '0' + n : '' + n; };

  /* `?now=2026-09-10T12:59` mocks the clock for every time-based module */
  var mockShift = 0;
  (function () {
    var q = location.search.match(/[?&]now=([^&]+)/);
    if (!q) return;
    var parsed = Date.parse(decodeURIComponent(q[1]).replace(' ', 'T'));
    if (!isNaN(parsed)) mockShift = parsed - Date.now();
  })();
  var now = function () { return Date.now() + mockShift; };

  /* fixed MSK wall-clock "YYYY-MM-DD[THH:MM]" -> timestamp */
  var mskToTs = function (str) {
    var m = String(str).match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/);
    if (!m) return NaN;
    return Date.UTC(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 0, m[5] ? +m[5] : 0) - MSK;
  };

  var revealSweep = null;

  /* ---------------- 1. Reveal on scroll ---------------- */
  function initReveal() {
    var items = qsa('.rv');
    if (!items.length) return;

    /* stagger: 0.08s per sibling inside one parent, capped at 0.45s */
    var seen = [];
    items.forEach(function (el) {
      var p = el.parentNode;
      var i = seen.indexOf(p);
      if (i === -1) { seen.push(p); i = seen.length - 1; }
      var sibs = [].slice.call(p.children).filter(function (c) {
        return c.classList && c.classList.contains('rv');
      });
      el.style.setProperty('--rvd', Math.min(sibs.indexOf(el) * 0.08, 0.45) + 's');
    });

    if (reduce || !hasIO) {
      items.forEach(function (el) { el.classList.add('is-now'); });
      revealSweep = function () {};
      return;
    }

    /* threshold 0: an element above the viewport never reaches an area
       ratio, so any positive threshold would leave it hidden forever */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });

    items.forEach(function (el) { io.observe(el); });

    var showNow = function (el) { el.classList.add('is-now'); io.unobserve(el); };

    /* safety net for anchor jumps and fast scrolling: show everything
       already passed, and (optionally) everything currently in frame */
    var sweep = function (withVisible) {
      var vh = window.innerHeight || root.clientHeight;
      items.forEach(function (el) {
        if (el.classList.contains('is-in') || el.classList.contains('is-now')) return;
        var r = el.getBoundingClientRect();
        if (r.bottom <= 0) { showNow(el); return; }
        if (withVisible && r.top < vh) showNow(el);
      });
    };
    revealSweep = sweep;

    requestAnimationFrame(function () { sweep(!!location.hash); });
    window.addEventListener('load', function () { sweep(!!location.hash); });
    window.addEventListener('hashchange', function () {
      requestAnimationFrame(function () { requestAnimationFrame(function () { sweep(true); }); });
    });
  }

  /* ---------------- 2. Anchor fix ----------------
     The browser jumps to #hash before lazy images and fonts load; the page
     then grows and the user lands in the wrong section. Re-jump after load. */
  function initAnchorFix() {
    if (!location.hash || location.hash.length < 2) return;
    var target;
    try { target = doc.querySelector(location.hash); } catch (e) { return; }
    if (!target) return;

    var cancelled = false;
    var stop = function () { cancelled = true; };
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) {
      window.addEventListener(ev, stop, { passive: true, once: true });
    });

    var jump = function () {
      if (cancelled) return;
      var padTop = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      var y = target.getBoundingClientRect().top + (window.pageYOffset || 0) - padTop;
      if (Math.abs(y - (window.pageYOffset || 0)) < 2) return;
      var prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, y);
      root.style.scrollBehavior = prev;
      if (revealSweep) revealSweep(true);
    };

    window.addEventListener('load', function () {
      jump();
      setTimeout(jump, 350);
      setTimeout(jump, 900);
    });
  }

  /* ---------------- 3. Fluid zoom above base width ----------------
     <html data-zoom="1920">. Below base the layout is fluid (clamp/%);
     above it the root is zoomed so the 1920 layout fills the window.
     zoom, NOT transform:scale — transform creates a containing block and
     kills position:sticky. Inside zoom the browser does not recompute
     vh/vw, so --vh/--vw tokens carry the px value of ONE unit. */
  function initFluidZoom() {
    var base = parseInt(root.getAttribute('data-zoom'), 10);
    if (!base) return;
    if (!window.CSS || !CSS.supports || !CSS.supports('zoom', '1')) return;

    var raf = 0;
    var apply = function () {
      raf = 0;
      var vw = root.clientWidth;
      if (!vw) return;
      var z = vw > base ? vw / base : 1;
      if (z === 1) {
        root.style.zoom = '';
        root.style.removeProperty('--vh');
        root.style.removeProperty('--vw');
        return;
      }
      root.style.zoom = z;
      root.style.setProperty('--vh', (window.innerHeight / z / 100) + 'px');
      root.style.setProperty('--vw', (vw / z / 100) + 'px');
    };
    apply();
    window.addEventListener('resize', function () {
      if (raf) return;
      raf = requestAnimationFrame(apply);
    });
  }

  /* ---------------- 4. Modal + GetCourse widget ----------------
     Markup: <button data-widget="free">  ->  <div class="reg-modal" id="reg-free"
               data-gc-uid="<hash>" data-gc-src="https://.../widget/script?id=...">
     The widget script is appended on FIRST open, to an already visible
     modal (GC measures width on mount; display:none gives a collapsed form).
     GC builds the form on DOMContentLoaded, which is long gone, so after
     load we dispatch StartWidget<uid> — GC's own re-init trigger.
     Modals without data-gc-src are plain content modals. */
  var modalApi = { open: null, close: null };
  function initModal() {
    var modals = qsa('.reg-modal');
    if (!modals.length) return;

    var lastFocus = null;

    var mount = function (m) {
      if (m.dataset.mounted) return;
      var body = m.querySelector('.reg-modal__body');
      var uid = m.dataset.gcUid;
      var src = m.dataset.gcSrc;
      if (!body || !uid || !src) return;
      m.dataset.mounted = '1';
      var s = doc.createElement('script');
      s.id = uid;
      s.src = src;
      s.onload = function () {
        try {
          doc.dispatchEvent(new Event('StartWidget' + uid));
        } catch (err) {
          var ev = doc.createEvent('Event');
          ev.initEvent('StartWidget' + uid, true, true);
          doc.dispatchEvent(ev);
        }
      };
      s.onerror = function () {
        m.dataset.mounted = '';
        body.innerHTML = '<p class="reg-modal__error">Форма не&nbsp;загрузилась. Обновите страницу или напишите на&nbsp;care@zerocoder.ru</p>';
      };
      body.appendChild(s);
    };

    var open = function (m, from) {
      if (typeof m === 'string') m = doc.getElementById('reg-' + m);
      if (!m) return;
      lastFocus = from || doc.activeElement;
      m.classList.add('is-open');
      m.setAttribute('aria-hidden', 'false');
      root.classList.add('is-locked');
      /* mount to a visible modal — next frame, after the class applied */
      requestAnimationFrame(function () { mount(m); });
      var x = m.querySelector('.reg-modal__close');
      if (x && x.focus) x.focus();
    };

    var close = function (m) {
      if (!m || !m.classList.contains('is-open')) return;
      m.classList.remove('is-open');
      m.setAttribute('aria-hidden', 'true');
      if (!qsa('.reg-modal.is-open').length) root.classList.remove('is-locked');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      lastFocus = null;
    };

    modalApi.open = open;
    modalApi.close = close;

    modals.forEach(function (m) { m.setAttribute('aria-hidden', 'true'); });

    doc.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-widget]') : null;
      if (btn) {
        var m = doc.getElementById('reg-' + btn.getAttribute('data-widget'));
        if (!m) return; /* slug without a modal: let the link behave normally */
        e.preventDefault();
        open(m, btn);
        return;
      }
      var host = e.target.closest ? e.target.closest('.reg-modal') : null;
      if (!host) return;
      if (e.target === host || e.target.closest('[data-modal-close]')) close(host);
    });

    doc.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' && e.key !== 'Esc') return;
      qsa('.reg-modal.is-open').forEach(close);
    });

    /* device rotation: GC iframe keeps its old width — reload it */
    var lastW = window.innerWidth;
    window.addEventListener('resize', function () {
      var w = window.innerWidth;
      if (Math.abs(w - lastW) < 60) return;
      lastW = w;
      qsa('.reg-modal.is-open iframe').forEach(function (f) {
        var src = f.getAttribute('src');
        if (src) f.setAttribute('src', src);
      });
    });
  }

  /* ---------------- 5. Countdown ----------------
     <div data-countdown="MODE"> with cells [data-t="d|h|m|s"] inside
     (missing cells are simply skipped) and optional [data-t="label"].
     Modes:
       "2026-09-10T13:00"   fixed deadline, Moscow wall-clock
       "event"              event date from <html data-event-date="YYYY-MM-DD"
                            data-event-time="HH:MM">; rolls with the date rule:
                            until the end of event day (MSK) — the event itself,
                            from next MSK midnight — the same time tomorrow
       "rolling:N"          00:00 MSK of (today + N days), never expires
       "minutes:N"          N minutes from page load, stops at zero
     data-countdown-done="hide" hides the element when finished
     (default: adds .is-done and shows zeros). */
  function initCountdown() {
    var boxes = qsa('[data-countdown]');
    if (!boxes.length) return;

    var eventDate = root.getAttribute('data-event-date');
    var eventTime = root.getAttribute('data-event-time') || '13:00';

    var targetFor = function (mode, t, loadedAt) {
      if (/^minutes:/.test(mode)) return loadedAt + parseFloat(mode.slice(8)) * 60000;
      if (/^rolling:/.test(mode)) {
        var msk = new Date(t + MSK);
        return Date.UTC(msk.getUTCFullYear(), msk.getUTCMonth(), msk.getUTCDate() + parseInt(mode.slice(8), 10)) - MSK;
      }
      if (mode === 'event') {
        if (!eventDate) return NaN;
        var ev = mskToTs(eventDate + 'T' + eventTime);
        var dayEnd = mskToTs(eventDate) + 86400000; /* next MSK midnight after event day */
        if (t < dayEnd) return ev;
        /* after event day: same time on "tomorrow" (MSK) */
        var m2 = new Date(t + MSK);
        var hm = eventTime.split(':');
        return Date.UTC(m2.getUTCFullYear(), m2.getUTCMonth(), m2.getUTCDate() + 1, +hm[0], +hm[1]) - MSK;
      }
      return mskToTs(mode);
    };

    boxes.forEach(function (box) {
      var mode = box.getAttribute('data-countdown');
      var loadedAt = now();
      var cells = {};
      ['d', 'h', 'm', 's'].forEach(function (k) { cells[k] = box.querySelector('[data-t="' + k + '"]'); });
      var hasCells = cells.d || cells.h || cells.m || cells.s;
      if (!hasCells) return;
      var onDone = box.getAttribute('data-countdown-done');
      var iv;

      var paint = function (secTotal) {
        var d = Math.floor(secTotal / 86400);
        var h = Math.floor(secTotal % 86400 / 3600);
        var m = Math.floor(secTotal % 3600 / 60);
        var s = secTotal % 60;
        if (!cells.d) h += d * 24; /* no days cell: fold days into hours */
        if (cells.d) cells.d.textContent = pad2(d);
        if (cells.h) cells.h.textContent = pad2(h);
        if (cells.m) cells.m.textContent = pad2(m);
        if (cells.s) cells.s.textContent = pad2(s);
      };

      var tick = function () {
        var t = now();
        var target = targetFor(mode, t, loadedAt);
        if (isNaN(target)) { clearInterval(iv); return; }
        var left = Math.max(0, Math.round((target - t) / 1000));
        paint(left);
        if (mode === 'event') {
          /* event day, after start: sits at zero ("we are live") until MSK midnight, then rolls */
          box.classList.toggle('is-done', left <= 0);
          return;
        }
        if (left <= 0 && !/^rolling:/.test(mode)) {
          box.classList.add('is-done');
          if (onDone === 'hide') box.hidden = true;
          clearInterval(iv);
        }
      };

      tick();
      iv = setInterval(tick, 1000);
    });
  }

  /* ---------------- 6. Places counter ----------------
     <span data-places data-start="2026-07-27T18:00" data-end="2026-07-29T23:59"
           data-count="10"> with .js-places-n (number) and
     [data-places-w="plain|free"] (russian plural word) anywhere on the page.
     Value falls linearly from data-count to 0 between start and end (MSK),
     1 is kept until the last second, 0 only after the end. */
  function initPlaces() {
    var cfg = doc.querySelector('[data-places]');
    if (!cfg) return;
    var nums = qsa('.js-places-n');
    var words = qsa('[data-places-w]');
    if (!nums.length) return;

    var START = mskToTs(cfg.getAttribute('data-start'));
    var END = mskToTs(cfg.getAttribute('data-end'));
    var COUNT = parseInt(cfg.getAttribute('data-count'), 10) || 10;
    if (isNaN(START) || isNaN(END)) return;

    var FORMS = {
      free: ['бесплатное место', 'бесплатных места', 'бесплатных мест'],
      plain: ['место', 'места', 'мест']
    };
    var plural = function (n, f) {
      var n10 = n % 10, n100 = n % 100;
      if (n10 === 1 && n100 !== 11) return f[0];
      if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return f[1];
      return f[2];
    };
    var calc = function () {
      var t = now();
      if (t <= START) return COUNT;
      if (t >= END) return 0;
      return Math.max(0, Math.min(COUNT, Math.ceil(COUNT * (END - t) / (END - START))));
    };

    var val = calc();
    var paint = function () {
      nums.forEach(function (el) { el.textContent = val; });
      words.forEach(function (el) {
        el.textContent = plural(val, FORMS[el.getAttribute('data-places-w')] || FORMS.plain);
      });
    };
    paint();
    setInterval(function () {
      var next = calc();
      if (next === val) return;
      val = next;
      nums.forEach(function (el) { el.classList.add('is-bump'); });
      setTimeout(function () {
        paint();
        nums.forEach(function (el) { el.classList.remove('is-bump'); });
      }, 110);
    }, 30000);
  }

  /* ---------------- 7. Carousel ----------------
     <div data-carousel> .car-slide* .car-prev .car-next [.car-dot*] */
  function initCarousels() {
    qsa('[data-carousel]').forEach(function (car) {
      var slides = qsa('.car-slide', car);
      if (slides.length < 2) return;
      var prev = car.querySelector('.car-prev');
      var next = car.querySelector('.car-next');
      var dots = qsa('.car-dot', car);
      var cur = 0;
      var show = function (n) {
        cur = (n + slides.length) % slides.length;
        slides.forEach(function (s, i) { s.classList.toggle('is-on', i === cur); });
        dots.forEach(function (d, i) {
          d.classList.toggle('is-on', i === cur);
          d.setAttribute('aria-current', i === cur ? 'true' : 'false');
        });
      };
      if (prev) prev.addEventListener('click', function () { show(cur - 1); });
      if (next) next.addEventListener('click', function () { show(cur + 1); });
      dots.forEach(function (d, i) { d.addEventListener('click', function () { show(i); }); });

      /* touch swipe */
      var x0 = null;
      car.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      car.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        x0 = null;
        if (Math.abs(dx) < 40) return;
        show(dx < 0 ? cur + 1 : cur - 1);
      }, { passive: true });

      show(0);
    });
  }

  /* ---------------- 8. Lightbox ----------------
     <div data-lightbox> — every <img> inside opens full-size. */
  function initLightbox() {
    var scopes = qsa('[data-lightbox]');
    if (!scopes.length) return;

    var lb = doc.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('aria-hidden', 'true');
    var lbImg = doc.createElement('img');
    lbImg.alt = '';
    lb.appendChild(lbImg);
    doc.body.appendChild(lb);

    var closeLb = function () {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      lbImg.removeAttribute('src');
    };
    scopes.forEach(function (scope) {
      scope.addEventListener('click', function (e) {
        var img = e.target.closest ? e.target.closest('img') : null;
        if (!img) return;
        lbImg.src = img.getAttribute('data-full') || img.currentSrc || img.src;
        lb.classList.add('is-open');
        lb.setAttribute('aria-hidden', 'false');
      });
    });
    lb.addEventListener('click', closeLb);
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' || e.key === 'Esc') closeLb(); });
  }

  /* ---------------- 9. Tabs ----------------
     <div data-tabs> <button data-pane="a"> ... <div data-pane-id="a"> */
  function initTabs() {
    qsa('[data-tabs]').forEach(function (scope) {
      var btns = qsa('[data-pane]', scope);
      var panes = qsa('[data-pane-id]', scope);
      if (!btns.length || !panes.length) return;

      var show = function (id) {
        btns.forEach(function (b) {
          var on = b.getAttribute('data-pane') === id;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-selected', on ? 'true' : 'false');
          b.setAttribute('tabindex', on ? '0' : '-1');
        });
        panes.forEach(function (p) {
          var on = p.getAttribute('data-pane-id') === id;
          p.classList.toggle('is-on', on);
          p.hidden = !on;
        });
      };

      btns.forEach(function (b) {
        b.setAttribute('role', 'tab');
        b.addEventListener('click', function () { show(b.getAttribute('data-pane')); });
        b.addEventListener('keydown', function (e) {
          var keys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'];
          if (keys.indexOf(e.key) === -1) return;
          e.preventDefault();
          var i = btns.indexOf(b);
          var n = e.key === 'Home' ? 0 : e.key === 'End' ? btns.length - 1
            : (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? i + 1 : i - 1;
          n = (n + btns.length) % btns.length;
          btns[n].focus();
          show(btns[n].getAttribute('data-pane'));
        });
      });

      var first = scope.querySelector('[data-pane].is-on') || btns[0];
      show(first.getAttribute('data-pane'));
    });
  }

  /* ---------------- 10. Marquee ---------------- */
  function initMarquee() {
    qsa('.marq__track[data-clone]').forEach(function (t) {
      var originals = [].slice.call(t.children);
      if (!originals.length) return;
      originals.forEach(function (node) {
        var c = node.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        t.appendChild(c);
      });
    });
  }

  /* ---------------- 11. Copy to clipboard ----------------
     <button data-copy="PROMO2026">: copies, adds .is-copied for 1.6s */
  function initCopy() {
    var btns = qsa('[data-copy]');
    if (!btns.length) return;
    var fallback = function (text) {
      var ta = doc.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      doc.body.appendChild(ta);
      ta.select();
      try { doc.execCommand('copy'); } catch (e) {}
      doc.body.removeChild(ta);
    };
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var text = b.getAttribute('data-copy');
        var done = function () {
          b.classList.add('is-copied');
          setTimeout(function () { b.classList.remove('is-copied'); }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
        } else { fallback(text); done(); }
      });
    });
  }

  /* ---------------- boot ---------------- */
  function init() {
    initFluidZoom();
    initReveal();
    initAnchorFix();
    initModal();
    initCountdown();
    initPlaces();
    initCarousels();
    initLightbox();
    initTabs();
    initMarquee();
    initCopy();
  }

  window.Kit = {
    openModal: function (slug, from) { if (modalApi.open) modalApi.open(slug, from); },
    closeAll: function () { qsa('.reg-modal.is-open').forEach(function (m) { modalApi.close && modalApi.close(m); }); },
    revealSweep: function () { if (revealSweep) revealSweep(true); },
    now: now
  };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
