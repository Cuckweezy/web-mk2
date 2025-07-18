  const image = document.getElementById("mainImage");
  const controls = document.getElementById("controls");
  const skinsBtn = document.getElementById("skinsBtn");
  const skinListContainer = document.getElementById("skinListContainer");
  let skinVisible = false;

  skinsBtn.addEventListener("click", () => {
    image.classList.toggle("slide-left");
    controls.classList.toggle("move-down");

    if (!skinVisible) {
      setTimeout(() => {
        skinListContainer.classList.add("show");
      }, 1500);
    } else {
      skinListContainer.classList.remove("show");
    }

    skinVisible = !skinVisible;
  });

  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  const socialsBtn = document.getElementById("socialsBtn");
  const socialIcons = document.getElementById("socialIcons");
  let socialsVisible = false;

  socialsBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("show");
    socialsVisible = !socialsVisible;
});