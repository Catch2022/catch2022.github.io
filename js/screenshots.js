/*! Catch2022 v1.0.0 | (c) 2020  | MIT License | git@github.com:Catch2022/Catch2022-Website */
const carousel = $('.carousel');
const carouselInner = $('.carousel-inner');

function carouselResize(){
    var width = carousel.width();
    carousel.height(9*width/16);
    carouselInner.height(9*width/16);
}

$(document).ready(()=>{
    carouselResize();
    $((function() {
        $(window).resize(carouselResize);
    }));
});