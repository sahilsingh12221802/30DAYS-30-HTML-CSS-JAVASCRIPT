document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.sliderImg');
    const totalImages = images.length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex > totalImages - 5) {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
            currentIndex = 1;
            setTimeout(() => {
                slides.style.transition = 'transform 1s ease-in-out';
                slides.style.transform = `translateX(${-currentIndex * 20}%)`;
            }, 20);
        } else {
            slides.style.transition = 'transform 1s ease-in-out';
            slides.style.transform = `translateX(${-currentIndex * 20}%)`;
        }
    }

    setInterval(() => {
        showNextSlide();
    }, 2000);
});
