type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'john',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinablee = string | number
type Numeric = number | boolean

type Universal = Combinablee & Numeric

function add(a: Combinablee, b: Combinablee) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type Unknownemployee = Employee | Admin

function printEmployeeInformation(emp: Unknownemployee) {
  if ('privileges' in emp) {
    console.log('Privileges:' + emp.privileges)
  }

  if ('startDate' in emp) {
    console.log('StartDate:' + emp.startDate)
  }
}

printEmployeeInformation(e1)

class Car {
  drive() {
    console.log('Driving a car...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck')
  }
  loadCargo(load: number) {
    console.log('Total load:' + load)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(150)
  }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }

  console.log('Moving at speed: ' + speed)
}

const paragraph = document.querySelector('p')
const userInputelement = <HTMLInputElement>document.getElementById('user-input')

userInputelement.value = 'Hi there!'

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
}
