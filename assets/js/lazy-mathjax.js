let mathjaxLoaded = false;

document.querySelectorAll('.toggle-abstract').forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.nextElementSibling;
    abstract.style.display = abstract.style.display === 'block' ? 'none' : 'block';
    button.textContent = abstract.style.display === 'block' ? 'Hide Abstract' : 'Show Abstract';

    if (!mathjaxLoaded && abstract.style.display === 'block') {
      mathjaxLoaded = true;
      
      // Configure MathJax
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']]
        }
      };
      
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      document.head.appendChild(script);
    }
  });
});
