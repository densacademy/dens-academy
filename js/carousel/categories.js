$('.categories-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText : ['<img class="icon left" src="/img/icons/left-chevron.png" alt="">','<img class="icon right" src="/img/icons/right-chevron.png" alt="">'],
    dots: false,
    items:6,
    responsive:{
      768:{
        items:5,
      },
      1368: {
        items:6,
      }
    }
    
  })