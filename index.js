
//creating variables

let Arrows = document.querySelectorAll(".fa-angle-down");
let hiddenAnswers = document.querySelectorAll(".hidden-answer");
let clicked;

for (let i = 0; i < Arrows.length; i++) {
    Arrows[i].addEventListener("click", () => {


        for (let j = 0; j < hiddenAnswers.length; j++) {
            hiddenAnswers[j].classList.remove("show-answer");
            hiddenAnswers[j].classList.add("hidden-answer");
            Arrows[j].classList.remove("rotate-arrow-to-up");
        }
        if (Arrows[i] != clicked) {
            if (Arrows[i].classList.contains("fa-angle-down")) {
                clicked = Arrows[i];
                Arrows[i].classList.add("rotate-arrow-to-up");
                hiddenAnswers[i].classList.remove("hidden-asnwer");
                hiddenAnswers[i].classList.add("show-answer");
            }
        } else {
            clicked = "";
            Arrows[i].classList.remove("rotate-arrow-to-up");
        }
    });


}



