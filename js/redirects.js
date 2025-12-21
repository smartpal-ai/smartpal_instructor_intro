// Handle anchor redirects for backward compatibility
(function() {
  const defined_redirects = {
    '#before-the-term-starts': 'research-participation/#what-are-needed-from-instructors'
  };

  function handleRedirect() {
    const defined_hash = window.location.hash;
    if (defined_hash && defined_redirects[defined_hash]) {
      // Get base URL from current location (works with GitHub Pages subpaths)
      const basePath = window.location.pathname.replace(/\/[^\/]*$/, '/');
      window.location.replace(basePath + defined_redirects[defined_hash]);
    }
  }

  // Run on initial page load
  handleRedirect();

  // Also run when hash changes (for SPA-style navigation)
  window.addEventListener('hashchange', handleRedirect);

  // For MkDocs Material instant navigation
  document.addEventListener('DOMContentLoaded', handleRedirect);
})();
