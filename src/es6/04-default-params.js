function newUser(name, age, country) {
	var name = name || 'Fokker';
	var age = age || 42;
	var country = country || 'USA';
	console.log(name, age, country);
}

newUser();
newUser('Dixon', 28, 'CAN');

// ----------

function newAdmin(name = 'Rick', age = 32, country = 'FRA' ) {
	console.log(name, age, country);
}

newAdmin();
newAdmin('Miriya', 27, 'MEL');