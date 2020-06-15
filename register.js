let email;
let f_name;
let surname;
let address;
let date;
let number;
let checker= [];
let full = 0;

function store() {

    email = document.getElementById("0").value ;
    surname = document.getElementById("1").value;
    address = document.getElementById("2").value;
    f_name = document.getElementById("3").value;
    number = document.getElementById("4").value;

    date = new Date();

    checker[0] = email;
    checker[1] = surname;
    checker[2] = address;
    checker[3] = f_name;
    checker[4] = number;
    var i = 0;
    for (i=0; i < checker.length; i++) {
        if (checker[i] === " ") {
            document.getElementById("missing").innerHTML = "please fill all fields"
        } else  {
            full = full +1 ;
        }
    }
    var check;
    check = email.includes("@");
    if (check === false) {
        document.getElementById("missing").innerHTML = "Please enter a valid email address."
        full = 0;
    }

    if (isNaN(number) === true ) {
        document.getElementById("missing").innerHTML = "Please enter a valid phone number."
        full = 0;
    }
    if (full === 5) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("address", JSON.stringify(address));
        localStorage.setItem("f_name", JSON.stringify(f_name));
        localStorage.setItem("number", JSON.stringify(number));
        localStorage.setItem("surname", JSON.stringify(surname));
        window.location = "order.html"
    }
}
