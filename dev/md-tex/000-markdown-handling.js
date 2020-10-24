const toc = [];
class markdownTreatment {
  constructor() {
    showdown.setFlavor('github');
    const config = {
      extensions: [showdownToc({
        toc
      }), showdownKatex({
        delimiters: [{
          left: "$$",
          right: "$$",
          display: true
        },
        {
          left: "\\[",
          right: "\\]",
          display: true
        },
        {
          left: "$",
          right: "$",
          display: false
        },
        {
          left: "\\(",
          right: "\\)",
          display: false
        }
      ],
      throwOnError: false
      })],
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
    htmlText += '<link rel="stylesheet" href="' + window.location.origin + 'css/md-tex.min.css">';
    htmlText += '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">';
    htmlText += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg==" crossorigin="anonymous" />';
    htmlText += '<link rel="stylesheet" href="https://unpkg.com/katex@0.11.0/dist/katex.min.css" />';
    htmlText += '</head>';
    htmlText += '<body>';
    htmlText += '<div class="markdown-body">';
    htmlText += this.makeHtml(markdown).replaceAll('\n', '');
    htmlText += '</div>';
    htmlText +="<script>setTimeout(()=>{window.print();},100);</script>"
    htmlText += '</body>';
    htmlText += '</html>';
    return htmlText;
  }
}

const markdown = new markdownTreatment();