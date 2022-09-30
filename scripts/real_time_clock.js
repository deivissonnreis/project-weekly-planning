
function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("min");

    var h = new Date().getHours();
    var m = new Date().getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    hours.innerHTML = h;
    minutes.innerHTML = m;
}

var interval = setInterval(clock, 1000);


function actualDay(){

    var day = document.getElementById("day");
    var d = new Date().toLocaleString("pt-BR", {dateStyle: "long"});

    day.innerHTML = d;

}

var interval = setInterval(actualDay, 1000);