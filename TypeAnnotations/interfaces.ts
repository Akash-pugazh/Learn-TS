// ! Interfaces

interface User {
  userName: string;
  id: number;
  summary(): string;
}
const printUserDetails = (user: User): void => {
  console.log(user.userName);
  console.log(user.id);
};

const user1 = {
  userName: "aakash",
  id: 1,
  summary(): string {
    return "Hii I'm " + this.userName;
  },
};
printUserDetails(user1);

// ^ Generalization on Interfaces
interface Reportable {
  summary(): string;
}
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const car1 = {
  carName: "Buggati",
  speed: "120",
  summary(): string {
    return `${this.carName} is awesome goes speed of ${this.speed}km/hr`;
  },
};

printSummary(user1);
printSummary(car1);