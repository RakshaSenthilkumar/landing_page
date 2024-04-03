let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let cart=document.querySelector('.cart');

document.querySelector('#cart-icon').onclick=()=>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

let user=document.querySelector('.user');

document.querySelector('#user-icon').onclick=()=>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let header=document.querySelector('header');

window.addEventListener('scroll',() =>{
      header.classList.toggle('shadow',window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function() {
   var swiper = new Swiper('.new-arrival', {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                         rotate: 0,
                         stretch: 0,
                         depth: 200,
                         modifier: 1,
                         slideShadows: true,
                    },
                pagination: {
                      el: '.swiper-pagination',
                },
                loop: true,
                speed: 250,
                autoplay: {
                    delay: 3000,
                 },
               });
           });

/*var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPreview:0,
        },
        568: {
            slidesPreview:2,
        },
        768: {
            slidesPreview:2,
        },
        1020: {
            slidesPreview:3,
        },
    },
    
  });
});*/