// These three variables hold the values (the list items) that are input by the user before they get written to the web page.// 
var item1;
var item2;
var item3;

// This tells JS to watch for clicks on the button (the button's id is changeList). If it detects a click on the button, then it runs the function newList. // 
document.getElementById("changeList").onclick = newList;

// The newList function asks the user for new list items. It gathers three new list items from the user using the prompt command. //
// The last line of this code tells JS to run the function updateList. //
function newList() {
  item1 = prompt("Enter a new first thing: ");
  item2 = prompt("Enter a new second thing: ");
  item3 = prompt("Enter a new third thing: ");
  updateList();
}

// The updateList function tells JS to update the three list items. The updateList function finds each list item using their id attribute values.//
// It then uses a method called innerHTML to change the value that's between the starting and ending tags of the list item to the values that the user entered into the prompt.//
// After the updateList function is run, the values of the three list items change to the new values entered by the user. //
function updateList() {
	document.getElementById("firstThing").innerHTML = item1;
	document.getElementById("secondThing").innerHTML = item2;
	document.getElementById("thirdThing").innerHTML = item3;
}