const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow", 

spacebetween:100,

    autoplay: {
        delay: 3000,
    },

    coverflowEffect: { 
        scale:0.8,   
        slideShadows: true,    
    },       

    pagination: {                       
        el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
