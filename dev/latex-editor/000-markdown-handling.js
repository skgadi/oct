const toc=[];
class markdownTreatment {
  constructor() {
    showdown.setFlavor('github');
    const config = {
      extensions: [showdownToc({ toc })],
      sanitize: false,
      tables: true,
      tasklists: true,
      smoothLivePreview: true,
      simpleLineBreaks: true,
      openLinksInNewWindow: true,
      underline: true,
      omitExtraWLInCodeBlocks: true,
      customizedHeaderId: true,
      prefixHeaderId: "doc-",
      parseImgDimensions: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tablesHeaderId: true
    };
    this.converter = new showdown.Converter(config);
  };
  makeHtml(markdown) {
    return this.converter.makeHtml(markdown);
  }
  prepareFullHtml(title, markdown) {
    let htmlText = '<!doctype html>';
    htmlText += '<html lang=en>';
    htmlText += '<head>';
    htmlText += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    htmlText += '<title>' + title + '</title>';
    htmlText += '<link rel="icon" type="image/png" href="favicon.png">';
    htmlText += '<link rel="stylesheet" href="' + window.location.origin + 'css/latex-editor.min.css">';
    htmlText += '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">';
    htmlText += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg==" crossorigin="anonymous" />';
    htmlText += '<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>';
    htmlText += '</head>';
    htmlText += '<body>';
    htmlText += '<div class="markdown-body">';
    htmlText += this.makeHtml(markdown).replaceAll('\n', '');
    htmlText += '</div>';
    htmlText += "<script>MathJax = {tex: {inlineMath: [['$', '$'],['\\(', '\\)']]}};setTimeout(()=>{MathJax.typesetPromise();setTimeout(()=>{window.print();},100);},100);</script>";
    htmlText += '<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';
    htmlText += '</body>';
    htmlText += '</html>';
    return htmlText;
  }
}