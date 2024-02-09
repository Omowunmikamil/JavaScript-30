const getEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; // Endpoint to get the data

const cities = []; // Array to store the data

fetch(getEndpoint) // Fetch the data from the endpoint
    .then(blob => blob.json()) // Convert the data to JSON
    .then(data => cities.push(...data)) // Push the data to the array

function findMatches(wordToBeMatch, cities) { // Function to find the matches
    return cities.filter(place => { // Filter the data
        // check if the city or state matches what was searched
        const regex = new RegExp(wordToBeMatch, 'gi'); // Create a regex to match the data
        return place.city.match(regex) || place.state.match(regex); // Return the matches in the city or state
    });
}

function numberWithCommas(x) { // Function to add commas to the numbers in the data
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add the commas to the numbers in the data
}

function displayTheMatches() { // Function to display the matches in the suggestions list
    const matchArray = findMatches(this.value, cities); // Get the matches from the findMatches function
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi'); // Create a regex to match the data in the array
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // Highlight the matches in the city name
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); // Highlight the matches in the state name
        return `
            <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `; // Return the matches in the city and state name
    }).join(''); // Join the matches
    suggestions.innerHTML = html; // Display the matches in the suggestions list
}

const inputSearch = document.querySelector('.search'); // Select the input search
const suggestions = document.querySelector('.suggestions'); // Select the suggestions list

inputSearch.addEventListener('change', displayTheMatches); // Add an event listener to the input search
inputSearch.addEventListener('keyup', displayTheMatches); // Add an event listener to the input search
