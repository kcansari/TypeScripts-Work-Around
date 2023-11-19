interface PersonInt {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: PersonInt

user1 = {
  name: 'kemal',
  age: 26,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  },
}

user1.greet('hi there, I am')
///////////////////////////////////
interface AddFn {
  (a: number, b: number): number
}

let addFn: AddFn

addFn = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name: string
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  name: string
  outputName?: string

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

let user2: Greetable

user2 = new Person('John')

user2.name = 'Doe'
