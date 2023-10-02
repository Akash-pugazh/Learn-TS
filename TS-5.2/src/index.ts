// OOPS

class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public tax: number = 0,
    public nickName?: string
  ) {}

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Invalid Amount");
    this._balance += amount;
    this.tax = this.calcTax();
  }

  private calcTax() {
    return this._balance * 0.1;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }
}

const account: Account = new Account(1, "Akash", 0, 0, "BOI");
account.deposit(1000);
// console.log(account.balance);
account.balance = 10000;
// console.log(account);

class SeatAssignment {
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = "Akash";
seats.A2 = "Virus";

// console.log(seats);

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();

// console.log(Ride.activeRides);

class Person {
  constructor(public fName: string, public lName: string) {}

  get fullName() {
    return this.fName + " " + this.lName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, fName: string, lName: string) {
    super(fName, lName);
  }

  override get fullName() {
    return "Student : " + super.fullName;
  }

  takeTest() {
    console.log("Taking Test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor : " + super.fullName;
  }
}

const vijay = new Student(1, "Vijay", "Kumar");

// console.log(vijay.fullName);

// console.log("================================================");

// printFullNames([
//   new Student(1, "kutty", "Papa"),
//   new Teacher("Muthu", "Tiger"),
// ]);

function printFullNames(persons: Person[]) {
  for (let person of persons) {
    console.log(person.fullName);
  }
}

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  render() {
    console.log("Rendering a Circle");
  }
}

interface CalculatorProps {
  number1: number;
  number2: number;
  add(): number;
}

class Calculator implements CalculatorProps {
  constructor(public number1: number, public number2: number) {}
  add(): number {
    return this.number1 + this.number2;
  }
}

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let testKeyValuePair = new KeyValuePair<number, string>(1, "Elp");

function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray<string>("Help");

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetchData<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  userName: string;
}
interface Product {
  title: string;
}

const userRes = fetchData<User>("url");
const prodRes = fetchData<Product>("url");

interface PersonName {
  name: string;
}

function echo<T extends number | string | PersonName>(value: T): T {
  return value;
}

echo({ name: "Akash" });

interface Product1 {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}
// const test = new Store<Product1>();
// test.add({ name: "Banana", price: 20 });

class CompressibleStore<T> extends Store<T> {
  compress(): void {}
}

let test1 = new CompressibleStore<Product1>();

class SearchableStore<T extends { name: string }> extends Store<T> {
  override find(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name);
  }
}

class ProductStore extends Store<Product> {
  filterByProductsCategory(category: string): Product[] {
    return [];
  }
}

interface UserProp {
  userName: string;
  password: string;
}

type ReadOnlyUserProp = {
  [Property in keyof UserProp]: UserProp[Property];
};

type ReadOnly<T> = {
  [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
