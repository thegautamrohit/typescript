const user = {
  name: "Rohit",
  eail: "rohit@h.com",
  isActibe: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Rohit", isPaid: true });

// Giving object types to the functions below
// this is how we should define the object type for the function

function createCourse(): { name: string; price: number } {
  return {
    name: "REACT",
    price: 299,
  };
}




export {};
