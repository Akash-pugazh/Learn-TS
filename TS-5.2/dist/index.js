"use strict";
// OOPS
class Account {
    constructor(id, owner, _balance, tax = 0, nickName) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.tax = tax;
        this.nickName = nickName;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
        this.tax = this.calcTax();
    }
    calcTax() {
        return this._balance * 0.1;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
const account = new Account(1, "Akash", 0, 0, "BOI");
account.deposit(1000);
// console.log(account.balance);
account.balance = 10000;
// console.log(account);
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.A1 = "Akash";
seats.A2 = "Virus";
// console.log(seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
// console.log(Ride.activeRides);
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    get fullName() {
        return this.fName + " " + this.lName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, fName, lName) {
        super(fName, lName);
        this.studentId = studentId;
    }
    get fullName() {
        return "Student : " + super.fullName;
    }
    takeTest() {
        console.log("Taking Test");
    }
}
class Teacher extends Person {
    get fullName() {
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
function printFullNames(persons) {
    for (let person of persons) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a Circle");
    }
}
class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    add() {
        return this.number1 + this.number2;
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let testKeyValuePair = new KeyValuePair(1, "Elp");
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray("Help");
//# sourceMappingURL=index.js.map