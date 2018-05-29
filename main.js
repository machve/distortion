"use strict"
//fetch https://kea-alt-del.dk/kata-distortion/?count=25

function getData() {

    fetch("https://kea-alt-del.dk/kata-distortion/?count=25").then(res => res.json())
        .then(showData);
}

function showData(json) {
    let queueNumber = json.inQueue;
    console.log(queueNumber);
    document.getElementById("queue-count").textContent=queueNumber;
}
setInterval(getData, 1000);