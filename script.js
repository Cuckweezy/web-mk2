const image = document.getElementById("mainImage");
const controls = document.getElementById("controls");
const skinsBtn = document.getElementById("skinsBtn");
const skinListContainer = document.getElementById("skinListContainer");
let skinVisible = false;

skinsBtn.addEventListener("click", () => {
  image.classList.toggle("slide-left");
  controls.classList.toggle("move-down");

  if (!skinVisible) {
    // Show immediately (for layout), then fade
    skinListContainer.classList.add("showing");

    requestAnimationFrame(() => {
      skinListContainer.classList.add("visible");
    });
  } else {
    // Fade out
    skinListContainer.classList.remove("visible");

    // After fade, hide it from layout
    setTimeout(() => {
      skinListContainer.classList.remove("showing");
    }, 1000); // matches your CSS transition duration
  }

  skinVisible = !skinVisible;
});