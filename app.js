const experience = document.querySelector(".experience");
const enterButton = document.getElementById("enter-site");
const soundButton = document.getElementById("open-sound");
const menuButtons = document.querySelectorAll(".js-open-menu");
const closeMenuButton = document.getElementById("close-menu");
const exitPageButtons = document.querySelectorAll(".js-exit-page");
const menuLinks = document.querySelectorAll(".menu-index a");
const secondaryMenuLinks = document.querySelectorAll(".menu-links a");

function setScene(scene) {
  if (!experience) return;

  experience.classList.remove("is-intro", "is-main", "is-sound", "is-about", "is-contact", "is-credits", "is-menu");
  experience.classList.add(`is-${scene}`);
  experience.dataset.scene = scene;
}

function openMenu() {
  if (!experience) return;

  experience.classList.add("is-menu");
}

function closeMenu() {
  if (!experience) return;

  experience.classList.remove("is-menu");
}

if (experience && enterButton) {
  enterButton.addEventListener("click", () => {
    setScene("main");
  });
}

if (experience && soundButton) {
  soundButton.addEventListener("click", () => {
    setScene("sound");
  });
}

menuButtons.forEach((button) => {
  button.addEventListener("click", openMenu);
});

if (closeMenuButton) {
  closeMenuButton.addEventListener("click", closeMenu);
}

exitPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setScene("main");
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.dataset.externalLink !== undefined) return;

    event.preventDefault();
    const targetScene = link.dataset.targetScene;

    if (targetScene) {
      setScene(targetScene);
    }
  });
});

secondaryMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetScene = link.dataset.targetScene;

    if (targetScene) {
      setScene(targetScene);
    }
  });
});
