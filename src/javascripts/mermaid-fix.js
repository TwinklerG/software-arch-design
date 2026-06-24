/**
 * Fix Mermaid class diagram hollow triangle markers.
 * Watches for Mermaid-rendered SVGs and patches marker fills to match
 * the page background so inheritance/realization triangles appear hollow.
 */
(function () {
  function fixMarkers(svg) {
    // Extension markers: hollow triangle for inheritance (<|--) and realization (<|..)
    svg.querySelectorAll('marker[id*="xtension"]').forEach(function (marker) {
      var shapes = marker.querySelectorAll('polygon, path');
      if (shapes.length > 0) {
        var bg = getComputedStyle(document.documentElement)
          .getPropertyValue('--md-default-bg-color')
          .trim() || '#ffffff';
        shapes[0].setAttribute('fill', bg);
      }
    });
  }

  // Patch existing SVGs
  function patchAll() {
    document.querySelectorAll('pre.mermaid svg').forEach(fixMarkers);
  }

  // Watch for new Mermaid SVGs added to the DOM
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          if (node.matches && node.matches('pre.mermaid svg')) {
            fixMarkers(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('pre.mermaid svg').forEach(fixMarkers);
          }
        }
      });
    });
  });

  // Also subscribe to mkdocs-material's document lifecycle
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      // Mermaid runs synchronously during init; use rAF to catch rendered SVGs
      requestAnimationFrame(function () {
        patchAll();
        observer.observe(document.body, { childList: true, subtree: true });
      });
    });
  } else {
    // Fallback: run on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        requestAnimationFrame(function () {
          patchAll();
          observer.observe(document.body, { childList: true, subtree: true });
        });
      });
    } else {
      patchAll();
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
})();
