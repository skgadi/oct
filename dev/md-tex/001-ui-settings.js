$(document).ready(function () {
  const theme = "metro";
  $('#mainSplitter').jqxSplitter({
    width: "calc(100% - 2px)",
    height: "calc(100% - 2px)",
    panels: [{
      size: "33%"
    }],
    theme: theme
  });

});