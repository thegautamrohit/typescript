// const user = {
//   name: "Rohit",
//   eail: "rohit@h.com",
//   isActibe: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Rohit", isPaid: true });

// ***********// Giving object types to the functions below *****************//
// ***********// this is how we should define the object type for the function *************//

// function createCourse(): { name: string; price: number } {
//   return {
//     name: "REACT",
//     price: 299,
//   };
// }

//************************************************************************ */

//We can use readonly keyword before a key if we do not want to
//update it in any case

// We can use the "?" sign after a key if we want to make that optional,
// after adding it , that key will be optioal to add in that object type

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  card?: number;
};

let myUser: User = {
  _id: "12345uewtriwu",
  name: "Rohit",
  email: "r@g.com",
  isActive: true,
};

myUser.name = "Gautam";
// myUser._id = "12345uewtriwu"; // It will throw error if we try to update the read only property



//******************************************************************************* */



// Below is the example of how we can extend our types and make use of them to create
// a new type which inherits all the properties of the initial types

type CardNumber = {
  cardNumber: number;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

let card: CardDetails = {
  cvv: 234,
  cardNumber: 1234567890,
  cardDate: "2015-03",
};

console.log(card);

export {};
