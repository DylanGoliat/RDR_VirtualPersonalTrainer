let scrollContainer = document.querySelector(".tutorial-scroll")

let width = screen.width
width = width * 90 /100

function leftScroll() {
    scrollContainer.scrollBy(-width, 0);
}
function rightScroll() {
    scrollContainer.scrollBy(width, 0);
}


let tutorialContent1 = document.getElementById("tutorial-content-1")
let tutorialContent2 = document.getElementById("tutorial-content-2")
let tutorialContent3 = document.getElementById("tutorial-content-3")
let tutorialContent4 = document.getElementById("tutorial-content-4")

let tutorialIcon1 = document.querySelector(".tutorial-icon-1")
let tutorialIcon2 = document.querySelector(".tutorial-icon-2")
let tutorialIcon3 = document.querySelector(".tutorial-icon-3")
let tutorialIcon4 = document.querySelector(".tutorial-icon-4")

tutorialIcon1.addEventListener("click", (e)=>{
    tutorialIcon1.setAttribute("style", "text-decoration: underline")
    tutorialIcon2.setAttribute("style", "text-decoration: none")
    tutorialIcon3.setAttribute("style", "text-decoration: none")
    tutorialIcon4.setAttribute("style", "text-decoration: none")

    tutorialContent1.setAttribute("style", "display:flex")
    tutorialContent2.setAttribute("style", "display:none")
    tutorialContent3.setAttribute("style", "display:none")
    tutorialContent4.setAttribute("style", "display:none")
})

tutorialIcon2.addEventListener("click", (e)=>{
    tutorialIcon1.setAttribute("style", "text-decoration: none")
    tutorialIcon2.setAttribute("style", "text-decoration: underline")
    tutorialIcon3.setAttribute("style", "text-decoration: none")
    tutorialIcon4.setAttribute("style", "text-decoration: none")

    tutorialContent1.setAttribute("style", "display:none")
    tutorialContent2.setAttribute("style", "display:flex")
    tutorialContent3.setAttribute("style", "display:none")
    tutorialContent4.setAttribute("style", "display:none")
})

tutorialIcon3.addEventListener("click", (e)=>{
    tutorialIcon1.setAttribute("style", "text-decoration: none")
    tutorialIcon2.setAttribute("style", "text-decoration: none")
    tutorialIcon3.setAttribute("style", "text-decoration: underline")
    tutorialIcon4.setAttribute("style", "text-decoration: none")

    tutorialContent1.setAttribute("style", "display:none")
    tutorialContent2.setAttribute("style", "display:none")
    tutorialContent3.setAttribute("style", "display:flex")
    tutorialContent4.setAttribute("style", "display:none")
})

tutorialIcon4.addEventListener("click", (e)=>{
    tutorialIcon1.setAttribute("style", "text-decoration: none")
    tutorialIcon2.setAttribute("style", "text-decoration: none")
    tutorialIcon3.setAttribute("style", "text-decoration: none")
    tutorialIcon4.setAttribute("style", "text-decoration: underline")

    tutorialContent1.setAttribute("style", "display:none")
    tutorialContent2.setAttribute("style", "display:none")
    tutorialContent3.setAttribute("style", "display:none")
    tutorialContent4.setAttribute("style", "display:flex")
})


