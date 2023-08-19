"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "Hello";
}
addTwo(4);
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login("Rohit", "g@g.com");
var heroes = ["Rohit", "Thor", "Ironman"];
heroes === null || heroes === void 0 ? void 0 : heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
//When the function is not going to return anything then when give it a "void type" to indicate it will not return anything
function consoleError(msg) {
    console.log(msg);
}
consoleError("Err");
//when we want to terminate the function and stop the process or hanlde error, tn that case we use the function type as never terminate
function handleError(err) {
    throw new Error(err);
}
