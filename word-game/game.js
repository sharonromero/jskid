/* Creates a variable (replaceButton) to hold a reference to the button element. */
var replaceButton = document.getElementById("replaceButton");

/* This code uses the above reference to attach a function (replaceIt) to an event (click). */
replaceButton.addEventListener("click", replaceIt);

/* Creates a variable to reference the div element where the finished story will appear. */
function replaceIt () {
	var storyDiv = document.getElementById("story");

/* The next section of code retrieves the values from the HTML input fields. */

/* Creates a variable to hold the value of the first HTML input field. */
	var adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";

/* INSERT MORE VARIABLE DEFINITIONS HERE */

/* Creates a variable that will be used to put the story together. */
/* Puts the title of the story into theStory and puts the title inot the h1 element. */
	var theStory = "<h1>Douglas's Dance Party</h1>";

/* Adds the first part of the story to theStory by using the combination concatenation/assignment operator, +=. */
/* This operator adds the new value to any value that's already stored in the variable. */
	theStory += "One " + adj1 + " day,";

/* PUT THE REST OF THE STORY HERE, USING THE += OPERATOR */

/* Using innerHTML to display the value of theStory inside the div we created for the story. */
	storyDiv.innerHTML = theStory;
}