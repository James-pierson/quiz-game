// Global variables
var qtnDisplay = document.querySelector("#question-ask")
var ansDisplay = document.querySelector("#answers")
var frontPage = document.getElementsByClassName("front-page-container")
var qtnContainer = document.querySelector("questions-container")
var startBtn = document.getElementById("start")
var timerVar = document.querySelector("time")
var score = 0;
var time = 0;


// Questions
var questions = [
    {
        t: "Who invented JavaScript?",
        c: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
        a: 2
    },
    {
        t: "What is the HTML tag under which one can write the JavaScript code?",
        c: ["<javascript>", "<scripted>", "<script>", "<js>"],
        a: 2
    },
    {
        t: "How do you create function in Javascript?",
        c: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
        a: 1
    }
];

// Functions for display
function startQuiz() {

    for (i = 75; i >= time; i--) {
        console.log(i)
    }

    console.log(questions)
}



function runQuiz() {
    
}


// Add event listener to button

startBtn.addEventListener("click", startQuiz)

// Timer in the left corner 
