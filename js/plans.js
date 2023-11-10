const days_container = []
const days = []
const length = 6;

days_container[0] = document.getElementById("day1-container")
days_container[1] = document.getElementById("day2-container")
days_container[2] = document.getElementById("day3-container")
days_container[3] = document.getElementById("day4-container")
days_container[4] = document.getElementById("day5-container")
days_container[5] = document.getElementById("day6-container")

days[0] = document.getElementById("day1")
days[1] = document.getElementById("day2")
days[2] = document.getElementById("day3")
days[3] = document.getElementById("day4")
days[4] = document.getElementById("day5")
days[5] = document.getElementById("day6")

for(let j = 0; j < length; j++){
    days[j].addEventListener("click", (e)=>{
        for(let i = 0; i < length; i++){
            if(i == j){
                days[i].setAttribute("style", "background-color: white; color: black")
                days_container[i].setAttribute("style", "display: flex")
            }
            else{
                days[i].setAttribute("style", "background-color: initial; color: white")
                days_container[i].setAttribute("style", "display: none")
            }
        }
    })
}
