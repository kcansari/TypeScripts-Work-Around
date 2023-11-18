function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n2
  }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)

///////////////////////////////////////
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string
  age: number
  hobbies: string[]
  role: Role
} = {
  name: 'kemal',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

console.log(person.name, person.age)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
