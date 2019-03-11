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

// function addToTheList, which takes one parameter, 
called thingToAdd, pushes it into the myList array, and then 
adds it to myListArea

function addToTheList(thingToAdd) {
    

}

// function resetInput, which resets the value of the
input field to blank ("")
function resetInput(inputToReset) {

}

// function printView, which outputs a nicely formatted 
view of the list 
function printView() {
  
}