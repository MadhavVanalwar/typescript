function apiError(msg, code): never {
	throw { message: msg, apiCode: code }
}
console.log(apiError("server side error", 500))

// function tryReturn() {
// 	// return true //return the true value here
// }
// console.log(tryReturn()) //return the here undefined
