// This script sets the Mermaid theme to 'neo-dark' globally
if (window.mermaid) {
  window.mermaid.initialize({
    theme: 'neo-dark'
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    if (window.mermaid) {
      window.mermaid.initialize({
        theme: 'neo-dark'
      });
    }
  });
}
