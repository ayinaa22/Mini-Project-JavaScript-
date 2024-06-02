/*Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age.*/

// function fetchData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const users=[
//                 {id:1,name:'Aaniya',age:19},
//                 {id:2,name:'Bitisha',age:18},
//                 {id:3,name:'Samikshya',age:26},
//             ];
//             resolve(users);
//         },2000);
//     });

// }
// fetchData()
//     .then(users=>{
//         console.log('Fetched users:',users);
//     })
//     .catch(error =>{
//         console.log('error fetching users',error);
//     })

    /*2. Closures
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable.*/

// function createCounter(){
//     let count=0;
//     return{
//         increment: function(){
//             count+=1;
//         },
//         getCount: function(){
//             return count;
//         }
//     };
// }

// const counter=createCounter();
// counter.increment();
// console.log(counter.getCount());
// counter.increment();
// counter.increment();
// console.log(counter.getCount());

/*3. Callbacks
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers.*/

// function processData(num,callback){
//     return num.map(callback);
// }
// const num=[1,2,3,4,5];
// function double(numbers){
//     return numbers*2;
// }

// const doubledNumbers=processData(num,double);
// console.log(doubledNumbers);

/*4. Async/Await
Rewrite the fetchData function from Question 1 using async and await.*/
// async function fetchData(){
//     const delay =(ms) => new Promise(resolve => setTimeout(resolve,ms));
//     await delay(2000);

//     const users=[
//         {id:1,name:'Aaniya',age:19},
//         {id:2,name:'Bitisha',age:18},
//         {id:3,name:'Samikshya',age:26},
//     ];
//     return users;
// }

// (async () =>{
//     try{
//         const users=await fetchData();
//         console.log('fetched users:',users);

//     }catch(error){
//         console.error('Error fetching users:',error);
//     }
// })();

/*5. Array Manipulation: Map
Given an array of numbers, create a function that doubles each number using map.*/
// function doubleNumbers(numbers) {
//     return numbers.map(number => number * 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = doubleNumbers(numbers);
// console.log(doubledNumbers);

/*6. Array Manipulation: Filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter.*/
// function filterNumbersGreaterThanTen(numbers) {
//     return numbers.filter(number => number <10);
// }
// const numbers = [4,8,10,12,14];
// const filteredNumbers = filterNumbersGreaterThanTen(numbers);
// console.log(filteredNumbers); 

/*7. Array Manipulation: Find
Given an array of numbers, create a function that finds the first number greater than 15 using
find.*/
// function findNumberGreaterThanFifteen(numbers) {
//     return numbers.find(number => number > 15);
// }

// const numbers = [10, 20, 30, 40, 50];
// const foundNumber = findNumberGreaterThanFifteen(numbers);
// console.log(foundNumber); 

/*8. Array Manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce.*/
// function sumNumbers(numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// const totalSum = sumNumbers(numbers);
// console.log(totalSum);

/*9. Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects.*/
// function transformArrayToObject(users) {
//     return users.reduce((acc, user) => {
//         acc[user.id] = user;
//         return acc;
//     }, {});
// }
// const usersArray = [
//     { id: 1, name: 'Aaniya', age: 19 },
//     { id: 2, name: 'Bitisha', age: 18 },
//     { id: 3, name: 'Samikshya', age: 26 }
// ];
// const usersObject = transformArrayToObject(usersArray);
// console.log(usersObject);

/*10. Classes and Objects
Create a Person class with a constructor that accepts name and age parameters. Add a
method describe that returns a string describing the person.*/
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     describe() {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// const person1 = new Person('Aaniya', 19);
// console.log(person1.describe()); 

// /*11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study
// that returns a string indicating the student is studying.*/
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age); // Call the constructor of the parent class
//         this.grade = grade;
//     }

//     study() {
//         return `${this.name} is studying.`;
//     }
// }
// const student1 = new Student('Aaniya', 19, 'A');
// console.log(student1.describe()); 
// console.log(student1.study());    

/*12. Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
fetch data&quot;. Handle this error using .catch when calling the function.*/
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if (random < 0.5) {
//                 const data = [
//                     { id: 1, name: 'Aaniya', age: 19 },
//                     { id: 2, name: 'Bitisha', age: 18 },
//                     { id: 3, name: 'Samikshya', age: 26 }
//                 ];
//                 resolve(data);
//             } else {
//                 reject(new Error('Failed to fetch data'));
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then(data => {
//         console.log('Fetched data:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });

/*13. Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks.*/
// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if (random < 0.5) {
//                 const data = [
//                     { id: 1, name: 'Aaniya', age: 19 },
//                     { id: 2, name: 'Bitisha', age: 18 },
//                     { id: 3, name: 'Samikshya', age: 26 }
//                 ];
//                 resolve(data);
//             } else {
//                 reject(new Error('Failed to fetch data'));
//             }
//         }, 2000);
//     });
// }
// (async () => {
//     try {
//         const data = await fetchData();
//         console.log('Fetched data:', data);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// })();

/*14. Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce.*/






function getAllUniqueHobbies(users) {
    return users.reduce((uniqueHobbies, user) => {
        user.hobbies.forEach(hobby => {
            if (!uniqueHobbies.includes(hobby)) {
                uniqueHobbies.push(hobby);
            }
        });
        return uniqueHobbies;
    }, []);
}

const users = [
    { name: 'Aaniya', hobbies: ['sleeping', 'dancing', 'watching dramas'] },
    { name: 'Nabiya', hobbies: ['gardening', 'dancing', 'painting'] },
    { name: 'Samikshya', hobbies: ['watching animes', 'reading mangas', 'sleeping'] }
];

const uniqueHobbies = getAllUniqueHobbies(users);
console.log(uniqueHobbies);

/*
Conceptual Questions
1. Why are promises used in JavaScript? Explain the advantages of using promises over
traditional callback functions.
Ans:Promises in JavaScript are used to manage asynchronous operations, providing a cleaner and more manageable way to handle tasks that take time to complete, like data fetching or reading files.
Advantages over Callbacks:
1.Readability: Promises use .then(), avoiding deeply nested callbacks ("callback hell").
2.Error Handling: Promises use .catch() for centralized error handling.
3.Chaining: Promises chain operations with .then(), keeping code linear.
4.Composability: Promises use Promise.all to manage multiple async operations together.
5.Control: Promises avoid inversion of control, unlike callbacks.

2. What is a closure in JavaScript? Provide an example.
if a variable of outer function can get access to inner function, then it is called closure in JavaScript.
function createCounter() {
    let count = 0; // Variable in the outer scope

    return function() {
        count++; // Accessing the outer scope variable
        return count;
    };
}
const counter = createCounter(); 
console.log(counter()); 
console.log(counter());
console.log(counter()); 

3. What is a callback function and why is it used in JavaScript?
ans: a callback function is a function passed as an argument to another function. it allows a function to call another function.
it is used in js because it  allows the program to continue running while waiting for tasks like data fetchin and used to respond to events like button clicks.

4. What are async/await in JavaScript and how do they improve asynchronous programming?
async/await in JavaScript revolutionized asynchronous programming by offering a cleaner and more readable syntax compared to traditional Promise-based code. By marking a function as async, JavaScript allows the use of await within that function to pause execution until a Promise resolves or rejects. 
With async/await, error handling is simplified using try/catch blo
cks, enhancing code organization and readability. Overall, async/await has become the preferred method for managing asynchronous tasks in JavaScript due to its intuitive syntax and improved readability.

5.Write the difference between ES6 and JS.
ES6 is a specific version of JavaScript that introduced new features and enhancements, while JavaScript encompasses all versions of the language, including ES6.

6.6. What are some of the major features introduced in ES6?
ES6 introduced several major features to JavaScript, including arrow functions, classes, template literals, let and const for variable declarations, destructuring assignment, default parameters, promises, modules, iterators, and new data structures like Map and Set. These enhancements improved the readability, maintainability, and expressiveness of JavaScript code.

*/



