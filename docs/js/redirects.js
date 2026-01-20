// Handle anchor redirects for backward compatibility
(function() {
  const defined_redirects = {
    '#before-the-term-starts': '/research-participation/#what-are-needed-from-instructors'
  };

  const defined_hash = window.location.hash;
  if (defined_hash && defined_redirects[defined_hash]) {
    window.location.replace(defined_redirects[defined_hash]);
  }
})();

