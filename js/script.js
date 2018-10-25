function simulationMessage(message) {
  var newLi = document.createElement("li");
  newLi.innerHTML = message;

  var olTag = document.querySelector("ol");
  olTag.appendChild(newLi);
}

simulationMessage("Order CHINESE FOOD 🍜");
setTimeout(function () {
  simulationMessage("Chinese food arrived 🍜");
}, 10000);

simulationMessage("Order ITALIAN FOOD 🍝");
setTimeout(function () {
  simulationMessage("Italian food arrived 🍝");
}, 6000);

simulationMessage("Order MEXICAN FOOD 🌮");
setTimeout(function () {
  simulationMessage("Mexican food arrived 🌮");
}, 2000);

simulationMessage("TOO DESPARATE, having a coffee ☕️");


//------------------------------------------------------


var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var countdownH2 = document.querySelector(".countdown h2");
var countdownNumber;

startButton.onclick = function () {
  var count = 20;
  countdownH2.innerHTML = count;

  // stop previous coundown before starting a new one
  clearInterval(countdownNumber);

  // save the interval's number so we can stop it later
  countdownNumber =
    setInterval(function () {
      // every second decrease the count and update the DOM
      count -= 1;
      countdownH2.innerHTML = count;

      if (count === 0) {
        // stop the countdown if we've reached 0
        clearInterval(countdownNumber);
      }
    }, 1000);
};

stopButton.onclick = function () {
  clearInterval(countdownNumber);
};
