//My firs clock

//Need to see it on web b4 first iteration
myClock();

function myClock() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let time;

    if (seconds < 10)
        seconds = "0" + seconds;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (hour > 12) {
        time = hour - 12 + ":" + minutes + ":" + seconds + " PM";
    } else {
        time = hour + ":" + minutes + ":" + seconds + " AM";
    }

    let x = document.getElementById("clock").innerHTML =
        `Teraz jest<br>${time}`;


}
setInterval(function () {
    return myClock();
}, 1000);


//Clock with hands
//take classes to style
const secoundsHand = document.querySelector('.sek');
const minutesHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

//Need to see it on web b4 first iteration
clock();

function clock() {

    //Date
    const today = new Date();
    //Secounds
    let s = today.getSeconds();
    let sDeg = ((s / 60) * 360) + 90;
    //Minutes
    let m = today.getMinutes();
    let mDeg = ((m / 60) * 360) + 90;
    //Houers
    let h = today.getHours();
    let hDeg = ((h / 12) * 360) + 90;

    // fix bug with spinback hands between 59-0s
    if (s == 0) {
        secoundsHand.style.transitionDuration = '0s';
        minutesHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } else {
        secoundsHand.style.transitionDuration = '0.04s';
        minutesHand.style.transitionDuration = '0.04s';
        hourHand.style.transitionDuration = '0.04s';
    }

    //make clock's hands move (Problem beetwen 59s - 0s)
    secoundsHand.style.transform = `rotate(${sDeg}deg)`;
    minutesHand.style.transform = `rotate(${mDeg}deg)`;
    hourHand.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(clock, 1000);
