const names = []; // the same thing string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 200);
});
promise.then((data) => {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'john' }, { age: 26 });
function countAndDescribe(element) {
    let descText = 'Got no value.';
    if (element.length === 1) {
        descText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descText = 'Got ' + element.length + ' elements';
    }
    return [element, descText];
}
console.log(countAndDescribe('Hi There'));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'John' }, 'age');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('John');
textStorage.addItem('Doe');
textStorage.removeItem('Doe');
textStorage.getItems();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
const nameMock = ['john', 'doe'];
nameMock.push('foo');
//# sourceMappingURL=generics.js.map