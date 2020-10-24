document.getElementById('md-file').addEventListener('change', (event) => {
    fileReader.readAsText(event.target.files[0]);
});

const fileReader = new FileReader();
fileReader.onload = () => {
  fileContent = fileReader.result;
  editor.setValue(fileContent);
}