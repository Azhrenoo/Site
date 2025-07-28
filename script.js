

  document.addEventListener("DOMContentLoaded", function () {
  const modeButtons = document.querySelectorAll(".mode-switcher button");
  const modes = ["basic", "intermediate", "advanced"];

  function showMode(mode) {
    modes.forEach(m => {
      document.querySelectorAll(`.mode-${m}`).forEach(section => {
        section.classList.add("hidden");
      });
    });

    document.querySelectorAll(`.mode-${mode}`).forEach(section => {
      section.classList.remove("hidden");
      section.classList.add("fade-in");
    });

    modeButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.btn-${mode}`).classList.add("active");
  }

  modeButtons.forEach(button => {
    button.addEventListener("click", function () {
      const selectedMode = this.dataset.mode;
      showMode(selectedMode);
    });
  });

  // Show the basic mode by default on load
  showMode("basic");
});

}
