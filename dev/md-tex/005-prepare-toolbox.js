(() => {
  toolbox.forEach(tool => {
    const toolset = tool.toolset || 0;
    const btn = document.createElement("div");
    btn.innerHTML = tool.html;
    btn.title = tool.title;
    btn.onclick = function (params) {
      tool.func();
    };
    try {
      document.getElementById("tool-bar").append(btn);
    } catch (e) {
      console.log(e);
    }
  });
})();