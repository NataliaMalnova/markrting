let swiperReviews = new Swiper(".reviews-slider .swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".reviews-slider .swiper-button-next",
        prevEl: ".reviews-slider .swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        769: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
});