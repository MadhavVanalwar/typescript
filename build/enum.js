"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 11] = "SUPER_ADMIN";
    Role[Role["MANAGER"] = 12] = "MANAGER";
})(Role || (Role = {}));
console.log(Role);
// console.log(Role[0] === "ADMIN")
// console.log(Role.MANAGER === 2)
