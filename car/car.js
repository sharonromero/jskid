var dreamCar = {
  make: "Norman Timbs",
  model: "Special",
  color: "dodgerBlue",
  year: 1947,
  bodyStyle: "Luxury Car",
  price: 5000
};

// Updates the price of the car when the program runs.
document.getElementById("pricetag").innerHTML = dreamCar.price;

// Updates the model year on the price tag.
document.getElementById("modelyear").innerHTML = dreamCar.year;

// Updates the color of the car.
document.getElementById("body").style.backgroundColor = dreamCar.color;

// Writes the make and model of the car on the side of the car.
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

