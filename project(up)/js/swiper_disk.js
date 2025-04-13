const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow", 

    coverflowEffect: { 
        scale:0.8,   
        slideShadows: true,    
    },       


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
