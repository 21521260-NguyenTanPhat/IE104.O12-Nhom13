window.onscroll = () =>{
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

var swiper = new Swiper(".authors-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1170: {
          slidesPerView: 5,
        },
      },
      grabCursor: true,
    });

var swiper = new Swiper(".cooperators-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1170: {
          slidesPerView: 5,
         },
      },
      grabCursor: true,
    });
    
var swiper = new Swiper(".new-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1170: {
        slidesPerView: 5,
      },
    },
    grabCursor: true,
    spaceBetween: 30,
});