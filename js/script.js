$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
    $('.about-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
    });
  });