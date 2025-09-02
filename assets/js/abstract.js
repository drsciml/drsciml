document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-abstract");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const currentAbstract = button.nextElementSibling;

      if (currentAbstract.style.display === "block") {
        currentAbstract.style.display = "none";
        button.textContent = "Show abstract";
      } else {
        currentAbstract.style.display = "block";
        button.textContent = "Hide abstract";
      }
    });
  });
});