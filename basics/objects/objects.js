"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Rohit",
    eail: "rohit@h.com",
    isActibe: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Rohit", isPaid: true });
// Giving object types to the functions below
// this is how we should define the object type for the function
function createCourse() {
    return {
        name: "REACT",
        price: 299,
    };
}
