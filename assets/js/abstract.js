document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-abstract");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const currentAbstract = button.nextElementSibling;

      // Case 1: if this abstract is already open → close it
      if (currentAbstract.style.display === "block") {
        currentAbstract.style.display = "none";
        button.textContent = "Show abstract";
        return;
      }

      // Case 2: otherwise → close all, then open this one
      document.querySelectorAll(".abstract").forEach(abs => {
        abs.style.display = "none";
      });
      document.querySelectorAll(".toggle-abstract").forEach(btn => {
        btn.textContent = "Show abstract";
      });

      currentAbstract.style.display = "block";
      button.textContent = "Hide abstract";
    });
  });
});