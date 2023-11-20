// for use this one you should add experimentalDecorators:true to ts.config file
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString + constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object</h1>', 'app')
class Individual {
  name = 'John'

  constructor() {
    console.log('Creating person object...')
  }
}

const inv = new Individual()

console.log(inv)

function Log(target: any, propertyName: string | symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (!(val > 0)) {
      throw new Error('Invalid Price')
    }

    this._price = val
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
