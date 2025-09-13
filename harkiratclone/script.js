const carousel = document.getElementById('carousel');
let scrollAmount = 0;
let direction = 1; // 1 for right, -1 for left
let isPaused = false;

// Duplicate images for seamless looping
carousel.innerHTML += carousel.innerHTML;

function autoScrollCarousel() {
    if (!isPaused) {
        scrollAmount += direction * 0.2; // Adjust speed here
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.parentElement.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(autoScrollCarousel);
}

autoScrollCarousel();

// Pause/resume on hover of any carousel image
const carouselImgs = carousel.querySelectorAll('.carousel-img');
carouselImgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    img.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});