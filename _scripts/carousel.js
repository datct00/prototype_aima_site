document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelector('.carousel-slides');
    const slidesContainer = carousel.querySelector('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dots = carousel.parentElement.querySelectorAll('.carousel-dot');
    
    let currentIndex = 0;
    const totalSlides = carousel.querySelectorAll('.carousel-slide').length;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });

      // Update button states
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalSlides - 1;
    }

    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      updateCarousel();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));
        goToSlide(slideIndex);
      });
    });

    // Initialize
    updateCarousel();
  });
});
