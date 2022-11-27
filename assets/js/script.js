const startButton = document.getElementById('start-btn')
const questionDisplayElement = document.getElementById('questionDisplay')

startButton.addEventListener('click', this.startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionDisplayElement.classList.remove('hide')
    setNextQuestion();
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
            question: "What do monkyes sleep on?",
            choices: ["Floor", "Tree", "Bed", "Bathtub"],
            answer: 3
        },

    ]
}

function checkanswer() {

}

function gameover() {

}

