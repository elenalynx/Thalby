$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,

        // autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
            },
            860: {
                items: 3

            }
        }
    });
});