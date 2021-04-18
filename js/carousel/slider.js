$('#slider-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText : ['<img class="icon left" src="/img/icons/left-chevron.png" alt="">','<img class="icon right" src="/img/icons/right-chevron.png" alt="">'],
    dots: false,
    items:1,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
          stagePadding: 10,
          margin:10,
      },
      577:{
          items:1,
          stagePadding: 30,
          margin:20,
      },
      768:{
          items:1,
          stagePadding: 30,
          margin:0,
      },
    }
})