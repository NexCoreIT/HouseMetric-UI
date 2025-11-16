

// home page servie swiper
var swiper = new Swiper(".ServiceSwiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    }
});


$(document).ready(function () {

    $(".comparison").each(function () {

        let $wrap = $(this);
        let $divisor = $wrap.find(".comparison_divisor");
        let $handle = $wrap.find(".comparison_handle");
        let $slider = $wrap.find(".comparison_slider");

        function moveDivisor() {
            let val = $slider.val() + "%";
            $divisor.css("width", val);
            $handle.css("left", val);
        }

        moveDivisor();

        $slider.on("input change", function () {
            moveDivisor();
        });

    });

});
