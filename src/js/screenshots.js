const carousel = $('.carousel');
const carouselInner = $('.carousel-inner');

function carouselResize(){
    var width = carousel.width();
    carousel.height(9*width/16);
    carouselInner.height(9*width/16);
}

$(document).ready(()=>{
    carouselResize();
    $(function() {
        $(window).resize(carouselResize);
    });
});