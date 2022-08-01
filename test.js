
let name1 = "Piotr";
let age1 = 30;

class Data { 
    constructor(name, age, gender) { 
        this.name = name;
        this.age = age;
        this.gender = gender;
}
}
// Nie specyficzne -  let
let p1 = new Data('Dawid',22,'M');
console.log(p1.name);
p1.age = 23;
console.log(p1.age);
console.log(name1);
name1 = 20;
console.log(name1);
// Specyficzne - string, itd.


// Object
let person =  {
    name: 'Maciek',
    age: 29
}

console.log(person);
console.log(person.name);
// Narazie tak 
person.name = 27;
console.log(person);
// Ma swoje specyficzne zadanie
person['name'] = 'Mateusz';
console.log(person);

// Tablica
let SelectedColors = ['red','blue'];
// Już widać że lepiej zrobione
SelectedColors[2] = 'green';
SelectedColors[3] = 2;
console.log(SelectedColors);
console.log(SelectedColors[0]);
console.log(SelectedColors.length);

// Funckja
function greet(nazwa) {
    console.log('Greetings ' + nazwa);
}

greet('Mateusz');

function square(number) {
    return number * number;
}
console.log(square(9));