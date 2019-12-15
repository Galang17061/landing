function disabled() {
    alert('Fitur belum tersedia');
}

$(document).ready(function () {
    alert('Website ini masih dalam tahap pengembangan');

    $('.navbar-nav .nav-item .nav-link').click(function () {

        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        if ($(this).html() !== 'portfolio') {
            disabled();
        }
    });

    let $btn = $('.project-area .button-group button');
    $btn.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        // Get data filter
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
        console.log($selector);
    });

    // Trigger event
    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    // Navigation

    // Get header height
    let header_top = $('.header_area').height() + 50;

    function navbar() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= header_top) {
                    $('.header_area .main-menu ').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu ').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbar();
});