const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Heyy!!');
		} else {
			reject('Whoops!');
		}
	})
}

anotherFunction()
	.then(response => console.log(response))
	.catch(err => console.log(err));