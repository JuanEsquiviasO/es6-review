function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

const it = iterate(['Roy', 'Rick', 'Max', 'Ben', 'Miriya']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);