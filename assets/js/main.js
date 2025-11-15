

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


// comparison image
$(document).ready(function () {
    var $divisor = $(".comparison_divisor"),
        $handle = $(".comparison_handle"),
        $slider = $(".comparison_slider");

    function moveDivisor() {
        let val = $slider.val() + "%";
        $handle.css("left", val);
        $divisor.css("width", val);
    }

    moveDivisor();

    $slider.on("input change", function () {
        moveDivisor();
    });
});