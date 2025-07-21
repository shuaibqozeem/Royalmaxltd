    const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const detail = this.nextElementSibling;
      const isVisible = detail.style.display === "block";

      detail.style.display = isVisible ? "none" : "block";
      this.textContent = isVisible ? "Read More" : "Show Less";
    });
  });