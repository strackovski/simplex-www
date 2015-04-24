/*****************************************************
 Simplex Web Page
 http://www.envee.eu/projects/simplex
 http://github.com/strackovski/simplex-www
 Vladimir Strackovski <vlado@nv3.org>
 2015
 *****************************************************/
$(function() {
    $('a[href*=#]:not([href=#]):not([role=tab])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function(){
    $('body').removeClass('nojs');
    $('.landing').css('height', $(window).height() - 100);
});
