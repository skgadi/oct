MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ]
  }
};

let mathrefreshing = false;
function refreshMathJax() {
  if (!mathrefreshing) {
    mathrefreshing = true;
    setTimeout(() => {
      MathJax.typesetPromise();
      mathrefreshing=false;
    }, 100);
  }
}