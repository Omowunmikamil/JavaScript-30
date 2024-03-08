const speed = document.querySelector('.speed'); // speed is the class of the div
const bar = speed.querySelector('.speed-bar'); // speed-bar is the class of the div inside the speed div
const video = document.querySelector('.flex'); // flex is the class of the video

function handleMove(e) { // function to handle the mouse move event
    const y = e.pageY - speed.offsetTop; // get the y position of the mouse
    const percent = y / speed.offsetHeight; // get the percentage of the mouse position
    const min = 0.4; // minimum speed
    const max = 4; // maximum speed
    const height = Math.round(percent * 100) + '%'; // get the height of the bar
    const playbackRate = percent * (max - min) + min; // get the playback rate
    bar.style.height = height; // set the height of the bar
    bar.textContent = playbackRate.toFixed(2) + '×'; // set the text of the bar
    video.playbackRate = playbackRate; // set the playback rate of the video
}

function handleMouseLeave() { // function to handle the mouse leave event
    video.pause(); // pause the video
}

document.addEventListener('mousemove', function(e) { // add event listener to the mouse move event
    if (e.target === speed) { // if the target of the event is the speed div
      handleMove(e); // call the handleMove function
    } else { // if the target of the event is not the speed div
      handleMouseLeave(); // call the handleMouseLeave function
    }
});