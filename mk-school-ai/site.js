/* =============================================================
   mk-school-ai — site.js
   Inline GetCourse widgets (hero card + section 07). kit/core.js
   only mounts widgets inside .reg-modal, so the page mounts its own.

   How the GC lite script works (checked 2026-09-10): it defines a
   global startWidget<uid>() that finds <script id="<uid>">, puts an
   iframe (0px tall) before it and removes the script. The iframe gets
   its real height only when the widget page posts a message.
   So: add the script, call startWidget<uid>() once on load, show a
   skeleton until the iframe has height. No error text on slow loads —
   a failed request is retried silently.
   ============================================================= */
(function () {
  'use strict';
  var doc = document;
  var MAX_TRIES = 3;

  var hosts = [].slice.call(doc.querySelectorAll('[data-gc-inline]'));
  if (!hosts.length) return;

  var SLOW_MS = 8000;   /* no height by then: reload the iframe */
  var RETRY_MS = 6000;  /* wait after each reload */
  var RELOADS = 2;      /* then give up and show the fallback button */

  /* the standalone GC form page: same widget id, /widget instead of /script.
     Page utm params are passed on so the lead keeps its source. */
  var formUrl = function (host) {
    var url = (host.getAttribute('data-gc-src') || '').replace('/widget/script?', '/widget/widget?');
    var q = location.search.replace(/^\?/, '');
    return q ? url + '&' + q : url;
  };

  var showFallback = function (host) {
    host.classList.remove('is-loading');
    host.classList.add('is-failed');
    if (host.querySelector('.gcw__fail')) return;
    var box = doc.createElement('div');
    box.className = 'gcw__fail';
    box.innerHTML = '<a class="btn-lime" target="_blank" rel="noopener">Открыть форму записи</a>';
    box.firstChild.href = formUrl(host);
    host.appendChild(box);
  };

  var hideFallback = function (host) {
    host.classList.remove('is-loading', 'is-failed');
    var box = host.querySelector('.gcw__fail');
    if (box) box.parentNode.removeChild(box);
  };

  /* skeleton stays until the GC iframe reports a real height.
     The clock starts when the widget actually mounts, not on page load:
     the lower form mounts lazily, possibly minutes later.
     8 s without height -> reload the iframe (GC sends the height again on
     every load), up to 2 times; still nothing -> button to the GC form page.
     Watching goes on for 2 min: if the form wakes up late, the button goes. */
  var watch = function (host) {
    var t0 = Date.now();
    var next = SLOW_MS;
    var reloads = 0;
    var failed = false;
    var timer = setInterval(function () {
      var f = host.querySelector('iframe');
      if (f && f.offsetHeight > 40) {
        hideFallback(host);
        clearInterval(timer);
        return;
      }
      var t = Date.now() - t0;
      if (t > 120000) { clearInterval(timer); return; }
      if (failed || t < next) return;
      if (reloads < RELOADS) {
        reloads++;
        next = t + RETRY_MS;
        if (f) f.src = f.src; /* no iframe yet: the script is still retrying */
      } else {
        failed = true;
        showFallback(host);
      }
    }, 150);
  };

  var mount = function (host, attempt, done) {
    var uid = host.getAttribute('data-gc-uid');
    var src = host.getAttribute('data-gc-src');
    if (!uid || !src) { done(); return; }

    var s = doc.createElement('script');
    s.id = uid;
    s.src = src;
    s.onload = function () {
      /* call once directly: dispatching StartWidget<uid> would also wake
         the listener left by the previous copy and throw on a null script */
      var start = window['startWidget' + uid];
      if (typeof start === 'function' && doc.getElementById(uid)) {
        try { start(); } catch (err) { /* GC internals; the skeleton stays */ }
      }
      done();
    };
    s.onerror = function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      if (attempt < MAX_TRIES) {
        setTimeout(function () { mount(host, attempt + 1, done); }, 1500 * attempt);
      } else {
        done();
      }
    };
    host.appendChild(s);
  };

  /* the hero form mounts first and alone; the next ones wait until they
     are close to the viewport, so they don't compete for bandwidth */
  var nearViewport = function (el, cb) {
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { io.disconnect(); cb(); }
    }, { rootMargin: '900px 0px' });
    io.observe(el);
  };

  var run = function (i) {
    var host = hosts[i];
    if (!host) return;
    host.classList.add('is-loading');
    var go = function () {
      watch(host);
      mount(host, 1, function () { run(i + 1); });
    };
    if (i === 0) go();
    else nearViewport(host, go);
  };

  run(0);
})();
