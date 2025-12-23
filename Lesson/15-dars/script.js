const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function updateClock() {
    const now = new Date();


    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    timeEl.textContent = 
        `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();

    dateEl.textContent = `${day}.${month}.${year}`;
}

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(updateClock, 1000);
updateClock();
