const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  swiper.on('slideChange', function(){
    const aktivSlideRaqami = swiper.realIndex;
     if (aktivSlideRaqami == 0){
        document.body.style.backgroundColor = "yellow"
    }
    if(aktivSlideRaqami == 1){
        document.body.style.backgroundColor = "gray"
    }
    else if(aktivSlideRaqami == 2){
        document.body.style.backgroundColor = "green"
    }
    else if(aktivSlideRaqami == 3){
        document.body.style.backgroundColor = "red"
    }
    else{
        document.body.style.backgroundColor = "yellow"
    }
  })
