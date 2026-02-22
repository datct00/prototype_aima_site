document.addEventListener('DOMContentLoaded', function() {
  // Get all image sliders on the page
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    // Get related elements
    const container = slider.closest('.slider-container');
    const background = slider.closest('.slider-background');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    const dots = background.querySelectorAll('.dot');

    let currentIndex = 0;
    let autoSlideInterval;
    const slideDelay = 4000; // 4 seconds between slides

    /**
     * Update the active dot indicator
     */
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    /**
     * Display a specific slide based on the index
     * Handles wrap-around for infinite scrolling effect
     */
    function showSlides(index) {
      const totalSlides = slides.length;

      if (index >= totalSlides) {
        currentIndex = 0; // Reset to first slide
      } else if (index < 0) {
        currentIndex = totalSlides - 1; // Go to last slide
      } else {
        currentIndex = index;
      }

      // Apply the transform to slide the slider
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    /**
     * Move to the next slide
     */
    function nextSlide() {
      showSlides(currentIndex + 1);
    }

    /**
     * Move to the previous slide
     */
    function prevSlide() {
      showSlides(currentIndex - 1);
    }

    /**
     * Start automatic sliding
     */
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, slideDelay);
    }

    /**
     * Stop automatic sliding
     */
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    /**
     * Reset auto-slide timer
     */
    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Add click event listeners to dots
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlides(parseInt(dot.dataset.index));
        startAutoSlide();
      });
    });

    // Add event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    // Stop auto-slide on hover
    container.addEventListener('mouseover', stopAutoSlide);
    container.addEventListener('mouseout', startAutoSlide);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoSlide();
      }
    });

    // Initialize
    showSlides(0);
    startAutoSlide();
  });
});
