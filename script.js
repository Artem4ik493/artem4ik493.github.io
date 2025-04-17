const text = "artem4ik493";
const titleElement = document.getElementById("title");

let index = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = text.substring(0, index);


  titleElement.textContent = currentText;

  document.title = currentText || " ";

  if (!isDeleting) {
    index++;

    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    index--;

    if (index < 0) {
      isDeleting = false;
      setTimeout(typeEffect, 500);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

window.onload = typeEffect;