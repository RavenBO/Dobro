$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
    $('.about__cards').slick({
        slideToSwipe: true,
        slidesToShow: 3,
        responsive: true,
        slidesToScroll: 1,        
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.png"></button>',
    });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.about-item__content').eq(i).toggleClass('about-item__content_active');
                $('.about-item__list').eq(i).toggleClass('about-item__list_active');
            })
        });       
    };
    toggleSlide('.about-item__link');
    toggleSlide('.about-item__list__link');

    $('input[name=phone]').mask("+38 (999) 999-99-99");
    $('.news-item__link').click(function(e) {
        e.preventDefault();
        $('.news-item__descr-long').slideToggle();
        if ($('.news-item__link').text() == "Детальніше...") {
          $(this).text("Згорнути")
        } else {
          $(this).text("Детальніше...")
        }
      });
  });