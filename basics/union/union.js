"use strict";
// We use pipe operator "|" in type declaration when we have to give a combination of data types to the variable
// It signifies that the variable can either be any of them
Object.defineProperty(exports, "__esModule", { value: true });
var score = 22;
// The below mentioned variable signifies that it can hold the properties of either the user or the admin
var rohit = {
    name: "Rohit",
    id: 12,
};
//While giving multiple data types to the function arguments, we need to check for
//the type inside the function while dealing with the variables
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//******************************************************************/
//ARRAYS//
var data = [1, 2, 3, 4, "q"];
