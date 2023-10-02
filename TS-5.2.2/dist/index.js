"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
const tax = (0, tax_1.calcTax)(10000);
console.log(tax);
console.log((0, tax_1.greet)("Akash"));
