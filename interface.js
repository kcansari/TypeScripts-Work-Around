let user1;
user1 = {
    name: 'kemal',
    age: 26,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('hi there, I am');
let addFn;
addFn = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user2;
user2 = new Person('John');
user2.name = 'Doe';
//# sourceMappingURL=interface.js.map