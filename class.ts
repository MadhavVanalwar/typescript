// class CreatedAccount {
// 	makeEmail(user) {
// 		return `${user}@test.com`
// 	}
// }

// class Users extends CreatedAccount {
// 	addUser(user) {
// 		return `${user} added as an User`
// 	}
// }
// const u1 = new Users()
// console.log(u1.addUser("madhav vanalwar"))
// console.log(u1.makeEmail("madhavvanalwar"))

// class Employees extends CreatedAccount {
// 	addEmployee(emp) {
// 		return `${emp} is added as an employee`
// 	}
// }

// const E1 = new Employees()
// console.log(E1.addEmployee("sam"))
// console.log(E1.makeEmail("sam"))

//constructor and initialization shorthand
// class Users {
// 	name = ""
// 	age = 0
// 	email = ""
// 	constructor(name, age, email) {
// 		this.name = name
// 		this.age = age
// 		this.email = email
// 		// console.log("constructor called")
// 	}

// 	dispVal() {
// 		console.log(this.name, this.age, this.email)
// 	}
// }
// const u1 = new Users("madhav", 28, "abc@gmail.com")
// u1.dispVal()
// const u2 = new Users()

//private and public class
// class Users {
// 	private name = ""

// 	setName(name: any) {
// 		this.name = name
// 	}

// 	displayName() {
// 		console.log(this.name)
// 		this.getNameLength()
// 	}

// 	private getNameLength() {
// 		console.log(this.name.length)
// 	}
// }

// const u1 = new Users()
// u1.setName("Madhav")
// // u1.name("maddy")
// u1.displayName()
// u1.getNameLength()

//class with es5 and es6
// class Users {
// 	name = ""
// 	email = ""

// 	addUser(user) {
// 		return `${user} is Added`
// 	}

// 	removeUser(user) {
// 		console.log(`${user} removed`)
// 	}
// }

// let User1 = new Users()
// let result = User1.addUser("madhav")
// User1.removeUser("peter")
// User1.addUser("Madhav")
