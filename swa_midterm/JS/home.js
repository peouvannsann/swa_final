document.addEventListener('DOMContentLoaded',(event)=>{
  var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
const dot1 = document.querySelector('#dot1');

dot1.addEventListener('click',()=>{
  currentSlide(1);
});

const next = document.querySelector('#next');

next.addEventListener('click',()=>{
  plusSlides(1);
});



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

});





