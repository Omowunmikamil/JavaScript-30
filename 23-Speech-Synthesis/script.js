const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('input', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));








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