// $(document).ready(function()
// {
// 	$('.bouncer').click( function(){
// 		alert('clicaram na: ' + $(this).attr('title'));
// 	});
// });

// $(function() {
//     var minSpeed = .02;
//     var maxSpeed = .04;
//     var varSpeed = .008;

//     function startBounce(element) {
//         var container = element.parent();
//         var width = container.innerWidth() - element.outerWidth();
//         var height = container.innerHeight() - element.outerHeight();

//         var vertSpeed = ((Math.random() * (maxSpeed - minSpeed)) + minSpeed);
//         var horzSpeed = ((Math.random() * (maxSpeed - minSpeed)) + minSpeed);
//         bounce(element, vertSpeed, height, 'top');
//         bounce(element, horzSpeed, width, 'left');
//     }

//     function bounce(element, speed, max, dir) {
//         speed += ((Math.random() * varSpeed) - (varSpeed / 2));
//         speed = speed < minSpeed ? minSpeed : (speed > maxSpeed ? maxSpeed : speed)
//         var time = max / speed;
//         var position = element.position();
//         if (position[dir] < 2) {
//             target = max;
//         } else {
//             target = 0;
//         }

//         var style = {
//             queue: false
//         };
//         style[dir] = target;
//         element.animate(style, {
//             duration: time,
//             queue: false,
//             easing: "linear",
//             complete: function() {
//                 bounce(element, time, max, dir);
//             }
//         });
//     }

//     startBounce($('#bouncer2'));
//     startBounce($('#bouncer7'));
//     startBounce($('#bouncer1'));
//     startBounce($('#bouncer4'));
//     startBounce($('#bouncer8'));
//     startBounce($('#bouncer6'));
//     startBounce($('#bouncer3'));
//     startBounce($('#bouncer5'));
//     startBounce($('#bouncer9'));
// });
// carousel
$('#owlTeam').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    navText: ["<i class='fas fa-chevron-left' aria-hidden='true'></i>","<i class='fas fa-chevron-right' aria-hidden='true'></i>"],
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3
        },
    }
});
$('#owlBanner').owlCarousel({
    loop:false,
    // margin:20,
    nav:true,
    navText: ["<i class='fas fa-chevron-left' aria-hidden='true'></i>","<i class='fas fa-chevron-right' aria-hidden='true'></i>"],
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1,
            
        }
    }
});