document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  const imageList = document.querySelector('.image-list');
  const imageItems = document.querySelectorAll('.image-item');

  const updateDots = (slideNumber) => {
    dots.forEach(dot => dot.classList.remove('active'));
    document.querySelector(`.dot[data-slide="${slideNumber}"]`).classList.add('active');
  };

  const getCurrentSlide = () => {
    const scrollLeft = imageList.scrollLeft;
    const totalWidth = imageList.scrollWidth - imageList.clientWidth;
    const slideWidth = imageList.clientWidth / imageItems.length;
    const currentSlideIndex = Math.round(scrollLeft / slideWidth) + 1;
    return currentSlideIndex;
  };

  imageList.addEventListener('scroll', () => {
    const currentSlideIndex = getCurrentSlide();
    updateDots(currentSlideIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const slideNumber = dot.getAttribute('data-slide');
      const slideWidth = imageList.clientWidth / imageItems.length;
      const scrollLeft = (slideNumber - 1) * slideWidth;

      imageList.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });

      updateDots(slideNumber);
    });
  });

  // Initial update to ensure the correct dot is highlighted
  updateDots(1);

  // Update dots when reaching the end of scrolling
  imageList.addEventListener('scroll', () => {
    const scrollLeft = imageList.scrollLeft;
    const totalWidth = imageList.scrollWidth - imageList.clientWidth;
    if (scrollLeft === totalWidth) {
      updateDots(dots.length);
    }
  });
});
