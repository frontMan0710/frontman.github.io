var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    loop: true,
    direction: 'horizontal',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    }
});