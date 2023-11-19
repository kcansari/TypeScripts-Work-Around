class Department {
  //   readonly id: string
  //   name: string
  private employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

const it = new ITDepartment('d1', ['John', 'Doe'])

const accounting = new Department('Accounting', 'Max')

accounting.describe()
accounting.addEmployee('Max')
accounting.printEmployeeInformation()

// const accountingCopy = {
//   name: 'DUMMY',
//   employees: ['DUMMY'],
//   describe: accounting.describe,
//   addEmployee: accounting.addEmployee,
//   printEmpInf: accounting.printEmployeeInformation,
// }

// accountingCopy.describe()
