// Let's build a clock using JS

function updateClock() {

    // Get the current data
    let CurrentTime = new Date()

    // extract current hour, minutes and seconds from Date() module
    let currentHour = CurrentTime.getHours();
    let currentMinute = CurrentTime.getMinutes();
    let currentSecond = CurrentTime.getSeconds();

    // console.log(currentHour, currentMinute, currentSecond)

    // For AM and PM
    let timeOfDay = (currentHour < 12) ? 'AM' : 'PM';

    // Fixes some bugs in time printing 

    // Pad 0 if hour / minute / second is less than 10 ( Single digit )
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;

    // Set the right AM - PM Clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour
    currentHour = (currentHour == 0) ? 12 : currentHour

    // console.log(currentHour, currentMinute, currentSecond, timeOfDay)

    // Insert the time string inside the DOM
    let CurrentTimeStr = currentHour + ' : ' + currentMinute + ' : ' + currentSecond + " " + timeOfDay;

    // print time on screen
    document.getElementById('clock').innerHTML = CurrentTimeStr;

}
