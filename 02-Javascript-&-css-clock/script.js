const secondHand = document.querySelector('.second-hand'); // select the second-hand class
const minuteHand = document.querySelector('.min-hand'); // select the min-hand class
const hourHand = document.querySelector('.hour-hand'); // select the hour-hand class

// function to set the date
function setDate() {
    const moment = new Date(); // create a new date object

    const seconds = moment.getSeconds(); // get the seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // convert the seconds to degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate the second hand

    // Check if the seconds hand is at 90 degrees (vertical position)
    if (seconds === 0) {
        secondHand.style.transition = 'none'; // temporarily remove transition effect
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'; // reset transition effect
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate the second hand

    const minutes = moment.getMinutes(); // get the minutes
    const minutesDegrees = ((minutes / 60) * 360) + 90; // convert the minutes to degrees
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // rotate the minute hand

    const hours = moment.getHours(); // get the hours
    const hoursDegrees = ((hours / 12) * 360) + 90; // convert the hours to degrees
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // rotate the hour hand
}
setInterval(setDate, 1000);