//Functions
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!')
}

greet('Kemal Can')

/* 
would be a runtime error if executed
greet(42)
*/

// Return Type Annotations

function getFavoriteNumber(): number {
  return Math.random()
}

// Functions Which Return Promises

async function getFavoriteNumberAsync(): Promise<number> {
  return Math.random()
}

//   Union Types

function printId(id: number | string) {
  console.log('Your ID is: ' + id)
}

// OK
printId(101)

//OK
printId('202')

// Error
printId({ myId: 22342 })

// Working with union types
function printIdToUpper(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// Another example:
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '))
  } else {
    console.log('Welcome lone traveler ' + x)
  }
}

// Type Aliases
type Point = {
  x: number
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

// Interfaces
interface graphPoint {
  x: number
  y: number
}

function printGraphcoord(pt: graphPoint) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

// Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed())
}
