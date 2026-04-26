let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let timer = null;

// FORMAT FUNCTION
function format(num){
    return num < 10 ? "0" + num : num;
}

function start(){
    if(isRunning) return;

    isRunning = true;

    timer = setInterval(() => {
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        if(minutes === 60){
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);
}

function togglePause(){
    const btn = document.getElementById("pauseBtn");

    if(isRunning){
        clearInterval(timer);
        isRunning = false;
        btn.textContent = "Resume";
    } else {
        start();
        btn.textContent = "Pause";
    }
}

function reset(){
    clearInterval(timer);
    timer = null;
    isRunning = false;

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("pauseBtn").textContent = "Pause";

    updateDisplay();
}

// UPDATE DISPLAY
function updateDisplay(){
    document.getElementById("time").textContent =
        `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// STOP
function stop(){
    clearInterval(timer);
    timer = null;
    isRunning = false;

    document.getElementById("pauseBtn").textContent = "Pause";
}
