var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var mouth = document.getElementById("mouth");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
mouth.addEventListener("click", moveUpBack);

function moveUpDown(e) {
	var robotPart = e.target;
  var top = 0;
  var id = setInterval(frame, 10) //draw every 10ms
function frame() {
	robotPart.style.top = top + '%';
	  top++;
	  if (top === 20){
      //The clearInterval() function clears the interval that was set by the setInterval() function above.
      //The setInterval() function takes two parameters: The number id value is stored in a variable and it's passed into the clearInterval() function to clear the interval.
    	clearInterval(id);
  	}
  }
}
  
function moveRightLeft(e) {
	var robotPart = e.target;
  var left = 0;  
  var id = setInterval(frame, 10) // draw every 10ms
  
function frame() {
	robotPart.style.left = left + '%';
	left++;
	if (left === 70) {
  	clearInterval(id);
  	}
  }
}

function moveUpBack(e) {
	var robotPart = e.target;
  var top = 0;
  var id = setInterval(frame, 10) //draw every 10ms
function frame() {
	robotPart.style.top = top + '%';
	  top++;
	  if (top === 73){
    	clearInterval(id);
  	}
  }
}
