var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var weather = ["Sunny", "Partly Sunny", "Cloudy", "Foggy", "Snowing", "Hailing", "Thunderstorms", "Sleet", "Partly Coudy", "Rainy"];

// minTemp and maxTemp variables that hold the minimum and maximum temperatures that the random weather program will output.
minTemp = 0;
maxTemp = 100;

generateWeather();

function generateWeather() {
	// Starts a for loop that will loop through each of the days of the week.
	for (var i = 0; i < days.length; i++) {
		// the weatherToday variable gets a random element from the weather array.
		var weatherToday = weather[Math.floor(Math.random() * weather.length)];
		// tempToday variable gets a random temperature between the values of the minTemp and maxTemp variables.
		var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
		// Uses innerHTML to output the values of weatherToday and tempToday inside the div element.
		document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b> " + weatherToday + " and " + tempToday + " degrees.</div>";
		}
	}

