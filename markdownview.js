const md = document.getElementById("markdown")

const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get('p');

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