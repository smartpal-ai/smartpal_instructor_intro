// Handle anchor redirects for backward compatibility
// Old: /#before-the-term-starts -> New: /research-participation/#what-are-needed-from-instructors
(function() {
  const defined_redirects = {
    '#before-the-term-starts': 'research-participation/#what-are-needed-from-instructors'
  };

  function handleRedirect() {
    const defined_hash = window.location.hash;
    if (defined_hash && defined_redirects[defined_hash]) {
      // Get the base path (handles GitHub Pages subpaths like /smartpal_instructor_intro/)
      let basePath = window.location.pathname;
      
      // Ensure basePath ends with /
      if (!basePath.endsWith('/')) {
        basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);
      }
      
      const newUrl = basePath + defined_redirects[defined_hash];
      console.log('Redirecting from', window.location.href, 'to', newUrl);
      window.location.replace(newUrl);
    }
  }

  // Run on initial page load
  handleRedirect();

  // Also run when hash changes (for SPA-style navigation)
  window.addEventListener('hashchange', handleRedirect);
})();
