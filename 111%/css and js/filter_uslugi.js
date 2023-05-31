let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el1) => {
  el1.addEventListener("click", (e) => {
    list.forEach((el2) => {
      el2.style.color = "#000";
    });
    e.target.style.color = "#f19c9c";
    box.forEach((el3) => {
      el3.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.color).forEach((el4) => {
      el4.style.display = "flex";
    });
  });
});
