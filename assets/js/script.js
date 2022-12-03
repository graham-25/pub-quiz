const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('questionBox')

const questionElement = document.getElementById('questionDisplay')
const answerButtonElement = document.getElementById('answer-btn')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', this.startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    displayNextQuection()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionBoxElement.classList.remove('hide')
    displayNextQuection()
}

function displayNextQuection() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question       //pulling question from array
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', this.checkanswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function checkanswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
        answer: [
            {text: "2", correct: false},
            {Text: "4", correct: false},
            {text: "5", correct: true},
            {text: "7", correct: false}
        ]
        
    },

    {
        question: "Who sang living on a prere?",
        answer: [
            {text: "Westlife", correct: false},
            {text: "BoyGeorge", correct: false}, 
            {text: "Bonjoby", correct: true}, 
            {text: "TheBeatels", correct: false}
        ]
         
    },

    {
        question: "What colour is grass?",
        answer: [
            {text: "Blue", correct: false}, 
            {text: "Green", correct: true}, 
            {text: "Black", correct: false}, 
            {text: "Red", correct: false}
        ]
    },

    {
        question: "What do monkyes (People) sleep on?",
        answer: [
            {text: "Floor", correct: false}, 
            {text: "Tree", correct: false}, 
            {text: "Bed", correct: true}, 
            {text: "Bathtub", correct: false}
        ]
    }

]
