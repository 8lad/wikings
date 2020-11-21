$(function() {
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        }
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

        asNavFor: '.heroes__slider-text'
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.heroes__slider-img'
    });







});