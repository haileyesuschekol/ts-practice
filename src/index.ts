// types
let sales: number = 1234 //number
let course: string = "TypeScript" //string
let is_published: boolean = true //boolean
let level //any
let array: number[] = [1, 2, 3] //number

function fName(doc: string) {
  console.log(doc)
}

// tuple
// use it when we have two value pair
const user: [number, string] = [1, "userName"]

//enums
// declare a constants
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let Mysize: Size = Size.Medium
console.log(Mysize)

// functions
// properly annotate parameters and return types
function calc(tax: number): number {
  if (tax < 2023) return 10
  return 15
}
// type aliase
type Employee = {
  id: number
  name: string
  retire: (date: Date) => void
}

// objects

let employee: Employee = {
  id: 1,
  name: "userName",
  retire(date: Date) {
    console.log(date)
  },
}

// advanced

// union type -- combining types
function kgToLibs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2
  else return parseInt(weight) * 2.2
}
kgToLibs(10)
kgToLibs("10")

// type intersection

type draggable = {
  drag: () => void
}
type resizable = {
  resize: () => void
}

type uiWidget = draggable & resizable

let textBox: uiWidget = {
  drag: () => {},
  resize: () => {},
}

// literal --exact same as defined
type Quantity = 50 | 100
let quantity: Quantity = 100

// nullable type
function greet(name: string | null) {
  if (name) console.log(name)
  else console.log("Hola!")
}
greet(null)

// nullish coaelscing -- check null or undifined value
let speed: number | null = null
let ride = {
  speed: speed ?? 30,
}
// type assertion --telling type to compiler
let phone = document.getElementById("phone") as HTMLInputElement
