const user = { username: 'Roy', age: 34, country: 'CAN' };
const { username, ...values } = user;
console.log(username);
console.log(values);