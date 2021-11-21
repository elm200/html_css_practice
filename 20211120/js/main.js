document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle_btn").addEventListener("click", () => {
    if (document.getElementById("header").classList.contains("open")) {
      document.getElementById("header").classList.remove("open");
    } else {
      document.getElementById("header").classList.add("open");
    }
  });

  document.getElementById("mask").addEventListener("click", () => {
    document.getElementById("header").classList.remove("open");
  });
});
