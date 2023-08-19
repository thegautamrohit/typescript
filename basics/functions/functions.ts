function addTwo(num: number): number {
  return num + 2;
  //   return "Hello";
}

addTwo(4);

function login(name: string, email: string, isPaid: boolean = false) {}

login("Rohit", "g@g.com");

const heroes = ["Rohit", "Thor", "Ironman"];

heroes?.map((hero): string => {
  return `hero is ${hero}`;
});

//When the function is not going to return anything then when give it a "void type" to indicate it will not return anything

function consoleError(msg: string): void {
  console.log(msg);
}

consoleError("Err");

//when we want to terminate the function and stop the process or hanlde error, tn that case we use the function type as never terminate

function handleError(err: string): never {
  throw new Error(err);
}

export {};
