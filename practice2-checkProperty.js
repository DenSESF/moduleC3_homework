const person = {
	city: 'Moscow'
}

const student = Object.create(person);

student.ownCity = 'Piter';

function checkProperty(str, obj) {
	return (str in obj)
};

console.log(checkProperty('city', student));