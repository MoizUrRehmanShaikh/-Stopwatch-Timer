let start = document.getElementById("start");
let store = document.getElementById("store");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");

let display = document.getElementById("display");
let ul = document.getElementById("listlap");

let second = 0;
let timer = null;

let array = [];


// START

start.addEventListener("click", function () {

    timer = setInterval(function () {

        updateTime();

        start.disabled = true;

    }, 1000);

});


// STORE

store.addEventListener("click", function () {

    if (array.length < 5) {

        array.push(display.innerText);

    } else {

        second = 0;

        clearInterval(timer);

        display.innerText = "00:00:00";

        start.disabled = false;

        array = [];

    }


    ul.innerHTML = "";


    for (let value of array) {

        ul.innerHTML += `
            <li>${value}</li>
        `;

    }

});


// STOP

stop.addEventListener("click", function () {

    clearInterval(timer);

    start.disabled = false;

});


// CLEAR

clear.addEventListener("click", function () {

    second = 0;

    clearInterval(timer);

    start.disabled = false;

    display.innerText = "00:00:00";

    array = [];

    ul.innerHTML = "";

});


// UPDATE TIME

function updateTime() {

    second = second + 1;


    let hrs = Math.floor(second / 3600);

    let mins = Math.floor((second % 3600) / 60);

    let sec = second % 60;


    display.innerText =
        hrs.toString().padStart(2, "0") +
        ":" +
        mins.toString().padStart(2, "0") +
        ":" +
        sec.toString().padStart(2, "0");

}