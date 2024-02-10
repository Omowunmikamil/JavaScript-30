# Ajax Type City Search

This project provides a simple web interface for searching cities or states and displaying matching results in real-time. Here's a breakdown of the functionality:

1. HTML Structure:
- The HTML structure consists of a form with an input field for searching cities or states. Matching results are displayed in an unordered list (<ul>).

2. Fetching Data:
- Data about cities and states is fetched from a remote endpoint (cities.json) using the Fetch API.

3. Matching Function:
- The findMatches function filters the fetched data based on the user input (city or state).
- It uses a regular expression to match the input against city or state names.

4. Displaying Matches:
- The displayMatches function updates the HTML to display the matching cities or states.
- It highlights the matching parts of the city or state names using HTML <span> elements with a class of "hl".
- The population of each matched city or state is also displayed.

5. Event Listeners:
- Event listeners are added to the search input field to trigger the matching process whenever the input value changes (change and keyup events).

6. Styling:
Styling is applied through an external CSS file (style.css) linked in the HTML <head> section.
The appearance of the search input field and the suggestions list can be customized through CSS.

## Getting Started
- Clone the repository.
- Open the HTML file in a web browser.
- Start typing the name of a city or state in the search input field to see the matching results.
- Enjoy exploring the real-time search functionality! 🚀

## Contribution
- Contributions are welcome and appreciated.
- To contribute, fork the repository, create a new branch, and make your changes.
- After testing your changes, submit a pull request.

## License
- This project is open source and available under the [MIT License](LICENSE).
- You are free to use, modify, and distribute the code as you like.

## Acknowledgements
- This project was inspired by the JavaScript 30 course by Wes Bos.