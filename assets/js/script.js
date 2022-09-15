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