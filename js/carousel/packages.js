$('#packages-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText : ['<img class="icon left" src="/img/icons/left-chevron.png" alt="">','<img class="icon right" src="/img/icons/right-chevron.png" alt="">'],
    dots: false,
    responsive:{
      0:{
          items:1,
          stagePadding: 30,
          margin:20,
      },
      576: {
            items:2,
      },
      768:{
          items:2,
      },
      1024:{
          items:3,

      },
    }

})