let today
let x = 10
let y = "20"

function printData() {
	console.log("hello madhav") // this the void function type we don't assign the return value
	today = new Date()
	// return (today = 10 * 20 * 30) //this is the not the void value because return the value
	return x + y
}
printData()
