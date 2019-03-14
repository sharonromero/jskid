// declared variables
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

// An empty array called answers
// Because this array is created outside of all the functions in the program, it is usable anywhere in the program.
// A variable that can be used anywhere inside a program is called a global variable.
var answers = []; 

// Listens for clicks on the submit button and call the getAnswer() function when they happen
// Clicks and getAnswer are the two arguments that are passed, clicks is the event that's being listened for and getAnswer is the function that will be called when the event happens.
submit.addEventListenter("clicks",getAnswer);

// Calls the function to ask the first question
askQuestion(0);

/* askQuestion() asks a question, based on the number passed to it */
function askQuestion(questionNumber) {
	answer.style.display = "block"; // This statement causes the form to show up in the Result pane.

	// Changes the length of the answers array to match the number of the question being asked.
	answers.length = questionNumber;

	switch (questionNumber) {
		case 0:
			question.innerHTML = "Are you ready to begin the story?";
			break;
		case 1:
			question.innerHTML = "Go to Mars, or stay home?";
			break;
		case 2:
			question.innerHTML = "Risk it, or go home.";
			break;
		default:
			break;			
	}
}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function*/
function getAnswer() {
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array */
function continueStory(answerNumber) {
}

/* theEnd() ends the story and hides the input field */
function theEnd() {
}