// Event Listeners
// An event listener for the print button, with a handler function called printView

var printButton = document.getElementById("printable");

printButton.addEventListener("click",printView);

// An event listener for the add button, with a handler function called addTheThing

var addButton = document.getElementById("addIt");

addButton.addEventListener("click",addTheThing);

// Global Variables
// Blank array named myList. The empty square brackets create an array with no elements. This makes it ready to add elements as needed.
var myList = [];

// create a variable, myListArea, which references the element with the id of 'wishList'

var myListArea = document.getElementById("wishList"); 

// The following functions are the functions that handle the actions of the program such as, adding items to the list, clearing out the input field so more items can be added, creating the printable list.

// The addTheThing function runs when you click the Add it button.
// The addTheThing function gets the value of the text field and then passes it to a function called addToTheList. It then runs a function called resetInput.
function addTheThing() {
var theThing = document.getElementById("iWant"); // This statement just stores a reference to the element, which we can use later to get the value. It doesn't actually get the value of the input field.
// Passes theThing as an argument to the function addToTheList.
// This function gets the value and adds it to the list.
addToTheList(theThing);

// Passes theThing as an argument to the function that resets the value of the input field to blank, resetInput().
resetInput(theThing);
}

// addToTheList function takes one parameter called thingToAdd, pushes it into the myList array, and then adds it to myListArea.
// myListArea is the unordered list in the browser window.

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value); // This statement uses the push() array method to add the current value of the input field to the myList array. The push() array method adds value to the end of an array.
    var newListItem = document.createElement("li"); // The createElement() method causes a new element to be created in the current browser window.
	
	// The next statement changes the innerHTML property of the new element to put the current value of the input field into it.
	// Each variable inside the statement is a stand-in for something else.
	// The expression returns the length of the myList array and then subtracts 1 from it. We want to find out the index number of the last element of the array (the element we just added.)
	// We subtract 1 from the length of the array because arrays start counting at 0.
    newListItem.innerHTML = myList[myList.length -1];

    // The appendChild() method adds our brand new <li> element to the end of the contents of the element referenced by the myListArea variable.
    // The statement below adds a new list item to the <ul> element, which displays the new item in the browser window.
    // The myListArea global variable was created on line 20 to hold a reference to the <ul> element with an ID attribute of "wishList".
    myListArea.appendChild(newListItem);
}

// The resetInput function resets the value of the input field to blank ("") so you can enter your next list item.
// The resetInput function is called by the addTheThing function after each item is added to the list.
function resetInput(inputToReset) {
	inputToReset.value = ""; // This statement changes the value property of the element referenced by the inputToReset variable (the input field) to an empty string, which results in the text in the input field to empty out.
}

// function printView, which outputs a nicely formatted 
// view of the list 
function printView() {
	var listPage = document.getElementById("listPage"); // This variable holds a reference to the entire page.
	var formArea = document.getElementById("formArea"); // This variable holds a reference to the form area of the page.

	formArea.style.display = "none"; // This statement hides the form by changing the value of the CSS display property to "none".
	listPage.className = "print"; // Adds a new class attribute to the listPage element with a value of "print".
	// listPage.className = "print"; stated above, modifies the first div element in the document from this: <div id="listPage"> to this: <div id="listPage" class="print">.   
	myListArea.innerHTML = ""; // Clears all the items from the list.
	myList.sort(); // Sorts the array using the sort() array method. Sorts the items on the list alphabetically.

	// The next statement uses a loop to print out each value in the array.
	// This statement runs the statements between its curly braces one time for every item in the array.
	for (var i = 0; i < myList.length; i++) {
		wishList.innerHTML += "<li>" + myList[i] + "</li>"; // Adds a list item to the wishList and displays it in the browser window.
	} // This curly brace closes the loop.
}