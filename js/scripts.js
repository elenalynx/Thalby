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





    (function($) { "use strict";

        //Page cursors

        document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
            t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px",
                i.style.left = n.clientX + "px",
                i.style.top = n.clientY + "px"
        });
        var t = document.getElementById("cursor"),
            e = document.getElementById("cursor2"),
            i = document.getElementById("cursor3");
        function n(t) {
            e.classList.add("hover"), i.classList.add("hover")
        }
        function s(t) {
            e.classList.remove("hover"), i.classList.remove("hover")
        }
        s();
        for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }
        function o(t) {
            t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
        }

        //Navigation

        var app = function () {
            var body = undefined;
            var menu = undefined;
            var menuItems = undefined;
            var init = function init() {
                body = document.querySelector('body');
                menu = document.querySelector('.menu-icon');
                menuItems = document.querySelectorAll('.nav__list-item');
                applyListeners();
            };
            var applyListeners = function applyListeners() {
                menu.addEventListener('click', function () {
                    return toggleClass(body, 'nav-active');
                });
            };
            var toggleClass = function toggleClass(element, stringClass) {
                if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
            };
            init();
        }();


        //Switch light/dark

        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
            }
            else {
                $("body").addClass("light");
                $("#switch").addClass("switched");
            }
        });

    })(jQuery);

});