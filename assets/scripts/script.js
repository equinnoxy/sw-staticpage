document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#slideshow img');
    const slides2 = document.querySelectorAll('#slideshow2 img');
    let currentSlide = 0;
    slides[currentSlide].style.display = 'block';
    slides2[currentSlide].style.display = 'block';

    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        slides2[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        currentSlide = (currentSlide + 1) % slides2.length;
        slides[currentSlide].style.display = 'block';
        slides2[currentSlide].style.display = 'block';
    }

    // Interval 3 detik
    setInterval(showNextSlide, 3000);
});