const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 80,

    autoplay:{
        delay: 1500,
      },
    pagination: {
        el: '.swiper-pagination',
    },
})
