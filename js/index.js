var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector(".hamburger-menu").style.top = "10vh";
  } else {
    document.querySelector("header").style.top = "-10vh";
    document.querySelector(".hamburger-menu").style.top = "-100%";

  }
  prevScrollpos = currentScrollPos;
}

const hamburger = document.querySelector(".hamburger")
const hamburger_menu = document.querySelector(".hamburger-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    hamburger_menu.classList.toggle("active")
})