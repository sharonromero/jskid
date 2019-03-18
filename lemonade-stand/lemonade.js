var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Sets min and max temperatures
var maxTemp = 100;
var minTemp = 0;

// Cost (to you) of a cup of lemonade
var lemonadeCost = .25;

// Array for storing daily temps
var dailyTemp = [];

// Calls the function when the program loads
generateWeather();

// Generates weather for the week
function generateWeather() {
	// Variables to hold the current weather and temperature
	var weatherToday;
	var tempToday;
	// Starts a for loop that will loop through each of the days of the week.
	for (var i = 0; i < days.length; i++) {
		// the weatherToday variable gets a random element from the weather array.
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
		// Gets a random temperature between the values of the minTemp and maxTemp variables.
		tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
		// Stores the temperature in the dailyTemp array.
		dailyTemp[i] = tempToday;
		// Outputs a message describing the day's weather.
		document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
		}
	}

// Calculates glasses of lemonade sold.
function openTheStand() {
	// Holds the daily number of glasses sold.
	var glassesSold = 0;
	// Holds the weekly total
	var totalGlasses = 0;
	// Holds the number of glasses left to sell.
	var glassesLeft = 0;
	// Clear previous results.
	resetForm();
	// Gets the values from the form fields.
	var numGlasses = Number(document.getElementById("numGlasses").value);
	var glassPrice = Number(document.getElementById("glassPrice").value);
	// A new loop to cycle through each day of the week
	for (var i = 0; i < days.length; i++) {
		// Calculates the number of glasses sold.
		// Glasses sold depends on temp and price.
		glassesSold = Math.floor(dailyTemp[i] / glassPrice);
		// Calculates how many glasses are left.
		glassesLeft = numGlasses - totalGlasses;
		// Checks whether you're out of lemonade.
		// If glassesSold is greater than what we have left, sell what we have left by setting the glassesSold variable equal to what's left.
		if (glassesSold > glassesLeft) {
			glassesSold = glassesLeft;
		}
		// Increases the weekly total of glasses sold.
		totalGlasses = glassesSold + totalGlasses;
		// Display the daily totals.
		document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
		}
		displayResults(numGlasses, glassPrice, totalGlasses);
	}
// Resets the game so that a new order can be placed.
function resetForm() {
	document.getElementById("result").innerHTML = "";
}