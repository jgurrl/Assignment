function check() {
    var un = document.getElementById("uname").value;
    var pw = document.getElementById("password").value;
    var username = "username";
    var password = "password";
    if ((password === pw) && (un === username)) { // go fuck yourself
        window.location = "order.html";
    } else {
        document.getElementById("incorrect").innerHTML = "Incorrect Username/Password"
    }
}