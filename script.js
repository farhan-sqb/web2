function myFunction() {
    var x = document.getElementById("topNavigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}