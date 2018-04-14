/*global $ ,jQuery ,alert */

$(document).ready(function () {
   
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    $('.carousel').carousel({
        interval: 5000
    });


    // Caching Scroll Top 
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    
// Click On Scroll Button
    
    scrollButton.click(function () {
         
        $("html,body").animate({scrollTop : 0}, 600);
    });
});

//  Start Owl Carousal 
$(document).ready(function () {
    "use strict";
    $('#Carousel').carousel({
        interval: 5000
    });
    

});