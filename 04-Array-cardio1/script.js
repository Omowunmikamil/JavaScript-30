// 04-Array-cardio1

let inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

let people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas','Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio,    Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve','Billings, Josh', 'Biondo, Frank', 'Birrell,Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let fifteenHundreds = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year <= 1599) {
        return true; // keep it
    }
});
console.table(fifteenHundreds);

//1,b. Using arrow function
let fifteenHundredsArrow = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))
console.table(fifteenHundredsArrow); // same result

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let fullName = inventors.map(function(inventor) {
    return `${inventor.first} ${inventor.last}`;
});
console.log(fullName);

//2.b. Using arrow function
let fullNameArrow = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNameArrow); // same result

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let sortbyBirthdate = inventors.sort(function(inventor, nextInventor) {
    if (inventor.year > nextInventor.year) {
        return 1;
    } else {
        return -1;
    }
});
console.table(sortbyBirthdate);

//3.b. Using arrow function and ternary operator
let sortbyBirthdateArrow = inventors.sort((inventor, nextInventor) => inventor.year > nextInventor.year ? 1 : -1);
console.table(sortbyBirthdateArrow); // same result

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// 4.a. Using for loop
let totalYears = 0; // initial value

// loop through the inventors array and add the years lived by each inventor
for (let i = 0; i < inventors.length; i++) {
    totalYears += inventors[i].passed - inventors[i].year; // add the years lived by each inventor
}
console.log(totalYears); // 861

//4.b. Using reduce
let totalYearsReduce = inventors.reduce(function(total, inventor) {
    return total + (inventor.passed - inventor.year); // add the years lived by each inventor
}, 0); // initial value
console.log(totalYearsReduce); // 861

//4.c. Using arrow function
let totalYearsReduceArrow = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0); // initial value
console.log(totalYearsReduceArrow); // 861

// 5. Sort the inventors by years lived
// 5.a. Using function and if else statement
let sortbyYearsLivedIfElse = inventors.sort(function(inventor, nextInventor) {
    const yearsLived = inventor.passed - inventor.year; // years lived by the inventor
    const nextYearsLived = nextInventor.passed - nextInventor.year; // years lived by the next inventor
    // sort by years lived
    if (yearsLived > nextYearsLived) {
        return 1;
    } else {
        return -1;
    }
});
console.table(sortbyYearsLivedIfElse);

//5.b. Usingfunction and ternary operator
let sortbyYearsLived = inventors.sort(function(inventor, nextInventor) {
    const yearsLived = inventor.passed - inventor.year; // years lived by the inventor
    const nextYearsLived = nextInventor.passed - nextInventor.year; // years lived by the next inventor
    return yearsLived > nextYearsLived ? -1 : 1; // sort by years lived
});
console.table(sortbyYearsLived);

//5.c. Using arrow function and ternary operator
let sortbyYearsLivedArrow = inventors.sort((inventor, nextInventor) => (inventor.passed - inventor.year) > (nextInventor.passed - nextInventor.year) ? -1 : 1); // same result

console.table(sortbyYearsLivedArrow); // same result

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// 6.a. Go to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 6.b. Open the console and run the following code
const category = document.querySelector('.mw-category'); // select the category
let links = category.querySelectorAll('a'); // NodeList(144) [a, a, a, a, a, a, a, a, a, a, …]

let de = links.map(link => link.textConttent); // TypeError: links.map is not a function