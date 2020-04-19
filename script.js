// Questions
var questions = [
    {
        q: "Who invented JavaScript?",
        c: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
        a: 2
    },
    {
        q: "What is the HTML tag under which one can write the JavaScript code?",
        c: ["javascript", "scripted", "script", "js"],
        a: 2
    },
    {
        q: "How do you create function in Javascript?",
        c: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
        a: 1
    }
];


// When page starts
$(document).ready(function() {
    // Logs on load
    console.log('Ready')
    var titleContainer = $("")
    var qtnContainer = $("")

    $("start-btn").on("click", function() {
        timeRun()
        console.log("Start Button Pressed")
    })
    function timeRun() {

    }

    $("high-scores").on("click", function() {

        console.log(score)
        console.log("High Scores")
    })

    $(".btn-clicked").on("click", function() {
        console.log("Any button clicked")
    })

}) 
