$('#navtab-carousel').owlCarousel({
    items:8,
    margin:10,
    dots:false,
    nav:true,
    navText : ['<img class="icon left" src="/img/icons/left-chevron.png" alt="">','<img class="icon right" src="/img/icons/right-chevron.png" alt="">'],
    responsive:{
      0:{
          items:2,
      },
      576:{
          items:3,
      },
      768:{
          items:5,
      },
      992:{
          items:6,
      },
      1200: {
          items:7,
      },
      1368: {
          items: 8
      }
    }
})