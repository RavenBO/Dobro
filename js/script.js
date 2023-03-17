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
    $('.news__wrapper').slick({
        slidesToShow: 1,
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

    $('input[name=phone]').mask("+380 (99) 999-99-99");//.on('click', function(){
    //    $(this).focus();
    // });
    function CusrorStart(item){
        $(item).on('click',function(){
            $(this).focus();
        })
    };
    CusrorStart('input[name=phone]');
    function News(item){
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.news-item__descr-long').eq(i).toggleClass('news-item__descr-long_active');
                if ($('.news-item__link').eq(i).text() == "Детальніше...") {
                    $(this).text("Згорнути")
                  } else {
                    $(this).text("Детальніше...")
                  }
            })
        });       
    };
    
    News('.news-item__link');
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                descr: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Будь-ласка, введіть своє ім'я",
                    minlength: jQuery.validator.format("Введіть {0} символа!")
                  },
                phone: "Будь-ласка, введіть свій номер телефона",
                email:"Ведіть вашу електрону адресу у форматі example@mail.com",
                descr: {
                  required: "Будь-ласка, коротко опишить причину вашого звернення звернення",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                }
            }
        });
    };
    validateForms('#contacs-form');
    validateForms('#modal-form');
    $('form').submit(function(e){
        e.preventDefault();
        
        if(!$(this).valid()){
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val(" ");

            $('form').trigger('reset');
        });
        return false;
    });
    $('.messagebtn').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeIn();
    });
    $('.modal-form__close').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeOut();
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>1600 && $(this).scrollTop()<6600){
            $('.upbtn').fadeIn();
        } else{
            $('.upbtn').fadeOut();
        }
    });
  });