//! Data types and variables

/** let str = 'Hello, World';
        console.log(str[str.length-1]) get last char of string
    strings can be broken up into ("hello" + "world")
    indexes are used ot print specific chars from strings: 
        console.log("panda"[2]) */
// ("hello".string) finds length of string

let celsius = 19;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

/** Equality
 * double equals checks values 
 * triple equals checks values and types
 * add ! in front for not equal (i.e opposite result)
 * let bool = "1" == 1
    console.log(bool)
    single equal already used as assignment operator 
 */

//! Conditionals

let cash = 100;
let price = 100;
let difference = cash - price;
if (cash > price) {
  console.log(`you paid extra - here's your ${difference} dollar change.`);
} else if (cash === price) {
  console.log("you paid the exact amount - have a nice day");
} else {
  console.log(
    "you didn't pay enough - please give " + difference * -1 + " dollars extra"
  );
}

// "bool===true" is the same as "bool" & "bool===false" is the same as "!bool"
/** for if statement to be true, condition must be truthy
 * for else statement to be true, condition must be falsy
 * if("") {
 *  console.log("truthy values")
 * } else {
 *  console.log("falsy values")
 * }
 *
 * 51:20
 */

let sunny = 1; // ternary operators - only check for truthy/falsy
sunny ? console.log("wear sunscreen") : console.log("watch for rain!");
//another example
/**let subscribed = 1
let loggedIn = 1
let str = subscribed && loggedIn ? "show video" : "hide video"
console.log(str)*/

let cash10 = 50;
let price10 = 40;
let isStoreOpen = true;
let str =
  cash10 >= price10 && isStoreOpen ? `give receipt` : "do not give receipt";
console.log(str);

// ! Loops

// DRY = Don't Repeat Yourself
// let count = 1;

// while(count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

/* for (let i = 0; i < 256; i++) {
    console.log(i + 1);
} */

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}-> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(i + " -> Frontend");
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

const str10 = "a quick brown fox jumped over the lazy dog";
for (let i = 0; i < str10.length; i++) {
  // 1:14:00
  console.log(str10[i]);
}

// ! Functions
//? Argument = calling a function | Parameter = defining a function

/* function name(parameter) {
      description
  } */

name; //call the function here

/* function tempConverter(a) {
    return a * 1.8 + 32
}
console.log(tempConverter(19)) */

function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit10 = celsius * 1.8 + 32;
  return fahrenheit10;
}
console.log(convertCelsiusToFahrenheit(19)); // 1:33:42

//! Arrays

let arr = [20, 30, 40, 50, 100];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
//add element onto end of array
arr.push(200);
console.log(arr);

//
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
// })

// console.log(newArr)

let newArr = arr.filter((element) => element < 50);

console.log(newArr);

let grades = ["A+", "A", `B+`, `Fail`];
let noFailGrades = grades.filter((element) => element.length < 3);
console.log(noFailGrades);

let goodGrades = grades.filter((element) => element !== `Fail`);
console.log(goodGrades);

let greatGrades = [];

for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== `Fail`) {
    greatGrades.push(grades[i]);
  }
}

console.log(greatGrades);

let squares = [1, 4, 9, 16];

// let newSquares = squares.map((element) => {
//     console.log(element)
//     return undefined;
// })
let newSquares = squares.map((element) => NaN);

console.log(newSquares);

let dollars = [1, 5, 10, 3]; //changing elements in an array
let cents = dollars.map((element) => element * 100);
console.log(cents);

let newCents = []; //alternative method with using the .map array func
for (let i = 0; i < dollars.length; ++i) {
  newCents.push(dollars[i] * 100);
}
console.log(newCents);

//! Objects

let userFirstName = `Jimmy`;
let userLastName = `Austin`;
let userDiscordId = `Friedrice`;
let userSubStatus = `VIP`;

// objects make this simpler
//* this is the JS code for registering onto a web
let users = [
{
    username: `Jimmy`,
    email: `19227@tgs.school.nz`,
    password: `password`,
    subscriptionStatus: `Free`,
    discordId: `Friedriceballs`,
    lessonsCompleted: [0, 1, 2],
}
];
function register(user){
    users.push(user);
}
register({
    username: `Liam`,
    email: `21345@tgs.school.nz`,
    password: `password1`,
    subscriptionStatus: `VIP`,
    discordId: `Ptolemy`,
    lessonsCompleted: `[0, 1, 2, 3]`
}
);

console.log(users);
//* end of code

console.log(users[0]); //can access all variables in object
console.log(users[0].lessonsCompleted.map((elem) => elem * 0.5));


let presidents = [
  {
    Name: "Joe Biden",
    Party: "Democrat",
    Term: "2021 - ? ",
  },
  {
    Name: "Donald Trump",
    Party: "Republican",
    Term: "2017 - 2021",
  },
  {
    Name: "Barack Obama",
    Party: "Democrat",
    Term: "2009 - 2017",
  },
];

console.log(presidents[0].Term + " (currently in office)");

//! DOM (Document Object Model)
// the DOM allows you to access and change the styling and content of elements on your website

//* change HTML
console.log(document.querySelector(`.title`).innerHTML += `Frontend bitch`); //more important, can access elements, ids, classes
 
// .innerHTML allows to edit html through javascript

//* change CSS
document.querySelector(`.title`).style.fontSize = `10px`

function toggleDarkMode() {
  document.querySelector('body').classList.toggle("dark-theme")
}