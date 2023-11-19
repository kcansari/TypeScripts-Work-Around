const e1 = {
    name: 'john',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log('Privileges:' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate:' + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving a car...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(load) {
        console.log('Total load:' + load);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(150);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
const paragraph = document.querySelector('p');
const userInputelement = document.getElementById('user-input');
userInputelement.value = 'Hi there!';
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
};
//# sourceMappingURL=intersection-types.js.map