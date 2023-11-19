const names: Array<string> = [] // the same thing string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 200)
})

promise.then((data) => {
  data.split(' ')
})

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'john' }, { age: 26 })

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descText = 'Got no value.'
  if (element.length === 1) {
    descText = 'Got 1 element.'
  } else if (element.length > 1) {
    descText = 'Got ' + element.length + ' elements'
  }

  return [element, descText]
}

console.log(countAndDescribe('Hi There'))

function extractAndConvert<A extends object, B extends keyof B>(
  obj: Object,
  key: string
) {
  return obj[key]
}

extractAndConvert({ name: 'John' }, 'age')

class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('John')
textStorage.addItem('Doe')
textStorage.removeItem('Doe')
textStorage.getItems()

interface CourseGoal {
  title: string
  description: string
  date: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.date = date
  return courseGoal as CourseGoal
}

const nameMock: Readonly<string[]> = ['john', 'doe']
nameMock.push('foo')
