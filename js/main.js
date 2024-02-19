function plusSlides(n, carouselClass) {
  showSlides(slideIndex[carouselClass] += n, carouselClass);
}

function currentSlide(n, carouselClass) {
  showSlides(slideIndex[carouselClass] = n, carouselClass);
}

// Object to hold the slide index for each carousel
let slideIndex = {};

function showSlides(n, carouselClass) {
  let i;
  let carousel = document.querySelector('.' + carouselClass); // Find the specific carousel
  let slides = carousel.getElementsByClassName("mySlides");
  let dots = carousel.getElementsByClassName("dot");

  // Initialize slideIndex for the carousel if it hasn't been already
  if (!slideIndex[carouselClass]) slideIndex[carouselClass] = 1;

  if (n > slides.length) {slideIndex[carouselClass] = 1}
  if (n < 1) {slideIndex[carouselClass] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[carouselClass]-1].style.display = "block";  
  dots[slideIndex[carouselClass]-1].className += " active";
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', (event) => {
  // Assuming 'carousel-1' and 'carousel-2' are classes added to distinguish each carousel
  showSlides(slideIndex['carousel-1'] = 1, 'carousel-1');
  showSlides(slideIndex['carousel-2'] = 1, 'carousel-2');
});
