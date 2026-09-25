const daysVal = document.querySelector('[data-value="days"]');
const hoursVal = document.querySelector('[data-value="hours"]');
const minsVal = document.querySelector('[data-value="mins"]');
const secsVal = document.querySelector('[data-value="secs"]');

let time = 30000000000;
let intervalId

intervalId = setInterval(() => {
    time = time - 10;

    if (time <= 0) {
        clearInterval(intervalId);
        daysVal.textContent = "00";
        hoursVal.textContent = "00";
        minsVal.textContent = "00";
        secsVal.textContent = "00";

    }

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    daysVal.textContent = String(days).padStart(2, '0');
    hoursVal.textContent = String(hours).padStart(2, '0');
    minsVal.textContent = String(mins).padStart(2, '0');
    secsVal.textContent = String(secs).padStart(2, '0');
}, 1);
