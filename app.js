class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   readonly id: string
        //   name: string
        this.employees = [];
        // this.name = n
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
const it = new ITDepartment('d1', ['John', 'Doe']);
const accounting = new Department('Accounting', 'Max');
accounting.describe();
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
// const accountingCopy = {
//   name: 'DUMMY',
//   employees: ['DUMMY'],
//   describe: accounting.describe,
//   addEmployee: accounting.addEmployee,
//   printEmpInf: accounting.printEmployeeInformation,
// }
// accountingCopy.describe()
//# sourceMappingURL=app.js.map