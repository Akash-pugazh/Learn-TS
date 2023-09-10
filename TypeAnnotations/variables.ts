// ^ Primitive Types
let marks: number = 21;
let fullName: string = 'Akash';
let isLoggedIn: boolean = true;
let nothingMuch: null = null;
let none: undefined = undefined;
let now: Date = new Date();

// ^ Object Types
let colors: string[] = ['red', 'green', 'blue'];
let myMarks: number[] = [12, 21, 22];
let decisionFlow: boolean[] = [true, false, false];

class Car {}
const buggati: Car = new Car();

interface Points {
  x: number;
  y: number;
}
let coordinatePoints: Points = {
  x: 10,
  y: 20,
};

const printNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


