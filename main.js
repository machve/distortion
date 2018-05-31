"use strict"
let parentDiv = document.querySelector(".parent-div");
let queueNumber;
let childText;
let barChart;
let barChartParent = document.querySelector(".bar-chart");
let counter = 0;

let kid;
let kid2;

function getData() {

    fetch("https://kea-alt-del.dk/kata-distortion/?count=25").then(res => res.json())
        .then(showData);
}

function showData(json) {
    queueNumber = json.inQueue;
    console.log(queueNumber);

    childText = document.createElement('h1');
    childText.textContent = queueNumber;
 
    parentDiv.appendChild(childText);

    barChart = document.createElement('div');

    barChart.setAttribute('class', 'animate-div')

    parentDiv.insertBefore(barChart, parentDiv.children[0]);
    parentDiv.insertBefore(childText, parentDiv.children[0]);
    // parentDiv.appendChild(barChart);
kid = parentDiv.children[6];
kid2 = parentDiv.children[7];
console.log(kid)
    counter++;
    setTimeout(function addWidth() {
        barChart.style.width = (queueNumber * 20 + 'px')
    }, 0);

    if (counter > 4) {
kid.remove();
kid2.remove();


    }

}



setInterval(getData, 5000);