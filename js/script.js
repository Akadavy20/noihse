
// // Font stretch
// $.fn.strech_text = function () {
//     var elmt = $(this),
//         cont_width = elmt.width(),
//         txt = elmt.html(),
//         one_line = $('<span class="stretch_it">' + txt + '</span>'),
//         nb_char = elmt.text().length,
//         spacing = cont_width / nb_char,
//         txt_width;

//     elmt.html(one_line);
//     txt_width = one_line.width();

//     if (txt_width < cont_width) {
//         var char_width = txt_width / nb_char,
//             ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

//         one_line.css({ 'letter-spacing': ltr_spacing });
//     } else {
//         one_line.contents().unwrap();
//         elmt.addClass('justify');
//     }
// };

// $(document).ready(function () {
//     $('.stretch').each(function () {
//         $(this).strech_text();
//     });
// });

$.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
};
// Window load
$(window).on("load", function () {
    $('#loader').fadeOut('slow');
});

// Document ready
$(function () {
    // Onscroll animation adding function
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function onScrollClass(className) {
        //If element is scrolled into view, fade it in
        $(window).scroll(function () {
            $('.scroll-animations .animated').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).addClass(className);
                }
            });
        });
    }
    function scrollanim(item, animation){
        if (isScrolledIntoView(item) === true) {
                    $(item).addClass(animation);
                }
    }
    scrollanim('#pack1', 'fadeInLeft');
    scrollanim('#pack2', 'fadeInTop');
    scrollanim('#pack3', 'fadeInRight');
    scrollanim('#pack4', 'fadeInLeft');
    scrollanim('#pack5', 'fadeInBottom');
    scrollanim('#pack6', 'fadeInRight');

        $('.slide').focus(function(){
            $(this).css('transform', 'scale(1.1)');
        });
});

