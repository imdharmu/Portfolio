const icon = document.querySelector("#icon");
const homePage = document.querySelector(".main");

icon.onclick = function () {
  homePage.classList.toggle("dark-them");
  {
    if (homePage.classList.contains("dark-them")) {
      icon.src = "res/sunny.png";
      icon.style.color = "white";
    } else {
      icon.src = "res/moon.png";
    }
  }
};
var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Front End", "Dharmendra Prasad"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function onMenuClick() {
  var navlink = document.getElementById("navlink-bar");
  var responsive_class_name = "responsive";

  navlink.classList.toggle(responsive_class_name);
}
