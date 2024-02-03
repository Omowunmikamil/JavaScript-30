function playSounds(e) {
    const audioTemplate = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio element with the data-key attribute that matches the key code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the key with the data-key attribute that matches the key code

    if (!audioTemplate) return; //stop the function from running all together
    
    // Clone the audio element
    const audio = audioTemplate.cloneNode();
    
    // Play the cloned audio
    audio.currentTime = 0; //rewind to the start
    audio.play(); //play the audio
    
    // Add class for visual effect
    key.classList.add('playing'); //add the class playing to the key
    
    // Remove the cloned audio after it has finished playing
    audio.addEventListener('ended', function() {
        audio.remove(); //remove the audio element from the DOM
    });
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing'); //remove the class playing from the key
}

const keys = document.querySelectorAll('.key'); //select all the keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //listen for the transitionend event on each key and remove the transition effect

window.addEventListener('keydown', playSounds); //listen for the keydown event on the window