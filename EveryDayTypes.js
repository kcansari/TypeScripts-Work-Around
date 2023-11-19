var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Functions
function greet(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
greet('Kemal Can');
/*
would be a runtime error if executed
greet(42)
*/
// Return Type Annotations
function getFavoriteNumber() {
    return Math.random();
}
// Functions Which Return Promises
function getFavoriteNumberAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return Math.random();
    });
}
//   Union Types
function printId(id) {
    console.log('Your ID is: ' + id);
}
// OK
printId(101);
//OK
printId('202');
// Error
printId({ myId: 22342 });
// Working with union types
function printIdToUpper(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// Another example:
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler ' + x);
    }
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printGraphcoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
// Non-null Assertion Operator (Postfix !)
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
//# sourceMappingURL=EveryDayTypes.js.map