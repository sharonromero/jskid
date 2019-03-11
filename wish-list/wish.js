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

// function resetInput, which resets the value of the
// input field to blank ("")
// function resetInput(inputToReset) {

// }

// function printView, which outputs a nicely formatted 
// view of the list 
function printView() {
  
}