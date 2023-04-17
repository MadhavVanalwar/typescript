var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreatedAccount = /** @class */ (function () {
    function CreatedAccount() {
    }
    CreatedAccount.prototype.makeEmail = function (user) {
        return "".concat(user, "@test.com");
    };
    return CreatedAccount;
}());
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " added as an User");
    };
    return Users;
}(CreatedAccount));
var u1 = new Users();
console.log(u1.addUser("madhav vanalwar"));
console.log(u1.makeEmail("madhavvanalwar"));
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employees.prototype.addEmployee = function (emp) {
        return "".concat(emp, " is added as an employee");
    };
    return Employees;
}(CreatedAccount));
var E1 = new Employees();
console.log(E1.addEmployee("sam"));
console.log(E1.makeEmail("sam"));
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
