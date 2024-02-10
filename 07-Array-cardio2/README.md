# Array Cardio

This repository contains JavaScript code for performing array manipulation tasks. Here's an overview of what each part of the code does:

## Initialization:
- Two arrays, people and comments, are initialized. people contains objects with name and year properties, while comments contains objects with text and id properties.

## Some and Every Checks:
- The some method checks if at least one person in the people array is 19 years or older.
- The every method checks if everyone in the people array is 19 years or older.

## Finding Comment by ID:
- The find method is used to find a comment in the comments array with a specific ID (823423). The found comment is then logged to the console.

## Deleting Comment by ID:
- The findIndex method is used to find the index of a comment in the comments array with a specific ID (823423).
- The splice method is used to delete the comment with the found index from the comments array.

## Creating New Array without Deleted Comment:
- A new array, newComments, is created using the spread operator and the slice method to exclude the deleted comment.

## Getting Started
1. Clone the repository.
2. Open the HTML file in a web browser.
3. Explore the console output to see the results of the array methods.
4. Enjoy experimenting with array methods and data manipulation in JavaScript! 🚀