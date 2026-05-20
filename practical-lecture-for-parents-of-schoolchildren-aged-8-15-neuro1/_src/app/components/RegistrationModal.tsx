'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { utmQueryString, getUtm } from '@/lib/utm'

const WIDGET_BASE = 'https://university.zerocoder.ru/pl/lite/widget/script?id=1578138'

function buildWidgetHtml(): string {
  const utmQs = utmQueryString()
  const widgetSrc = utmQs ? `${WIDGET_BASE}&${utmQs}` : WIDGET_BASE
  const utmJson = JSON.stringify(getUtm())

  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base target="_parent">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0; padding: 0;
      font-family: 'Manrope', system-ui, sans-serif;
      color: #222;
      background: transparent;
      -webkit-font-smoothing: antialiased;
    }
    body > *, body form, body iframe { max-width: 100% !important; width: 100% !important; }
    body iframe { border: 0; display: block; }
    #wrap { width: 100%; }
  </style>
</head>
<body>
  <div id="wrap">
    <script>
      // Expose UTM to GetCourse widget code that may read window-level vars
      try {
        var __utm = ${utmJson};
        window.utmParams = __utm;
        Object.keys(__utm).forEach(function(k){ try { window[k] = __utm[k]; } catch(e) {} });
        // Also append UTM to query string so any reader of location.search picks them up
        if (Object.keys(__utm).length) {
          var qs = Object.keys(__utm).map(function(k){ return encodeURIComponent(k)+'='+encodeURIComponent(__utm[k]); }).join('&');
          if (window.history && history.replaceState) {
            try { history.replaceState(null, '', '?' + qs); } catch(e) {}
          }
        }
      } catch (e) {}
    </script>
    <script id="9eee9f01756524c725a4b36e332d4e4049c53437" src="${widgetSrc}"></script>
  </div>
  <script>
    // Fill hidden inputs named utm_* (and similar) after widget renders the form
    function fillHiddenUtm() {
      try {
        var u = window.utmParams || {};
        var keys = Object.keys(u);
        if (!keys.length) return;
        var inputs = document.querySelectorAll('input[name], select[name]');
        inputs.forEach(function (el) {
          var name = (el.getAttribute('name') || '').toLowerCase();
          if (u[name]) el.value = u[name];
        });
      } catch (e) {}
    }
    var fillT = setInterval(fillHiddenUtm, 500);
    setTimeout(function(){ clearInterval(fillT); }, 8000);

    function measure() {
      var bottom = 0;
      var nodes = document.body.querySelectorAll('*');
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (n.tagName === 'SCRIPT') continue;
        var r = n.getBoundingClientRect();
        if (r.height === 0 && r.width === 0) continue;
        if (r.bottom > bottom) bottom = r.bottom;
      }
      return Math.ceil(bottom);
    }
    var lastH = 0;
    function tick() {
      var h = measure();
      if (h > 0 && Math.abs(h - lastH) > 2) {
        lastH = h;
        window.parent.postMessage({ type: 'widget-height', height: h }, '*');
      }
    }
    setInterval(tick, 200);
    window.addEventListener('load', tick);
    window.addEventListener('resize', tick);
  </script>
</body>
</html>`
}

export default function RegistrationModal() {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(380)
  const [html, setHtml] = useState<string>('')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const trigger = target.closest('[data-open-register]')
      if (trigger) {
        e.preventDefault()
        // Build srcDoc lazily so we read fresh UTM at the time of click
        setHtml(buildWidgetHtml())
        setOpen(true)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const data = e.data
      if (data && data.type === 'widget-height' && typeof data.height === 'number') {
        setHeight(Math.max(320, Math.min(900, data.height + 4)))
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Регистрация на лекцию-практикум"
    >
      <div className="modal-card modal-card-wide modal-card-bare" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close} aria-label="Закрыть форму">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <iframe
          ref={iframeRef}
          title="Регистрация на лекцию-практикум"
          srcDoc={html}
          className="widget-iframe"
          style={{ height }}
          loading="eager"
        />
      </div>
    </div>
  )
}
