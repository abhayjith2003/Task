var startButton = document.getElementById("startBtn");
var timerText = document.getElementById("timer");

var timeLeft = 10;
var interval;   // to store setInterval reference

startButton.addEventListener("click", function () {

    // Prevent multiple intervals if button clicked many times
    if (interval) {
        return;
    }

    interval = setInterval(function () {

        timeLeft--;
        timerText.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(interval);
            timerText.textContent = "Time's Up!";
        }

    }, 1000);  // 1000ms = 1 second
});