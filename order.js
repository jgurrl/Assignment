let input = [];
let pizzaorder = [];
let price = [" "];
let pizza ={
    hawaiian: [8.95, 12.95, 14.95],
    meatlovers: [10.95, 13.95, 15.95],
    vegetarian: [9.95, 11.95, 13.95],
    supreme: [11.95, 15.95, 17.95],
    mario_spex: [12.95, 16.95, 19.95],
    garlic: [3.50, 5.00]};
let i = 0;
let pricefull = 0;
let receipt = [];
let order_location;
let size_arr = ["small", "medium", "large"];
let actual = [];
let drinks ={
    coke: [3.50, 5.50],
    d_coke: [3.50, 5.50],
    fanta: [3.00, 5.00],
    lemonade: [2.50, 4]};
var d = new Date();
var n = d.getDay(); // n =0 = sunday, n=1 = monday n=2....
let tuesday = " ";
let del_checked = 1;
let x, y,z,size;
// n = 2; test for tuesday discount
let student = " ";
let round = (num, places) => {
    const x = Math.pow(10,places);
    return Math.round(num * x) / x;
}
var checked = 0;
let n_1 = 0;
function removeitem() {
    actual.pop();
    pizzaorder.pop();
    pricefull = pricefull - price[price.length - 1]; // full price minus last item on price array
    price.pop();
    document.getElementById("out").innerHTML = " ";
    var i = 0;
    for (i = 0; i <= pizzaorder.length-1; i++) {
        document.getElementById("out").innerHTML += actual[i] + " " +pizzaorder[i] + ": " + "$" +round(price[i+1], 2) + "<br>";
    }
    document.getElementById("pout").innerHTML = "<br>"+"total: $" + round(pricefull,2) + tuesday + student;
}
function cart(x,y,z) {
    size = document.getElementById(z).value;
    var a = -1;
    for (a = -1; a < 4; a++) {
        if (size == a){
            if (( document.getElementById("student").checked === true) && (checked === 0)){
                x[a-1] = x[a-1] - (x[a-1] * 0.15);
                student = "(Student Discount - 15%)";
                checked = 1; // otherwise will keep subtracting price
            }
            if ((n === 2) && (n_1 === 0)) {
                x[a-1] = x[a-1] - (x[a-1] * 0.2);
                tuesday = "  (Tuesday Discount - 20%)";
                n_1 = 1;
            }
             actual.push(size_arr[a-1]); // finds if small med or large
             pricefull = pricefull + x[a-1]; // x is assigned based on button clicked
             price.push(x[a-1]); // adds individual price
             pizzaorder.push(y); // adds type of pizza relative to y
            break; // stops looping once size is found
        }
    }

    document.getElementById("out").innerHTML = " ";
    var i = 0;
    for (i = 0; i <= pizzaorder.length-1; i++) {
        document.getElementById("out").innerHTML += actual[i] + " " +pizzaorder[i] + ": " + "$" +round(price[i+1], 2) + "<br>";
    }
    document.getElementById("pout").innerHTML = "<br>"+"total: $" + round(pricefull,2) + tuesday + student;
}
function submit() {
    var p = 0;
    for (p = 0; p < pizzaorder.length; p++) { // no multiple order functionality. no php :^(
        input.push( actual[p]+ " " +pizzaorder[p] + ": " + "$" +price[p+1] + "<br>");
        var total = "total: $" + pricefull;
        localStorage.setItem("input", JSON.stringify(input));
        localStorage.setItem("total", JSON.stringify(total));

    }
    if ( document.getElementById("del").checked === true ) {
        order_location = document.getElementById("location").value; // if inputbox "location" is empty will not proceed
        del_checked = 1;
    }
    localStorage.setItem("del", JSON.stringify(del_checked));
    localStorage.setItem("order_location", JSON.stringify(order_location));
    window.location = "receipt.html";
}
function delivery() {
    if (document.getElementById("del").checked === true) {
        document.getElementById("possible_delivery").innerHTML = "Delivery Location: " + "<input id='location'>"
        pricefull = pricefull +5;
        pizzaorder.push("Delivery");
        actual.push(" ");
        price.push("5");
        document.getElementById("out").innerHTML = " ";
        var i = 0;
        for (i = 0; i <= pizzaorder.length-1; i++) {
            document.getElementById("out").innerHTML += actual[i] + " " +pizzaorder[i] + ": " + "$" +round(price[i+1], 2) + "<br>";
        }
        document.getElementById("pout").innerHTML = "<br>"+"total: $" + round(pricefull,2) + tuesday + student;
    }
        document.getElementById("pout").innerHTML = "total: $" + pricefull;
    }
function showdrinks() {
    document.getElementById("drinks").innerHTML = "<button onclick=\"cart(x=drinks.coke, y = \'coke\', z=\'drink'\)\">coke</button>\n" + "<button onclick=\"cart(x=drinks.d_coke, y = \'diet coke\' , z=\'drink');\">Diet Coke</button>\n" + "<button onclick=\"cart(x=drinks.fanta, y = \'fanta\' , z=\'drink')\">fanta</button>\n" + "<button onclick=\"cart(x=drinks.lemonade, y = \'lemonade\', z=\'drink');\">lemonade</button>\n";
    document.getElementById("show").innerHTML = "<button onclick=\"hide()\">Hide Drinks</button>\n";
}
function hide() {
    document.getElementById("drinks").innerHTML = " ";
    document.getElementById("show").innerHTML = "<button onclick=\"showdrinks()\">Show Drinks</button>";
}