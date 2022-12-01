const startButton = document.getElementById('start-btn')
const questionBoxElement = document.getElementById('questionBox')

const questionElement = document.getElementById('questions')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', this.startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionBoxElement.classList.remove('hide')
    displayNextQuection()
}

function displayNextQuection() {
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
    questionElement.innerText = questions.question       //pulling question from array
}

function checkanswer() {

}

function gameover() {

}

const questions = [
    {
        question: "What is the capital of United Kingdom?",
        answer: [
            {text: "Manchester", correct: false }, 
            {text: "Birmington", correct: false }, 
            {text: "London", correct: true }, 
            {text: "Birmingham", correct: false }
        ]
    },

    {
        question: "What is the capital of United States?",
        answer: [
            {text: "Califfornia", correct: false },
            {text: "New York", correct: true },
            {text: "Miami", correct: false },
            {text: "Florida", correct: false}
        ]
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
