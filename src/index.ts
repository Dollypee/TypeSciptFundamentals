
// Basic Types
let id: number = 5
let company: string = "Google Inc"
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr: any[] = [1, true, 'Hello', 'World']

// Tuple
let person: [number, string, boolean] = [1, 'Google', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Google'],
  [1, 'Google'],
  [1, 'Google']
]

// Union
let pId: string | number

pId = 22

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number



// Functions
function addNum(x: number, y: number): number {
  return x + y
}


function log(message: string | number): void {
  console.log(message)
}



// Interfaces

interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface= {
  id: 1,
  name: 'John',
}

// user1.id = 6

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


// Classes
class Person {
  id: number
  name: string
  

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} ${this.id}`;
  }

}

const hello = new Person(1, 'Ade')


// SubClasses

class Employee extends Person{
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const employeee = new Employee(3, 'Ade', 'Developer')


// Generics
function getArray<T>(items: T[]): T[]{
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Hello', 'World', 'Year',])

numArray.push(5)

