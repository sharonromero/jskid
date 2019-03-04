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
	var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
	var room1 = "<span class='replacement'>"+ document.getElementById("room1").value + "</span>";
	var color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
	var plNoun = "<span class='replacement'>"+ document.getElementById("plNoun").value + "</span>";
	var verbPast = "<span class='replacement'>"+ document.getElementById("verbPast").value + "</span>";
	var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";

/* Creates a variable that will be used to put the story together. */
/* Puts the title of the story into theStory and puts the title into the h1 element. */
	var theStory = "<h1>Jack's Dance Party</h1>";

/* Adds the first part of the story to theStory by using the combination concatenation/assignment operator, +=. */
/* This operator adds the new value to any value that's already stored in the variable. */
	theStory += "One " + adj1 + " day,";
	theStory += " Jack was " + verbIng;

/* PUT THE REST OF THE STORY HERE, USING THE += OPERATOR */

/* Using innerHTML to display the value of theStory inside the div we created for the story. */
	storyDiv.innerHTML = theStory;
}