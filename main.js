"use strict"
let parentDiv = document.querySelector(".parent-div");
let queueNumber;
let childDiv;
let barChart;
let barChartParent = document.querySelector(".bar-chart");
let counter = 0;
let arrayChildren = [];

function getData() {

    fetch("https://kea-alt-del.dk/kata-distortion/?count=25").then(res => res.json())
        .then(showData);
}

function showData(json) {
    queueNumber = json.inQueue;
    console.log(queueNumber);

    childDiv = document.createElement('h1');
    childDiv.textContent = queueNumber;
    arrayChildren.push(childDiv);
    parentDiv.appendChild(childDiv);

    barChart = document.createElement('div');

    barChart.setAttribute('class', 'animate-div')
    parentDiv.appendChild(barChart);


    counter++;
    setTimeout(function addWidth() {
        barChart.style.width = (queueNumber * 20 + 'px')
    }, 0);

}



setInterval(getData, 5000);