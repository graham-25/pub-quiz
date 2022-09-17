//waits for dom to finish loading before running game.
//Get the button elements and add event listeners to them.
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "submit") {
                alert("You clicked submit");
            }else{
                let gameType = this.alert(message?: any): void
                alert("You clicked" $[gameType]);
            }
        })
    }
}

function startgame() {

}

function displayquection() {
    let questions = [
        {
            question: "What is the capital of United Kingdom?",
            choices: ["Manchester", "Birmington", "London", "Birmingham"],
            answer: 2
        },
        {
            question: "What is the capital of United States?",
            choices: ["Califfornia", "New York", "Miami", "Florida"],
            answer: 1
        },
        {
            question: "How many Spice Girls was in the group?",
            choices: ["2", "8", "5", "7"],
            answer: 3
        },
        {
            question: "Who sang living on a prere?",
            choices: ["Westlife", "BoyGeorge", "Bonjoby", "TheBeatels"],
            answer: 3
        },
        {
            question: "What colour is grass?",
            choices: ["Blue", "Green", "Black", "Red"],
            answer: 2
        },
        {
            question: "What do monkyes sleep on?"
            choices: ["Floor", "Tree", "Bed", "Bathtub"],
            answer: 3
        }

    ];
}

function checkanswer() {

}

function gameover() {

}

