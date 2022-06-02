// Async / Await

// Async function returns a promise
async function getData() {

    console.log("I am intered in the function!")

    // At this point, we are waiting to fetch the data
    const response = await fetch('https://api.github.com/users');

    console.log("Before getting response!")

    // At this point, we are waiting to resolve the promise
    let users = response.json();

    console.log("Finally Users Resolved!")

    return users;

}

console.log("Before get data!")
let runNow = getData()
console.log(runNow)
runNow.then(data => console.log(data))
console.log("After getting data!")