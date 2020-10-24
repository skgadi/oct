monaco.languages.registerCompletionItemProvider('markdown', {
  provideCompletionItems: function (model, position) {
    var word = model.getWordUntilPosition(position);
    var range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    };
    return {
      suggestions: createDependencyProposals(range)
    };
  }
});



const templateText = [
  "# Type your notes here",
  "You can write inline math $x^2$",
  "And display math as $$x^2$$"
].join("\n");


const editor = monaco.editor.create(document.getElementById('container'), {
  value: templateText,
  language: 'markdown',
  automaticLayout: true,
  wordWrap: "on",
  theme: "vs"//"vs-dark"//"hc-black"
});

editor.focus();



/*
let contribution = editor.getContribution("snippetController2");
contribution.insert('for (const ${2:defaultElement} of ${1:defaultArray}) {\n\tconsole.log(${2});\n}');

*/