// DOM - Document Object Model

// We can select html elements and put them into variables
// There are Single and Multiple element selectors

 
// the window object is the parent object of the browser
console.log(window);


// Single Element Selectors

console.log(document.getElementById('my-form'));
// logs element in the console

// you can also assign it to a variable
const form = document.getElementById('my-form');
console.log(form);

// querySelector selects the first element
console.log(document.querySelector('#my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));



// Multiple Element Selectors

// querySelectorAll() 
// selects all elements in the same class
console.log(document.querySelectorAll('.item'));

// getElementsByClassName()
console.log(document.getElementsByClassName('item'));
// this returns html collection
// you cannot use array methods on a html collection

// getElementsByTagName()
console.log(document.getElementsByTagName('li'));
// this returns html collection


// Looping

const items = document.querySelectorAll('.item');

// loop through list and get each item
items.forEach((item) => console.log(item));


// Manipulating the DOM

// removing elements
const ul = document.querySelector('.items');

// ul.remove();
// list dissapeared

// remove last item
// ul.lastElementChild.remove();

// set first item's text property
ul.firstElementChild.textContent = 'Hello';

// set 2nd item's text
ul.children[1].innerHTML = 'Brad';

// add html
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; 


// Adding styles

// change button color
const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Event listeners
// run a function when an event happens
// you can also use mouseover - run code on hover
// you can also use mouseout - run code on hover and exit

btn.addEventListener('mouseout', (e) => {

    e.preventDefault(); // prevent default behavior of submit button

    console.log('Button clicked!'); 

    // console.log(e); // show attributes of event (click) event
    // console.log(e.target); // see where the button is
    // console.log(e.target.className); // get class name of button
    // console.log(e.target.id); // get id

    // change form background color
    document.querySelector('#my-form').style.background = '#CCC';

    // add a css class to html body 
    // document.querySelector('body').classList.add('bg-dark');

    // add html
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
})


// displaying form input data

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    // form validation
    if(nameInput.value === '' || emailInput.value === ''){

        // alert('Please enter fields!');
        msg.classList.add('error'); // add .error class
        msg.innerHTML = 'Please enter all fields!'; // display on page

        // disappear error message in 3 seconds
        setTimeout(() => msg.remove(), 3000);

    } else {
        console.log('success');

        // add input items to a list

        // create a list item
        const li = document.createElement('li'); 
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // append item to list
        userList.appendChild(li);

        // clear form fields
        nameInput.value = '';
        emailInput.value = '';
    }
}











/* // OOP - Object Oriented Programming

// Constructor function
// Name should start with capital letter

function Person(firstName, lastName, DoB){

    this.firstName = firstName; // make properties with 'this' keyword
    this.lastName = lastName;
    // this.DoB = DoB;
    this.DoB = new Date(DoB); // pass date object

}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

//console.log(person1);

// get value of a property of an object
//console.log(person2.DoB);

// get the year of DoB
//console.log(person1.DoB.getFullYear());


// Adding methods to an object
function Author(firstName, lastName, DoB){

    this.firstName = firstName;
    this.lastName = lastName;
    this.DoB = new Date(DoB);

    // method to get year from birthdate
    this.getBirthYear = function(){
        return this.DoB.getFullYear();
    }

    // method to get fullname
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

const author1 = new Author('John', 'Doe', '4-3-1980');
const author2 = new Author('Mary', 'Smith', '3-6-1970');

// call method
//console.log(author1.getBirthYear());
//console.log(author1.getFullName());


// Prototypes

function Seller(firstName, lastName, DoB){

    this.firstName = firstName;
    this.lastName = lastName;
    this.DoB = new Date(DoB);

}

// adding functions to prototypes

Seller.prototype.getBirthYear = function(){
    return this.DoB.getFullYear();
}

Seller.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const seller1 = new Seller('John', 'Doe', '4-3-1980');
const seller2 = new Seller('Mary', 'Smith', '3-6-1970');

//console.log(seller1.getFullName());
//console.log(seller1);


// Classes

class Driver {
    constructor(firstName, lastName, DoB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = new Date(DoB);
    }

    getBirthYear(){
        return this.DoB.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const driver1 = new Driver('John', 'Doe', '4-3-1980');
const driver2 = new Driver('Mary', 'Smith', '3-6-1970');

console.log(driver2.getFullName());
console.log(driver1); */

/* // Functions

// create function
function addNums(num1, num2){
    console.log(`Total of the values is ${num1 + num2}`);
}

// set default values to parameters
function addNums(num1 = 1, num2 = 1){
    console.log(`Total of the values is ${num1 + num2}`);
}

// call function
addNums(5, 5);

// default values will be overwrited


// return result 
function addNums(num1 = 1, num2 = 1){
    return `Total of the values is ${num1 + num2}`;
}

// output result
console.log(addNums(5, 5));


// Arrow Functions =>

const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5,5));


// arrow function with single parameter
const addNum = num1 => num1 + 5;
console.log(addNum(5,5)); */

/* // Conditionals

const x = 4;

if (x == 10){
    console.log('x is 10');
}
// This is still true even if x's value is a string (x = '10')

// x = '10' is not true, as '===' matches data types
if (x === 10){

    console.log('x is 10');

} else if (x > 10) {

    console.log('x is greater than 10');

} else {

    console.log('x is less than 10');

} 


// Multiple Conditions

const y = 6;
const z = 11;

// check one condition OR other
if(y > 5 || z > 10){

    console.log('y is more than 5 or z is more than 10');

}

// check both conditions
if(y > 5 && z > 10){

    console.log('y is more than 5 and z is more than 10');

}


// Ternary Operator
const i = 11;
const color = i > 10 ? 'red' : 'blue';
// '=' - if
// '?' - then
// ':' - else

console.log(color);



// Switches

// const i = 9;
// const c = i > 10 ? 'red' : 'blue'; 

const c = 'green';

switch(c){

    case 'red':
        console.log('color is red'); 
        break;

    case 'blue':
        console.log('color is blue'); 
        break;

    default:
        console.log('color is NOT red or blue');
        break; 

} 
*/

/* // Loops, Map and Filter

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
console.log(todoCompletedText);*/

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

/* // Data Types
// Strings, Numbers, Boolean, Null, Undefined

 const name = 'John'; 
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

/* // Variables

let age = 30;
// change let value
age = 31;
console.log(age);


let score;
score = 10;
console.log(score); 

const myscore;
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


