// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    // Makes a call to the resetForm() function and initializes a variable for tracking the current day
    resetForm();
    var day = 0;
    // Creates a loop that will buy sandwiches until you're out of money.
    while (money > 0) {
        day++;
        // Gets the current price of sandwiches by making a call to the getSandwichPrice() function and assigning the return value to a variable
        var priceToday = getSandwichPrice();
        // Gets the number of sandwiches that the user entered into the form field
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        // Calculates the total price by multiplying the number of sandwiches that you want by the current sandwich price
        var totalPrice = priceToday * numberOfSandwiches;
        // Finds out whether there's enough money to buy the sandwiches
        if(money >= totalPrice) {
            // Subtracts the total price from the current money balance if there is enough money
            money = money - totalPrice;
            // Increments the lunches variable, which keeps track of how many lunches were purchased
            lunches++;
            // Outputs a message to tell the user the price of the sandwiches he just bought and how much money he has left
            // The toFixed() method converts a number to a string while keeping the number of decimals specified within the parentheses
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";
        // The else clause handles cases where the amount of money left isn't enough to buy the specified number of sandwiches
        } else {
            // When the else clause runs, a special message will output for when the user doesn't have enough money for another lunch
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money.</p>";
            // Sets the value of money equal to 0 in order to prevent the loop from running again
            money = 0;
        }
    } 
        // When the loop completes, output the total number of lunches the user was able to buy
        document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}