"use strict";
// Basic Types
let id = 5;
let company = "Google Inc";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, true, 'Hello', 'World'];
// Tuple
let person = [1, 'Google', true];
// Tuple Array
let employee;
employee = [
    [1, 'Google'],
    [1, 'Google'],
    [1, 'Google']
];
// Union
let pId;
pId = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} ${this.id}`;
    }
}
const hello = new Person(1, 'Ade');
// SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employeee = new Employee(3, 'Ade', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Hello', 'World', 'Year',]);
numArray.push(5);
