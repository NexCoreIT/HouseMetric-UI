

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

function imageLoaded(img) {
    img.style.display = 'block';

    // Check if all images are loaded
    const container = img.closest('.loader-container');
    const images = container.querySelectorAll('.before_after img');
    let allLoaded = true;
    images.forEach(image => {
        if (!image.complete) {
            allLoaded = false;
        }
    });

    // If all images are loaded, hide the loader
    if (allLoaded) {
        const loader = container.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }
}

// Check if images are already loaded (for cached images)
document.querySelectorAll('.before_after img').forEach(img => {
    if (img.complete) {
        imageLoaded(img);
    }
});

$(document).ready(function () {
    $(".before_after").each(function () {
        $(this).twentytwenty();
    });
});