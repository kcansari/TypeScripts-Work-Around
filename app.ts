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
const person: {
  name: string
  age: number
} = {
  name: 'kemal',
  age: 26,
}

console.log(person.name, person.age)
