function createDependencyProposals(range) {
  // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
  // here you could do a server side lookup
  return [{
    label: 'Center',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '<center>${1:Hello}</center>',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Bold',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '**${1:text}**',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Italics',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '*${1:text}*',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Underline',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '__${1:text}__',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Strikethrough',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '~~${1:text}~~',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Table',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '|${1:text}|${2:text}|\n|--|--|\n|${3:text}|${4:text}|',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Vector 2x1',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{matrix} ${1:1} \\\\\\\\\\\\\\\\ ${2:2} \\\\\\\\end{matrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Vector 3x1',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{matrix} ${1:1} \\\\\\\\\\\\\\\\ ${2:2} \\\\\\\\\\\\\\\\ ${3:3} \\\\\\\\end{matrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Vector [2x1]',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{bmatrix} ${1:1} \\\\\\\\\\\\\\\\ ${2:2} \\\\\\\\end{bmatrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Vector [3x1]',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{bmatrix} ${1:1} \\\\\\\\\\\\\\\\ ${2:2} \\\\\\\\\\\\\\\\ ${3:3} \\\\\\\\end{bmatrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Matrix 2x2',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{matrix} ${1:1} & ${2:2} \\\\\\\\\\\\\\\\ ${3:3} & ${4:4} \\\\\\\\end{matrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Matrix 3x3',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{matrix} ${1:1} & ${2:2} & ${3:3} \\\\\\\\\\\\\\\\ ${4:4} & ${5:5} & ${6:6} \\\\\\\\\\\\\\\\ ${7:7} & ${8:8} & ${9:9} \\\\\\\\end{matrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Matrix [2x2]',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{bmatrix} ${1:1} & ${2:2} \\\\\\\\\\\\\\\\ ${3:3} & ${4:4} \\\\\\\\end{bmatrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Matrix [3x3]',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\\\\\\\begin{bmatrix} ${1:1} & ${2:2} & ${3:3} \\\\\\\\\\\\\\\\ ${4:4} & ${5:5} & ${6:6} \\\\\\\\\\\\\\\\ ${7:7} & ${8:8} & ${9:9} \\\\\\\\end{bmatrix}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'URL',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '[${1:SKGadi}](${2:https://skgadi.com} "${3:Title}")',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Imagae',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '![${1:alt-text}](${2:https://skgadi.com/images/my-logo.png} =${3:*}x${4:100} "${5:Title}")',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Video',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '[![${1:Youtube-video}](https://img.youtube.com/vi/${2:_S3YDKsFmpk}/0.jpg =${3:*}x${4:200} "${5:TItle}")](https://www.youtube.com/watch?v=${2:_S3YDKsFmpk})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Vertical dots',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: Array(20).fill(".").join("\n\n"),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'TexInline',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\$${1:x^2}\$',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'TexDisplay',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\$\$${1:x^2}\$\$',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'TexEnvironment',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '```latex\n${1:x^2}\n```',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'InlineTex',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\$${1:x^2}\$',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Power',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '${1:x}^${2:2}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Fraction',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\frac{${1:1}}{${2:2}}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Limit',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\lim_{${2:x}\\rightarrow ${3:0}}x',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Derivative',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\frac{{\\mathrm d}}{{\\mathrm d}${2:t}}${1:x}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Integral',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\int ${1:x} {\\mathrm d}${2:t}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Definite integral',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\int_{${3:0}}^{${4:\\infty}} ${1:x} {\\mathrm d}${2:t}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Braces',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\left${2:(} ${1:x} \\right${3:)}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Braces (·)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\left( ${1:x} \\right)',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Braces [·]',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\left[ ${1:x} \\right]',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Braces {·}',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\left\\\\\\\\{ ${1:x} \\right\\\\\\\\}',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Times',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\times',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Pi',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\pi',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }, {
    label: 'Degree',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '\\degree',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  }]
};