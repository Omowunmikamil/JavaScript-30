const people = [
    {name: 'Tobi', year: 1995},
    {name: 'Fathia', year: 2012},
    {name: 'Bimbo', year: 1988},
    {name: 'Tolu', year: 2000},
    {name: 'Omowunmi', year: 1996},
];

const comments = [
    {text: 'I love this', id: 523423},
    {text: 'You are the best', id: 823423},
    {text: 'I love you', id: 203423},
    {text: 'Iyan happens to be my favorite meal', id: 123423},
    {text: 'I am incredible', id: 523423},
    {text: 'You are awesome', id: 263423},
];

// Some and Every Checks
// Array.prototype.some() // is at least one person is 17 or older?
// 1. using function declaration
const ifIsAdult = people.some(function(person) { // using function declaration to check if at least one person is 17 or older
    const fromCurrentYear = (new Date()).getFullYear(); // get the current year using the Date object
    if(fromCurrentYear - person.year >= 17) { // check if the difference between the current year and the year the person was born is greater than or equal to 17
        return true; // return true if the condition is met for at least one person
    }
})
console.log({ifIsAdult}); // log the result to the console

// 1.b using arrow function
const ifIsAdultArrow = people.some(person => { const fromCurrentYear = new Date().getFullYear(); // using arrow function to check if at least one person is 17 or older
return fromCurrentYear - person.year >= 17}); // check if the difference between the current year and the year the person was born is greater than or equal to 17
console.log({ifIsAdultArrow}); // log the result to the console using object literal

// 1.c using arrow function and short hand
const ifIsAdultArrowShortHand = people.some(person => (new Date().getFullYear() - person.year >= 17)); // using arrow function and short hand to check if at least one person is 17 or older by checking if the difference between the current year and the year the person was born is greater than or equal to 17
console.log({ifIsAdultArrowShortHand}); // log the result to the console using object literal

// Array.prototype.every() // is everyone 19 or older?
// 1. using function declaration
const ifAllAdults = people.every(function(person) { // using function declaration to check if everyone is 19 or older by checking if the difference between the current year and the year the person was born is equal to the current year
    const fromCurrentYear = (new Date()).getFullYear(); // get the current year using the Date object and store it in a variable
    if(fromCurrentYear === person.year) { // check if the difference between the current year and the year the person was born is equal to the current year
        return true; // return true if the condition is met for everyone in the array
    }
})
console.log({ifAllAdults}); // log the result to the console using object literal

// 1.b using arrow function
const ifAllAdultsArrow = people.every(person => {const fromCurrentYear = new Date().getFullYear(); // using arrow function to check if everyone is 19 or older by checking if the difference between the current year and the year the person was born is equal to the current year
return fromCurrentYear === person.year}); // check if the difference between the current year and the year the person was born is equal to the current year
console.log({ifAllAdultsArrow}); // log the result to the console using object literal

// 1.c using arrow function and short hand
const ifAllAdultsArrowShortHand = people.every(person => (new Date().getFullYear() === person.year)); // using arrow function and short hand to check if everyone is 19 or older by checking if the difference between the current year and the year the person was born is equal to the current year
console.log({ifAllAdultsArrowShortHand}); // log the result to the console using object literal

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 123423
// 1. using function declaration
const findComment = comments.find(function(comment) { // using function declaration to find the comment with the ID of 123423 in the comments array
    if(comment.id == 123423) { // check if the comment ID is equal to 123423 and return true if the condition is met
        return true; // return true if the condition is met for the comment with the ID of 123423
    }
});
console.log({findComment}); // log the result to the console using object literal to display the result

// 1.b using arrow function
const findCommentArrow = comments.find(comment => comment.id === 523423); // using arrow function to find the comment with the ID of 123423 in the comments array by checking if the comment ID is equal to 123423
console.log({findCommentArrow}); // log the result to the console using object literal to display the result

// Array.prototype.findIndex()
// Find the comment with this ID and delete it
// 1. using function declaration
const findCommentIndex = comments.findIndex(function(comment) { // using function declaration to find the index of the comment with the ID of 203423 in the comments array
    if(comment.id === 203423) { // check if the comment ID is equal to 203423 and return true if the condition is met for the comment with the ID of 203423
        return true; // return true if the condition is met for the comment with the ID of 203423
    }
});
console.log({findCommentIndex}); // log the result to the console using object literal to display the result
comments.splice(findCommentIndex, 1); // using splice method to remove the comment with the ID of 203423 from the comments array and store the result in a variable
console.table(comments); // log the result to the console using table to display the result

// 1.b using arrow function
const findCommentIndexArrow = comments.findIndex(comment => comment.id === 203423); // using arrow function to find the index of the comment with the ID of 203423 in the comments array by checking if the comment ID is equal to 203423
console.log({findCommentIndexArrow}); // log the result to the console using object literal to display the result
// using slice method to remove the comment
const deleteNewComment = { // using object literal to store the result of the removed comment
    ...comments.slice(0, findCommentIndexArrow), // using spread operator to copy the comments array from the beginning to the index of the comment with the ID of 203423
    ...comments.slice(findCommentIndexArrow + 1) // using spread operator to copy the comments array from the index of the comment with the ID of 203423 to the end
}
console.table(deleteNewComment); // log the result to the console using table to display the result of the removed comment