$(document).ready(function () {

    $(function () {
        // "use strict"

        $("#dialog").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "blind",
                duration: 1000
            },
// НЕ ПОЛУЧАЕТСЯ ОЧИСТИТЬ ПОЛЕ ВВОДА ПРИ ЗАКРЫТИИ ВСПЛЫВАЮЩЕГО ОКНА (попытки)
            // select: function (event, ui) {
            //     $(this).val('');
            //     return false;
            // }
            // close: function () {
            //     $("#dialog").closest('form');
            // }
            // button: {
            //     "btn_search": function () {
            //         $(this).dialog('post');
            //     }
            // }
        });

        $("#opener").on("click", function () {
            $("#dialog").dialog("open");
        });


        // НЕ ПОЛУЧАЕТСЯ ОЧИСТИТЬ ПОЛЕ ВВОДА ПРИ ЗАКРЫТИИ ВСПЛЫВАЮЩЕГО ОКНА

        $('.ui-dialog .ui-dialog-titlebar-close').bind('click', function () {
            $("#dialog").closest('form').find('input[type=text], textarea').val('');
        });

    });

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
            700: {
                items: 2,
            },
            860: {
                items: 3

            }
        }
    });
});