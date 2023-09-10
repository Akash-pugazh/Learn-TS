// ! Functions

const calcSum = (a: number, b: number): number => {
  return a + b;
};

const calcSub = (a: number, b: number): number => {
  return a - b;
};

function calcDiv(a: number, b: number): number {
  return a / b;
}

const calcMul = function (a: number, b: number): number {
  return a * b;
};

// ! Void Never

const logger = (text: string): void => {
  console.log(text);
};

const throwError = (err: string): never => {
  throw new Error(err);
};

