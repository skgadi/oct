MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ]
  }
};

let mathrefreshing = false;
function refreshMath() {
  if (!mathrefreshing) {
    mathrefreshing = true;
    setTimeout(() => {
      try {
        MathJax.typesetPromise();
      } catch (e) {}
      mathrefreshing=false;
    }, 100);
  }
}


/*
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
*/
