interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // /Below are the examples for how we can define a method as a property
  //   startTrial: () => string;
  startTrial(): string;
  //This is how we can define the type for the parameters of the method
  getCoupon(couponName: string, value: number): number;
}

//If we want to add some more properties into the existing interface
// then we can easily create a new interface under the same name and it will
//automatically inherit the properties of the existing interface

interface User {
  githubId: string;
}

//If we want to use some properties from the existing interface in to the new one
// then we can easily inherit the properties from the existing interface using "extends"

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const rohit: User = {
  dbId: 43,
  email: "rohit@gmail.com",
  userId: 43,
  startTrial: () => {
    return "Rohit";
  },
  getCoupon(coupon: "New30", value: 10) {
    return value;
  },
  githubId: "1232",
};

export {};
