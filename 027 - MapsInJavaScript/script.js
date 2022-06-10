// Maps in JavaScript

// It is introduced with ES6 classes. It is like a object which is have a keys and values.We can use any type of keys and values. Like you can use function, strings, blank object as a keys.

// Intiallize empty map
const myMap = new Map()
// console.log(myMap);

// Adding the keys of map object
const key1 = "String", key2 = {}, key3 = function () { }

// Setting the keys and values using set() method
myMap.set(key1, 'String');
myMap.set(key2, 'Empty Object');
myMap.set(key3, 'Empty Function');

// Getting the values from the myMap object
let value1 = myMap.get(key1)
let value2 = myMap.get(key2)
let value3 = myMap.get(key3)

console.log(`Your key1 is ${value1}, key2 is ${value2} and key3 is ${value3}`);
console.log(myMap);


// Get the size of the myMap object
console.log(myMap.size);

// Iterate the keys and values of myMap object using for..of loop
for (let [key, value] of myMap) {
    console.log(`Your key is ${key} and value is ${value}!`);
}

// Iterate the keys and values of myMap object using for..each loop
myMap.forEach((value, key) => {
    console.log(key, value);
});

// get only keys from myMap object
for (let key of myMap.keys()) {
    console.log('Your key is ', key);
}

// get only values from myMap object
for (let value of myMap.values()) {
    console.log('Your value is ', value);
}

// Converting map to array
let myArray = Array.from(myMap)
console.log(myArray);
