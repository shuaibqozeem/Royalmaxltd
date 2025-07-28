document.addEventListener("DOMContentLoaded", () => {
  // Handle "Read More" buttons
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const detail = this.nextElementSibling;
      const isVisible = detail.style.display === "block";

      detail.style.display = isVisible ? "none" : "block";
      this.textContent = isVisible ? "Read More" : "Show Less";
    });
  });

  // Lightbox feature
  const images = document.querySelectorAll('.lightbox-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');
  const prevBtn = document.querySelector('.lightbox .prev');
  const nextBtn = document.querySelector('.lightbox .next');

  let currentIndex = 0;

  const showLightbox = (index) => {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
  };

  if (images.length && lightbox && lightboxImg && closeBtn && prevBtn && nextBtn) {
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
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navs = document.querySelector('.navs');

if (hamburger && navs) {
  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent bubbling
    navs.classList.toggle('show');
  });

  // Close menu when clicking any nav link
  const navLinks = navs.querySelectorAll('a'); // Or 'li', depending on your structure
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navs.classList.remove('show');
    });
  });

  // Prevent clicks inside the navs from closing it
  navs.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close nav when clicking outside
  document.addEventListener('click', () => {
    navs.classList.remove('show');
  });
}
})
