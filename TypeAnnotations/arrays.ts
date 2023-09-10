// ! Arrays

const test: number[] = [];

const msg: string[] = ["Hi", "Hello"];

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let newMsg = msg[0];

msg.map((msg: string) => {
  return msg.toUpperCase();
});

const impDates: (string | Date)[] = [new Date(), "2003-07-13"];
