// let data: any
// data = 20
// data = "string"

// let item: string
// item = data /// work the properly here in the  any type

let data: unknown
data = 20
data = "string"

let item: string
if (typeof data === "string") {
	item = data //this is the error in unknown type
}
