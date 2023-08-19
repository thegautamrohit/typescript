// We use pipe operator "|" in type declaration when we have to give a combination of data types to the variable
// It signifies that the variable can either be any of them

let score: string | number = 22;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// The below mentioned variable signifies that it can hold the properties of either the user or the admin

let rohit: User | Admin = {
  name: "Rohit",
  id: 12,
};

//While giving multiple data types to the function arguments, we need to check for
//the type inside the function while dealing with the variables

function getDBId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//******************************************************************/

//ARRAYS//

const data: Array<number | string> = [1, 2, 3, 4, "q"];

export {};
