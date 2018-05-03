// Variables
// -counters
var correct = 0;
var incorrect = 0;
var unanswered = 0;
// -question array
var questionArray = [
    {   question: "Question 1",
        answers: ["option 1", "option 2", "option 3", "option 4"],
        correctAnswer: "option 1", 
    },
    {   question: "Question 2",
        answers: ["option 1", "option 2", "option 3", "option 4"],
        correctAnswer: "option 1", 
    },
    {   question: "Question 3",
        answers: ["option 1", "option 2", "option 3", "option 4"],
        correctAnswer: "option 1", 
    }
];

// Functionality
$(document).ready(function() {
 
// new game button (reset)
$("#newGame").on("click", function() {
    console.log("registered new game click");
    // clear main div
    $("#main").empty();
    console.log("emptied #main");
    // for loops to generate questions and answer options
    // generate questions
    for (var i = 0; i < questionArray.length; i++) {
        var quizQuestion = $("<h3>");
        quizQuestion.attr("id", "question" + i);
        quizQuestion.text(questionArray[i].question);
        $("#main").append(quizQuestion);
        $("#main").append("\n");
    // generate answer options for each question
        for (var j = 0; j < questionArray[i].answers.length; j++) {
            // make the input tag
            var quizAnswerInput = $("<input type='radio'></input>");
            quizAnswerInput.attr("name", "option" + (j+1));
            quizAnswerInput.attr("id", "option" + (j+1));
            quizAnswerInput.text("question"); // questionArray[i].answers[j]
            // make the label tag
            var quizAnswerLabel = $("<label for='option" + (j+1) + "'>" + questionArray[i].answers[j] + "</label>");
            console.log("quizAnswerLabel: " + quizAnswerLabel);
            $("#question" + i).append(quizAnswerLabel);
            $("#question" + i).append(quizAnswerInput);
            $("#question" + i).append("<br>");
        }
    }
})
});