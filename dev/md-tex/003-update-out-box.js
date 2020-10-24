editor.onDidChangeModelContent(function (e) {
  updateOutbox ();
});
let isUpdating=false;
function updateOutbox () {
  if (!isUpdating) {
    isUpdating = true;
    setTimeout (()=>{
      document.getElementById("out-box").innerHTML = markdown.makeHtml(editor.getValue());
      isUpdating = false;
    }, 50);
  }
}
updateOutbox ();
