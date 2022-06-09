// ----------------------------------------------------------------
// Local Storage
// Every website has his own local storage
// Local Storage stores the data permenetly. Once you set or store the data, it is permenetly stored!

// Add a key-value pair inside the local storage
let setName = localStorage.setItem('Name', 'Datt Panchal');
let setAge = localStorage.setItem('Age', 17);

// See the status of the localStorage
// console.log(window.localStorage);

// get or retrive the key-value or items of the localStorage
let getName = localStorage.getItem('Name')
let getAge = localStorage.getItem('Age')

console.log(getName, getAge);

// If you want to add a object or array in local storage, use JSON.stringify() and JSON.parse()
let myArray = ['Python', 'JavaScript', 'C', 'PHP'];

let setArray = localStorage.setItem('MyArray', JSON.stringify(myArray));

let getArray = JSON.parse(localStorage.getItem('MyArray'));
console.log(getArray);

// Iterate the items of the array using forEach loop
getArray.forEach(e => {
    console.log(e);
});

// Clear the particular key-value pair
// localStorage.removeItem('Age')

// Clear the entire local storage
localStorage.clear()



// -------------------------------------------------------------------------------------------
// Session Storage
// Session storage is temporaly. Once you close your browser, the data of session storage is cleared!

// Add a key-value pair inside the session storage
let setSessionName = sessionStorage.setItem('Name', 'Datt Panchal');
let setSessionAge = sessionStorage.setItem('Age', 17);

// get item or key-value pair of the session storage
let getSessionName = sessionStorage.getItem('Name')
let getSessionAge = sessionStorage.getItem('Age')

// check the status
console.log(window.sessionStorage);

console.log(getSessionName, getSessionAge);

// to clear the entire session storage
sessionStorage.clear()
