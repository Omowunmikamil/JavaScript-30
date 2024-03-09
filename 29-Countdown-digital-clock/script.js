// Selecting elements from the DOM
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const customForm = document.querySelector('.customForm');

let countdown;

// Function to start the timer for a given duration in seconds
function startTimer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  // Calculate the end time
  const now = Date.now();
  const then = now + seconds * 1000;

  // Display initial time
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Update timer display every second
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// Function to display the remaining time
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// Function to display the end time
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const amPm = hour >= 12 ? 'PM' : 'AM';
  endTimeDisplay.textContent = `Be Back IN ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
}

// Event listener for button clicks to set timer
buttons.forEach(button => button.addEventListener('click', function() {
  const seconds = parseInt(this.dataset.time);
  startTimer(seconds);
}));

// Event listener for form submission to set custom timer
customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const minutes = parseInt(this.minutes.value);
  startTimer(minutes * 60);
  this.reset();
});
