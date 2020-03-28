const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

/*wrap it all in a function to change the static code that will*/
/*run once, to a dynamic function that will run as you specify.*/

function runTheClock() {
    var date = new Date(); /*gets the full date/time info off your browser object*/
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: ");

    /*math for the calculation of the clock rotation of the hands*/
    let hrPosition = (hr*360/12)+(min*(360/60)/12); 
    let minPosition = (min*360/60) + (sec*(360/60)/60);
    let secPosition = sec * 360 / 60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/*runs the function through the setInterval method every 1000ms*/
var interval = setInterval(runTheClock, 1000);
