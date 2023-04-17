"use strict";
// let data: any
// data = 20
// data = "string"
// let item: string
// item = data /// work the properly here in the  any type
let data;
data = 20;
data = "string";
let item;
if (typeof data === "string") {
    item = data; //this is the error in unknown type
}
