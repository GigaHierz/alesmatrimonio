var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

var slidesGreece = document.querySelectorAll('#greece .slide');
var currentSlideGreece = 0;
var slideIntervalGreece = setInterval(nextSlideGreece,5000);

var slidesWedding = document.querySelectorAll('#wedding .slide');
var currentSlideWedding = 0;
var slideIntervalWedding = setInterval(nextSlidewedding,2000);

var slidesWedding2 = document.querySelectorAll('#wedding2 .slide');
var currentSlideWedding2 = 0;
var slideIntervalWedding2 = setInterval(nextSlidewedding2,2000);


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
function nextSlidewedding() {
   slidesWedding[currentSlideWedding].className = 'slide';
   currentSlideWedding = (currentSlideWedding+1)%slidesWedding.length;
   slidesWedding[currentSlideWedding].className = 'slide showing';
}
function nextSlidewedding2() {
   slidesWedding2[currentSlideWedding2].className = 'slide';
   currentSlideWedding2 = (currentSlideWedding2+1)%slidesWedding2.length;
   slidesWedding2[currentSlideWedding2].className = 'slide showing';
}