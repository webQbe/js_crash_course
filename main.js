// Loops, Map and Filter

// For loop
// print iteration number

for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}

// start from 0
// run code until i is less than 10
// each time increment i value by 1


// While Loop
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++; 
}


// Loop through an object

const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appointment',
        isCompleted: false
    },

];


for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// start from 0
// run code until length of todos is less than i
// take i as index of todos and output value of 'text'
// in each iteration increment i by 1


// Another way

// get the ids
for(let todo of todos){
    console.log(todo.id);
}



// forEach
todos.forEach(function(todo){
    console.log(todo.text);
});


// Map
// take values and return as an array 
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// Filter
// return items in which isCompleted is 'true'
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);


// return text from filtered items
const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedText);











/* // Object Literals
// JSON is similar to object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);

// access single value
console.log(person.firstName);

// access two values
console.log(person.firstName, person.lastName);

// access a value inside an array
console.log(person.hobbies[1]);

// get value in an object
console.log(person.address.city);

// pull values from an object
const {firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(lastName);
console.log(city);

// add properties to an object
person.email = 'john@email.com'
console.log(person); 



const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appointment',
        isCompleted: false
    },

];
console.log(todos);

// print text of second object
console.log(todos[1].text);


// convert object to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */



























/* // Arrays
// Arrays are variables that hold multiple values

// constructing an array with 'new' keyword
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// create an array with []
// you can put multiple data types 
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);

// accessing array values
console.log(fruits[1]); // oranges



// adding a value to array location
fruits[3] = 'grapes';

console.log(fruits); // 10 replaced with grapes


// fruits = []; 
// you can change values in a const array, but you cannot re-assign it. 


// when you don't know how many values in an array,
// you can push a value to end

fruits.push('mangoes');
console.log(fruits); 

// you can push a value to start
fruits.unshift('strawberries');
console.log(fruits); 

// remove last value
fruits.pop();
console.log(fruits); 

// check if something is not an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray('hello')); // false

// get index of value
console.log(fruits.indexOf('oranges')); // 2 */





/* // Strings

const name = 'John'; 
const age = 30; 

// Concatenation
console.log('My name is ' + name + ' and I am ' + age); 

// Template String
console.log(`My name is ${name} and I am ${age}`);

// assign string to a variable
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);


// string methods

// get the length of a string
const s = 'Hello World!';
console.log(s.length); 

// convert to uppercase
console.log(s.toUpperCase());

// convert to lowercase
console.log(s.toLowerCase());

// substring
console.log(s.substring(0, 5)); // Hello

// convert substring to uppercase
console.log(s.substring(0, 5).toUpperCase());

// split a string into an array
console.log(s.split('')); // add '' to split by letter

// separating words ending with ', '
const tag = 'technology, computers, it, code';
console.log(tag.split(', ')); */




// Data Types
// Strings, Numbers, Boolean, Null, Undefined

/* const name = 'John'; 
const age = 30; 
const rating = 4.5; 
const isCool = true;
const x = null; // 
const y = undefined; 
let z; 

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof rating); // number
console.log(typeof isCool); // boolean
console.log(typeof x); // x is not an object, it's null 
console.log(typeof y); // undefined
console.log(typeof z); // undefined */














/* let age = 30;
// change let value
age = 31;
console.log(age);


let score;
score = 10;
console.log(score); */

/* const myscore;
// you must add a value to const
const myscore = 10;

const myage = 30;
// try to change const value
myage = 31;
console.log(age);
// a const cannot be changed :Uncaught TypeError: invalid assignment to const 'myage' */
 





















/* alert('Hello World!');

// output (print) to  console
console.log('Hello World!');

// output an error message
console.error('This is an error!'); 

// output a warning message
console.warn('This is a warning!');
 */


