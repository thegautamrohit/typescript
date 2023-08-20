// If we have a certain set of values for a property we can use enum as below
// in the below example, we have defined an enum for selecting setas in a flight
// by creating an enum we can define there the possible outcomes for the same

//The outcomes will have the default value attached wiht them, we can hover over the variable to see.

const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

// In the below example, it is shown that we can also define the values for all the outcomes

const enum SeatcChoice2 {
  AISLE = 0,
  MIDDLE = "Mid",
  WINDOW = 2,
}

const mySeat = SeatChoice.WINDOW;

const mySeat2 = SeatcChoice2.MIDDLE;

export {};
