const toolbox = [{
    html: "<i class='far fa-file'></i>",
    title: "New",
    func: function () {
      if (confirm("This operation will remove the present text.\nAre you sure you want to proceed?\n\nPress Ok proceed.")) {
        editor.setValue("");
        editor.focus();
      }
    }
  }, {
    html: "<i class='far fa-file-alt'></i>",
    title: "Template",
    func: function () {
      if (confirm("This operation will remove the present text.\nAre you sure you want to proceed?\n\nPress Ok proceed.")) {
        editor.setValue(templateText);
        editor.focus();
      }
    }
  }, {
    html: "<i class='far fa-folder-open'></i>",
    title: "Open",
    func: function (appHandle) {
      if (confirm("This operation will remove the present text.\nAre you sure you want to proceed?\n\nPress Ok proceed.")) {
        document.getElementById('md-file').value = "";
        document.getElementById('md-file').click();
      }
    }
  },
  {
    html: "<i class='far fa-save'></i>",
    title: "Save text",
    func: function () {
      downloadTextAsFile(new Date().toISOString() + "-notes.md", editor.getValue());
    }
  },
  {
    html: "<i class='fas fa-save'></i>",
    title: "Save HTML",
    func: function (appHandle) {
      downloadTextAsFile(new Date().toISOString() + "-notes.html", markdown.prepareFullHtml("Notes prepared at https://oct.skgadi.com/md-tex.min.html", editor.getValue()));
    }
  },
  {
    html: "<i class='fas fa-print'></i>",
    title: "Print",
    func: function () {
      const fullHtmlCode = markdown.prepareFullHtml("Notes prepared at https://oct.skgadi.com/md-tex.min.html", editor.getValue());
      const newWin = open(undefined,'blank',);
      newWin.document.write(fullHtmlCode);
      newWin.document.close();
    }
  }
];