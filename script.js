function fadeInElement(element) {
  element.style.opacity = "1";
  element.style.transform = "translateX(0)";
}

function fadeOutElement(element) {
  element.style.opacity = "0";
  element.style.transform = "translateX(-50px)";
}

function checkScroll() {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const rect = carousel.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.top <= windowHeight) {
      fadeInElement(carousel);
    } else {
      fadeOutElement(carousel);
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
window.addEventListener("load", checkScroll);
