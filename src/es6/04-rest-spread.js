// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'Max', age: 24 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);