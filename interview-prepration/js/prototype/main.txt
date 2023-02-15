function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

console.log(Human);
console.log(Human.prototype)

//Create an object person1 using the Human constructor function
var person1 = new Human("Virat", "Kohli");

console.log(Human.prototype === person1.__proto__); //true

////////Example2///////////
Date.prototype.getCustomDay = function(){
    return "My Custom Day";
}

//now getCustomDay method will be available to all instances

var myDate = new Date();
console.log(myDate);
