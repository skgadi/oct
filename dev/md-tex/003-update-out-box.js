editor.onDidChangeModelContent(function (e) {
  updateOutbox ();
});
let isUpdating=false;
function updateOutbox () {
  if (!isUpdating) {
    isUpdating = true;
    setTimeout (()=>{
      document.getElementById("out-box").innerHTML = markdown.makeHtml(editor.getValue()+Array(20).fill("&nbsp;").join("\n\n"));
      isUpdating = false;
    }, 50);
  }
}
updateOutbox ();
