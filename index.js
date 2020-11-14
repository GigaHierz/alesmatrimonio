var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

var slidesGreece = document.querySelectorAll('#greece .slide');
var currentSlideGreece = 0;
var slideIntervalGreece = setInterval(nextSlideGreece,5000);


function nextSlide() {
   slides[currentSlide].className = 'slide';
   currentSlide = (currentSlide+1)%slides.length;
   slides[currentSlide].className = 'slide showing';
}
function nextSlideGreece() {
   slidesGreece[currentSlideGreece].className = 'slide';
   currentSlideGreece = (currentSlideGreece+1)%slidesGreece.length;
   slidesGreece[currentSlideGreece].className = 'slide showing';
}