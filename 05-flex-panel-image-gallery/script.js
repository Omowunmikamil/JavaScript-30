const panels = document.querySelectorAll('.panel'); // select all the panels

// function to toggle the open class
function toggleOpen() {
  console.log('Hello'); // check if the function is working
  this.classList.toggle('open'); // toggle the open class
}

// function to toggle the open-active class
function toggleActive(e) {
  console.log(e.propertyName); // check the property name
  if (e.propertyName.includes('flex')) {  // check if the property name includes flex
    this.classList.toggle('open-active'); // toggle the open-active class
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // add event listener to each panel
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); // add event listener to each panel

    