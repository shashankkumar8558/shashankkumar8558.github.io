function changeImage(imageSrc, element) {
  // Change the main image
  document.getElementById('mainImage').src = imageSrc;

  // Remove the active class from all text boxes
  var textBoxes = document.getElementsByClassName('text-box');
  for (var i = 0; i < textBoxes.length; i++) {
    textBoxes[i].classList.remove('active');
  }

  // Add the active class to the clicked text box
  element.classList.add('active');
}
