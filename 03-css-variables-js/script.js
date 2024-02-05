const controler = document.querySelectorAll('.controls input'); // select all input elements

// function to update the css variables
function updatesHandler() {
    const suffix = this.dataset.sizing || ''; // get the data-sizing attribute or empty string
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // set the css variable
}

controler.forEach(input => input.addEventListener('change', updatesHandler)); // listen for change event
controler.forEach(input => input.addEventListener('mousemove', updatesHandler)); // listen for mousemove event