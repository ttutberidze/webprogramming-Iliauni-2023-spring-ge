console.log('Hello World');


/* 
    number - 5, 6, 7
    string - 'Hello'
    boolean - true/false
    undefined - undefined
    null - null
    bigInt
    Symbol

    object
*/

// var, let, const


// a = 6;
// var a;

// console.log(a);

// const a = Symbol('123');
// const b = Symbol('123');
// console.log(a === b);

// const a = 5;
// let b = a;
// b = 10;
// console.log(a);

// const user = {
//     name: 'Temo',
//     age: 30,
//     address: {
//         country: 'Georgia'
//     }
// }

// const user2 = {
//     ...user,
//     address: {
//         ...user.address
//     }
// };

// user2.address.country = 'USA';
// console.log(user.address.country);

// const arr = [2, 3, 4, 'Hello', [1, 2], user];
// const arr2 = [...arr];
// arr2[5].name = 'James Bond';
// console.log(arr[5]);


// function calculateSum(a, b) {
//     if(a > 5) {
//         return a + b;
//     }
// }
// const myFunc = function(a, b) {
//     return a + b;
// }
// const myArrowFunc = (a, b) => {
//     return a + b;
// }

// const user = {
//     name: 'Temo',
//     age: 30,
//     sayHello: function () {
//         return 'Hello ' + this.name
//     }
// }
// console.log(user.sayHello())

const user = {
    name: 'Temo',
    age: 30,
    address: {
        country: {
            name: 'Georgia',
            city: {
                name: 'Tbilisi'
            }
        }
    }
}

// const name = 'James Bond';
// const age = user.age;
// const {name: myName, age, address: {country: {name: countryName, city: {name: cityName}}}} = user;
// console.log(myName, age, countryName, cityName);

// const arr = [2, 3, 4, 'Hello', [1, 2], user];
// const [, , , , , {name: userName}] = arr;
// console.log(userName);

// const printUser = ({name}) => name
// console.log(printUser(user))

// const {name: myName, age, ...myRestObject} = user;
// console.log(myRestObject);

// function main() {
//     if(true) {
//         var myName = 'James Bond';
//     }
//     console.log(myName);
// }
// main();

const cloneObject = (obj) => {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] === 'object') {
            cloneObject(obj[keys[i]])
        }
    }
}

console.log(cloneObject(user));
// დავწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს
// და დააბრუნებს მის deep copy-ს