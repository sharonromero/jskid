// listens for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // gets form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    // gets the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // gets the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // creates the output
    var theOutput = "<p>Thank you for your order.</p>";

    // Outputs the delivery price, if there is one. Prints out a free delivery message if the deliveryPrice is 0, otherwise, it prints out the delivery charge.
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
    }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // displays the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;
    
    // Calculates extraCharge, if there is one. It checks the typePizza variable to see if the Supreme pizza was selected.
    // If the Supreme pizza was selected it will multiply the number of pizzas by two in order to get the number of dollars to add to the price.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }
    
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;
    
    // Calculates delivery price, if there is one
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    return deliveryPrice;
}