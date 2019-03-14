var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // Sets the innerHTML property of the div element referenced by the todayDate variable to the value of d (which was created as a Date object).
    // Displays the current date in the todaysdate div.
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // Gets the current day of the week from the d variable.
    var dayOfWeek = d.getDay();

    // Sets a variable, called youShould, to hold the string that will contain the message for each day.
    var youShould;

    // The condition part of the switch statement that will evaluate the value of the dayOfWeek variable.
    switch (dayOfWeek) {
    	// The first case for the value 0, or Sunday.
    	case 0:
    	// Sets the value of youShould when it's Sunday.
    	youShould = "Take it easy. You've earned it!";
    	// The break statement to end the switch statement when the case is true.
    	break;
    }
    
    // todo: output the value of youShould into the thingToDo div
}