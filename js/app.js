document.addEventListener("DOMContentLoaded", function(){


var menu = document.querySelector(".menu");

menu.addEventListener("click", function(){
    menu.classList.toggle("change");

    });


function init() {
window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerClasses = document.getElementById('header').classList;
        if (distanceY > shrinkOn) {
            headerClasses.add("smaller");
        } else {
            if (headerClasses.contains("smaller")) {
                headerClasses.remove("smaller");
            }
        }
    });
}
window.onload = init();




    });




// $(function(){
//     $('#header').data('size','big');
// });
//
// $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//     {
//         if($('#header').data('size') == 'big')
//         {
//             $('#header').data('size','small');
//             $('#header').stop().animate({
//                 height:'40px'
//             },600);
//         }
//     }
//     else
//     {
//         if($('#header').data('size') == 'small')
//         {
//             $('#header').data('size','big');
//             $('#header').stop().animate({
//                 height:'100px'
//             },600);
//         }
//     }
//
//




// });
