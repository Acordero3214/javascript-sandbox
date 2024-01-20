// Values are stored on the stack
const name = 'Al';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Alvaro',
    age: 32
}

let newName = name;
newName = 'Alvaro';

let newPerson = person;
newPerson.name = 'Al';

console.log(name, newName);
console.log(person, newPerson);

