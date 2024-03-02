const msg = new SpeechSynthesisUtterance(); // Create a new speech synthesis object
let voices = []; // Create an empty array to store the voices
const voicesDropdown = document.querySelector('[name="voice"]'); // Select the voice dropdown
const options = document.querySelectorAll('[type="range"], [name="text"]'); // Select the rate, pitch, and text input
const speakButton = document.querySelector('#speak'); // Select the speak button
const stopButton = document.querySelector('#stop'); // Select the stop button
msg.text = document.querySelector('[name="text"]').value; // Set the initial text value

// Set the initial text value
function populateVoices() {
    voices = speechSynthesis.getVoices(); // Get the voices
    voicesDropdown.innerHTML = voices // Populate the voices dropdown
        .filter(voice => voice.lang.includes('en')) // Filter the voices to only include those that are English
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) // Map over the voices and create an option for each one
        .join(''); // Join the options together
}

// Set the voice to the one that matches the value of the dropdown
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value); // Set the voice to the one that matches the value of the dropdown
    toggle(); // Toggle the speech synthesis
}

// Toggle the speech synthesis
function toggle(startOver = true) {
    speechSynthesis.cancel(); // Cancel the speech synthesis
    if (startOver) { // If startOver is true
        speechSynthesis.speak(msg); // Speak the message
    }
}

// Set the options
function setOption() {
    msg[this.name] = this.value; // Set the option to the value of the input
    toggle(); // Toggle the speech synthesis
}

speechSynthesis.addEventListener('voiceschanged', populateVoices); // Listen for the voices to change
voicesDropdown.addEventListener('change', setVoice); // Listen for the voice to change
options.forEach(option => option.addEventListener('input', setOption)); // Listen for the options to change
speakButton.addEventListener('click', toggle); // Listen for the speak button to be clicked
stopButton.addEventListener('click', () => toggle(false)); // Listen for the stop button to be clicked


// above code is the same as below code but the above code is more readable and clean.

/*const msg = new SpeechSynthesisUtterance(); // Create a new speech synthesis object
let voices = []; // Create an empty array to store the voices
const voicesDropdown = document.querySelector('[name="voice"]'); // Select the voice dropdown
const options = document.querySelectorAll('[type="range"], [name="text"]'); // Select the rate, pitch, and text input
const speakButton = document.querySelector('#speak'); // Select the speak button
const stopButton = document.querySelector('#stop'); // Select the stop button
msg.text = document.querySelector('[name="text"]').value; // Set the initial text value

/* function setMsgText() {
  msg.text = document.querySelector('[name="text"]').value;
}

document.querySelector('[name="text"]').addEventListener('input', setMsgText);

setMsgText(); */ // Set initial text value

/*function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value); // Set the voice to the one that matches the value of the dropdown
    toggle(); // Toggle the speech synthesis
}

function toggle(startOver = true) {
    speechSynthesis.cancel(); // Cancel the speech synthesis
    if (startOver) {
        speechSynthesis.speak(msg); // Speak the message
    }*/

    /*if ('speechSynthesis' in window) {
        speechSynthesis.cancel(); // Cancel the speech synthesis
        speechSynthesis.speak(msg); // Speak the message
    }
    else {
        // alert('Your browser does not support speech synthesis');
        console.error('Your browser does not support speech synthesis');
    }*/
//}

/*function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}/*

/*speechSynthesis.addEventListener('voicesChanged', populateVoices); // Listen for the voices to change
voicesDropdown.addEventListener('change', setVoice); // Listen for the voice to change
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));*/