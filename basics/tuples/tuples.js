"use strict";
//Tuples is a way of determining the data types of the elements in the array as per their order
// For the below example,  it signifies that this array can have 3 elements with the
// given data types and should in the same order also
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ["Rohit", 26, true];
//However, there is an edge case below, we can still use the array methods to 
// change the elements of te array against the pre-set rules that we defined usinf tuples
user.push('true');
