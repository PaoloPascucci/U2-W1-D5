let isHeaderSticky = false;
let hasScrolled = false;

document.addEventListener("scroll", function () {
  const main = document.querySelector("main");
  const mainTop = main.getBoundingClientRect().top;
  const mainBottom = mainTop + main.clientHeight;

  const scrollPosition = mainBottom - window.innerHeight + main.clientHeight / 2;

  if (scrollPosition <= -150) {
    if (!isHeaderSticky && hasScrolled) {
      document.querySelector("header").classList.add("scrolled");
      document.querySelector("nav ul li:last-child ").classList.add("green");
      isHeaderSticky = true;
    }
  } else {
    if (isHeaderSticky) {
      document.querySelector("header").classList.remove("scrolled");
      document.querySelector("nav ul li:last-child ").classList.remove("green");
      isHeaderSticky = false;
    }
  }

  hasScrolled = true;
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleRandomElementOpacity() {
    const elements = document.querySelectorAll("g[stroke-linecap='butt']");
    if (elements.length > 0) {
      const randomIndex = Math.floor(Math.random() * elements.length); // Scegli un elemento casuale
      const randomElement = elements[randomIndex];

      randomElement.style.opacity = 1; // Mostra l'elemento

      setTimeout(() => {
        randomElement.style.opacity = 0; // Nascondi l'elemento dopo un centesimo di secondo
        setTimeout(toggleRandomElementOpacity, 50); // Ripeti il processo dopo 10 millisecondi (un centesimo di secondo)
      }, 10); // Attendere 10 millisecondi (un centesimo di secondo)
    }
  }

  toggleRandomElementOpacity(); // Avvia il ciclo
});
const container1 = document.querySelector(".postContainer");
const container2 = document.querySelector(".discoverContainer");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const container1Rect = container1.getBoundingClientRect();
  console.log(container1Rect);
  const scrollPosition = window.scrollY;

  if (scrollPosition >= container1Rect.top) {
    container2.style.position = "sticky";
    container2.style.top = header.offsetHeight + "px";
  } else {
    container2.style.position = "static";
  }
});
