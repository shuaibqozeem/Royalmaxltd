    const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const detail = this.nextElementSibling;
      const isVisible = detail.style.display === "block";

      detail.style.display = isVisible ? "none" : "block";
      this.textContent = isVisible ? "Read More" : "Show Less";
    });
  });
  const images = document.querySelectorAll('.lightbox-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');
  // const prevBtn = document.querySelector('.lightbox .prev');
  // const nextBtn = document.querySelector('.lightbox .next');

  let currentIndex = 0;

  const showLightbox = (index) => {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
  };

  images.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'Escape') closeBtn.click();
    }
  });

