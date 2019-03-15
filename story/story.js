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
submit.addEventListener("clicks",getAnswer);

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

// getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function.
function getAnswer() {
	cleanInput = yourAnswer.value.toUpperCase(); // Gets the value from the input field and converts it to uppercase letters.
	answers.push(cleanInput); // Uses the push array method to add the user's answer as a new element at the end of the answers array.
	yourAnswer.value = ""; // Resets the input field, clearing the current value out of it.
	continueStory(answers.length - 1); // Calls the continueStory() function, passing it the number of the last element in the answers array.
}

// continueStory() displays part of the story or an error based on the value of an item in the answers array
// continueStory() function uses if...else statements to determine whether the user entered a valid value and then to show the correct part of the story based on that input.
function continueStory(answerNumber) {
	// Using a switch statement to use the value of the argument to find out what question is being asked.
	switch (answerNumber) {
		// Says that if the user responded to the first question, run the if statement
		case 0:
		// Says if the first element in the array (which corresponds to the first question) is set to "YES", run the following statments.
		if (answers[0] === "YES") {
			// Gets the HTML from inside the div element with an ID of answer01 and overwrites the contents of the div with the ID of story.
			// When you answer "Yes" to the question "Are you ready to begin the story?", the first part of the story will display.
			story.innerHTML = document.getElementById("answer01").innerHTML;
			// calls the askQuestion() function and tells it to ask question #1. This causes the askQuestion function to ask "Go to Mars, or stay home?".
			askQuestion(1);
			// If the user didn't answer "Yes", the else clause will run.
			// Another if statement is put inside of the else clause so we can test for a value of "NO", but only if the answer wasn't "YES". 
		} else if (answers[0] === "NO") {

			// If the answer is "NO", the story div's innerHTML is set equal to the appropriate message.
			story.innerHTML = document.getElementById("answer02").innerHTML;
			// Since the user said they aren't ready to begin the story yet, ask them the first question again until they are ready.
			askQuestion(0);
		// Says to do the following if the user didn't enter Yes or No.	
		} else {

			// Sets the value of the story div to an error message, telling them to enter either Yes or No.
			story.innerHTML = document.getElementById("err0").innerHTML;
			// Asks the first question again.
			askQuestion(0);
		} 
		break;
		case 1:
		break;
		case 2:
		break;
		default:
		break;

	}

}

/* theEnd() ends the story and hides the input field */
function theEnd() {
}