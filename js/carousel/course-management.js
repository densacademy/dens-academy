$('#mycourses-carousel').owlCarousel({
    loop:false,
    nav:true,
    navText : ['<img class="icon left" src="/img/icons/left-chevron.png" alt="">','<img class="icon right" src="/img/icons/right-chevron.png" alt="">'],
    dots: false,
    responsive:{
        0:{
            items:1,
            stagePadding: 10,
            margin: 20,
        },
        991: {
            items:2,
            margin:30,
            stagePadding: 0,
        }
    }
})