const person = {
	city: 'Moscow'
}

const student = Object.create(person);

student.ownCity = 'Piter';

function getOwnProperty(obj) {
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`Собственное свойство ${key}`);
		}
	}
};

getOwnProperty(student);
