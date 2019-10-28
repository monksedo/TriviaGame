var timer = 60;

var inSecond;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Question and answer array
var questions = [{
   question: "1. What did Susan B. Anthony do?",
   answerList: [" make the first flag of the United State",
      " founded the Red Cross",
      " the first woman elected in the House of Represetatives",
      " fought for women's rights"],
   answer: 3
}, {
   question: "2. What is one reason colonists came to America?",
   answerList: [" freedom",
      " for the experience traveling across the ocean",
      " to join a civic group",
      " none of the answer"],
   answer: 0
}, {
   question: "3. What does the President's Cabinet do?",
   answerList: [" commands the U.S. Armed Forces",
      " makes laws",
      " advices the President",
      " all of these answer"],
   answer: 2
}, {
   question: "4. What do we show loyalty to when we say the Pledge of Allegiance?",
   answerList: [" the President",
      " Congress",
      " the state where you live",
      " the United States"],
   answer: 3
}, {
   question: "5. What are the two major political parties in the United States?",
   answerList: [" Reform and Green",
      " Democratic-Republican and Whigs",
      " American and Bull-Moose",
      " Democratic and Republican"],
   answer: 3
}, {
   question: "6. Name one war fought by the United States in the 1900s",
   answerList: [" War of 1812",
      " Revolutionary War",
      " Civil War",
      " World War I"],
   answer: 3
}, {
   question: "7.What is an amendment?",
   answerList: [" An introduction",
      " a change (to the Constitution)",
      " the beginning of the Declaration of Independence",
      " the Preamble to the Constitution"],
   answer: 1
}];

$("#start").on("click", function () {

   // Hide Start button
   $(this).hide();

   // Hide Game Rules
   $("#game-rule").hide();

   // Display quiz timer
   $("#timer").html("<h3>Time Remaining: 60 seconds</h3><br>");

   // Start timer countdown
   startQuiz();

   // Question 1
   $("#question1").html("<strong>" + questions[0].question + "</strong>");
   $("#answer1").html("<div class='answer'>" + "<p><input type='radio' name='answer1' value='0'>" +
      "<label>" + questions[0].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer1' value='1'>" +
      "<label>" + questions[0].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer1' value='2'>" +
      "<label>" + questions[0].answerList[2] + "</label></p>" +
      "<p><input type='radio' name='answer1' value='3'>" +
      "<label>" + questions[0].answerList[3] + "</label></p>" + "</div>"
   );

   // Question 2
   $("#question2").html("<strong>" + questions[1].question + "</strong>");
   $("#answer2").html("<div class='answer'>" + "<p><input type='radio' name='answer2' value='0'>" +
      "<label>" + questions[1].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer2' value='1'>" +
      "<label>" + questions[1].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer2' value='2'>" +
      "<label>" + questions[1].answerList[2] + "</label></p>" +
      "<p><input type='radio' name='answer2' value='3'>" +
      "<label>" + questions[1].answerList[3] + "</label></p>" + "</div>"
   );

   // Question 3
   $("#question3").html("<strong>" + questions[2].question + "</strong>");
   $("#answer3").html("<div class='answer'>" + "<p><input type='radio' name='answer3' value='0'>" +
      "<label>" + questions[2].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer3' value='1'>" +
      "<label>" + questions[2].answerList[1] + "</label><p>" +
      "<p><input type='radio' name='answer3' value='2'>" +
      "<label>" + questions[2].answerList[2] + "</label><p>" +
      "<p><input type='radio' name='answer3' value='3'>" +
      "<label>" + questions[2].answerList[3] + "</label></p>" + "</div>"
   );

   // Question 4
   $("#question4").html("<strong>" + questions[3].question + "</strong>");
   $("#answer4").html("<div class='answer'>" + "<p><input type='radio' name='answer4' value='0'>" +
      "<label>" + questions[3].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer4' value='1'>" +
      "<label>" + questions[3].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer4' value='2'>" +
      "<label>" + questions[3].answerList[2] + "</label></p>" +
      "<p><input type='radio' name='answer4' value='3'>" +
      "<label>" + questions[3].answerList[3] + "</label></p>" + "</div>"
   );

   // Question 5
   $("#question5").html("<strong>" + questions[4].question + "</strong>");
   $("#answer5").html("<div class='answer'>" + "<p><input type='radio' name='answer5' value='0'>" +
      "<label>" + questions[4].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer5' value='1'>" +
      "<label>" + questions[4].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer5' value='2'>" +
      "<label>" + questions[4].answerList[2] + "</label></p>" +
      "<p><input type='radio' name='answer5' value='3'>" +
      "<label>" + questions[4].answerList[3] + "</label></p>" + "</div>"
   );
   // Question 6
   $("#question6").html("<strong>" + questions[5].question + "</strong>");
   $("#answer6").html("<div class='answer'>" + "<p><input type='radio' name='answer6' value='0'>" +
      "<label>" + questions[5].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer6' value='1'>" +
      "<label>" + questions[5].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer6' value='2'>" +
      "<label>" + questions[5].answerList[2] + "</label></p>" +
      "<p><input type='radio' name='answer6' value='3'>" +
      "<label>" + questions[5].answerList[3] + "</label></p>" + "</div>"
   );
   // Question 7
   $("#question7").html("<strong>" + questions[6].question + "</strong>");
   $("#answer7").html("<div class='answer'>" + "<p><input type='radio' name='answer7' value='0'>" +
      "<label>" + questions[6].answerList[0] + "</label></p>" +
      "<p><input type='radio' name='answer7' value='1'>" +
      "<label>" + questions[6].answerList[1] + "</label></p>" +
      "<p><input type='radio' name='answer7' value='2'>" +
      "<label>" + questions[6].answerList[2] + "</label></p>"
      + "<p><input type='radio' name='answer7' value='3'>" +
      "<label>" + questions[6].answerList[3] + "</label></p>" + "</div>"
   );

   // Submit button
   $("#submit").html("<button id='submit' class='btn'>Submit</button>");

   // Click event runs keepingScore() and displayResults() when user clicks Done button
   $("#submit").on("click", function () {

      // Keeping track of scores
      keepingScore();

      // Display results
      displayResults();

   });
});

// Timer countdown function
function startQuiz() {

   clearInterval(inSecond);
   inSecond = setInterval(decrement, 1000);
}

// Timer count down function
function decrement() {

   //  Timer count down by second
   timer--;

   //  Show the number in the #time tag
   $("#timer").html("<h3>60 seconds count down: " + timer + " seconds</h3>" + "<br>");

   if (timer === 0) {

      // Run stop function to stop timer countdown
      stopQuiz();

      keepingScore();
      displayResults();

   }
}

function stopQuiz() {

   // clear timer
   clearInterval(inSecond);
}

// Display results
function displayResults() {
   $("#game-rule").hide();
   $("#timer").hide();
   $("#question1").hide();
   $("#answer1").hide();
   $("#question2").hide();
   $("#answer2").hide();
   $("#question3").hide();
   $("#answer3").hide();
   $("#question4").hide();
   $("#answer4").hide();
   $("#question5").hide();
   $("#answer5").hide();
   $("#question6").hide();
   $("#answer6").hide();
   $("#question7").hide();
   $("#answer7").hide();
   $("#submit").hide();

   $("#resultsMessage").html("<h3>Your Results!</h3>");
   $("#correct").html("Correct Answers: " + correctAnswers);
   $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
   $("#unanswered").html("Unanswered: " + unanswered);
}

// Score tracking
function keepingScore() {

   var userAnswer1 = $("input[name='answer1']:checked").val();
   var userAnswer2 = $("input[name='answer2']:checked").val();
   var userAnswer3 = $("input[name='answer3']:checked").val();
   var userAnswer4 = $("input[name='answer4']:checked").val();
   var userAnswer5 = $("input[name='answer5']:checked").val();
   var userAnswer6 = $("input[name='answer6']:checked").val();
   var userAnswer7 = $("input[name='answer7']:checked").val();

   // Question 1
   if (userAnswer1 === undefined) {

      unanswered++;
   }
   else if (userAnswer1 == questions[0].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 2
   if (userAnswer2 === undefined) {

      unanswered++;
   }
   else if (userAnswer2 == questions[1].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 3
   if (userAnswer3 === undefined) {

      unanswered++;
   }
   else if (userAnswer3 == questions[2].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 4
   if (userAnswer4 === undefined) {

      unanswered++;
   }
   else if (userAnswer4 == questions[3].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 5
   if (userAnswer5 === undefined) {

      unanswered++;
   }
   else if (userAnswer5 == questions[4].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 6
   if (userAnswer6 === undefined) {

      unanswered++;
   }
   else if (userAnswer6 == questions[5].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }

   // Question 7
   if (userAnswer7 === undefined) {

      unanswered++;
   }
   else if (userAnswer7 == questions[6].answer) {

      correctAnswers++;
   }
   else {

      incorrectAnswers++;
   }
}