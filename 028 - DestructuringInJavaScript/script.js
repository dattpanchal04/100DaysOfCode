// Destructuring in JS

// example 1
let a, b;

[a, b] = [34, 45]

console.log(a, b);

// example 2
let x, y, z;

// here x=1, y=2 and z contains other numbers
[x, y, ...z] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(x);
console.log(y);
console.log(z);


// You can also do this thing with object
({ i, j, ...k } = { i: 10, j: 11, k: 12, l: 13, m: 14, n: 15 })
console.log(i, j, k);

const fruits = ["Apple", "Bannanas", "Mangoes"];
[c, d, e] = fruits;
console.log(c, d, e);

// Object Destruturing
const obj = {
    model: "HP",
    gender: "Male",
    age: "Infinite",
    start: function () {
        console.log('Function Started!');
    }
}

const { model, gender, age, start } = obj;
console.log(model, gender, age);
start()
