const md = document.getElementById("markdown")

const urlParams = new URLSearchParams(window.location.search);
var fileName = urlParams.get('p');
const courseName = urlParams.get('c');

if (courseName) {
  fileName = `course/${courseName}/${fileName}`
}

if (fileName) {
  fetch(`Pages/${fileName}.md`)
    .then(response => response.text())
    .then(data => {
      var converter = new showdown.Converter();
      md.innerHTML = converter.makeHtml(data)
    })
    .catch(error => {
      console.error('Error fetching file:', error);
      md.innerHTML = 'Failed to load page.';
    });
} else {
  const urlWithoutQuery = window.location.href.split('?')[0];
  window.location.href = urlWithoutQuery + "?p=Home"
}