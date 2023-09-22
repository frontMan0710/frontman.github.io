var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    loop: true,
    simulateTouch: true,
    grabCursor: true,
    touchRatio: 1,
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
});