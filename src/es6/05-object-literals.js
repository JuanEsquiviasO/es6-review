// enhanced object literals

function newUser(user, age, country, uId) {
	return {
		user,
		age,
		country,
		id: uId
	}
}

console.log(newUser('fokker', 32, 'CAN', 1));
