// Ways to declare a variable
// var, let, const

let firstName = 'Al';
let lastName = 'Cordero';

console.log(firstName, lastName);

let age = 32;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

//Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
    name: 'Al'
};

person.name = 'Alvaro';

person.email = 'al@gmail.com'

console.log(person);

//Declare multiple values at once
let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(a);