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
    /*
    todo: 
     * reset the form
     * start a loop
     * get daily sandwich order
     * calculate total price
     * figure out if there's enough money
     * if so: subtract money, increment number of lunches, and start loop over
     * if not: display 'out of money' message
     * display total lunches after loop exits
    */
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