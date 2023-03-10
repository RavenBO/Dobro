$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
    });


    $('.about-item__link').each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.about-item__content').eq(i).toggleClass('about-item__content_active');
            $('.about-item__list').eq(i).toggleClass('about-item__list_active');
        })
    })
  });