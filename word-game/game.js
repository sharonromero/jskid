/* Creates a variable (replaceButton) to hold a reference to the button element. */
var replaceButton = document.getElementById("replaceButton");

/* This code uses the above reference to attach a function (replaceIt) to an event (click). */
replaceButton.addEventListener("click",replaceIt);

/* Creates a variable to reference the div element where the finished story will appear. */
function replaceIt() {
	var storyDiv = document.getElementById("story");

/* The next section of code retrieves the values from the HTML input fields. */

/* Creates variables to hold the values of the HTML input fields. */
	var adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";
	var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
	var room1 = "<span class='replacement'>"+ document.getElementById("room1").value + "</span>";
	var color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
	var plNoun = "<span class='replacement'>"+ document.getElementById("plNoun").value + "</span>";
	var verbPast1 = "<span class='replacement'>"+ document.getElementById("verbPast1").value + "</span>";
	var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
	var musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
	var room2 = "<span class='replacement'>"+ document.getElementById("room2").value + "</span>";
	var exclamation = "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
	var verbPast2 = "<span class='replacement'>"+ document.getElementById("verbPast2").value + "</span>";
	var adj2 = "<span class='replacement'>"+ document.getElementById("adj2").value + "</span>";
	var animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
	var city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
	var verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>";

/* Creates a variable that will be used to put the story together. */
/* Puts the title of the story into theStory and puts the title into the h1 element. */
	var theStory = "<h1>Jack's Dance Party</h1>";

/* Adds the first part of the story to theStory by using the combination concatenation/assignment operator, +=. */
/* This operator adds the new value to any value that's already stored in the variable. */
	theStory += "One " + adj1 + " day,";
	theStory += " Jack was " + verbIng;
	theStory += " in his " + room1;
	theStory += " , reading a book about " + color;
	theStory += " " + plNoun + ".<br><br>";
	theStory += "As he " + verbPast1;
	theStory += " his " + beverage;
	theStory += ", he heard " + musicType; 
	theStory += " music playing in the " + room2 + ".<br><br>";
	theStory += exclamation + "! he exclaimed, as he ";
	theStory += verbPast2 + " down the stairs to join the ";
	theStory += adj2 + " party.<br><br>";
	theStory += " Jack danced the " + animal;
	theStory += " Dance, the " + city + " Shake,";
	theStory += " and took the prize for dancing the best Electric " + verb + ".<br><br>";

/* PUT THE REST OF THE STORY HERE, USING THE += OPERATOR */

/* Using innerHTML to display the value of theStory inside the div we created for the story. */
	storyDiv.innerHTML = theStory;
}