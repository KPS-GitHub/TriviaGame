// Variables
//  -counters
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//  -question array
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
    // clear main div
    $("#main").empty();
    // div for timer
    $("#main").append("<div id='timer'></div>");
    // for loops to generate questions and answer options
    // generate questions
    for (var i = 0; i < questionArray.length; i++) {
        var quizQuestion = $("<div>");
        quizQuestion.attr("id", "question" + i);
        quizQuestion.attr("class", "row");
        quizQuestion.text(questionArray[i].question);
        $("#main").append(quizQuestion);
        $("#main").append("\n");
    // generate answer options for each question
        for (var j = 0; j < questionArray[i].answers.length; j++) {
            // make the input tag
            var quizAnswerInput = $("<input type='radio'></input>");
            quizAnswerInput.attr("name", "question" + (i));
            quizAnswerInput.text("question"); // questionArray[i].answers[j]
            // make the label tag
            var quizAnswerLabel = $("<label for='option" + (i) + "'>" + questionArray[i].answers[j] + "</label>");
            console.log("quizAnswerLabel: " + quizAnswerLabel);
            // render label and input for the created question in the appropriate question id div
            $("#question" + i).append(quizAnswerLabel);
            $("#question" + i).append(quizAnswerInput);
            $("#question" + i).append("<br>");
        }
    }
})

$("#submitAnswers").on("click", function() {
    // stop timer process
    
    // total correct, incorrect, and unanswered questions

    // wipe #main div and render scores + any relevant messages

})

});