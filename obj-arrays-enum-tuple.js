function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult, resultPhrase);
///////////////////////////////////////
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'kemal',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
console.log(person.name, person.age);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=obj-arrays-enum-tuple.js.map