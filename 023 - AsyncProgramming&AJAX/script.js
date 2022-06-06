// Synchronous programming
// --------------------------------------------------------------------------

// for (let index = 0; index < 1000; index++) {
//     const element = index;
//     console.log("The number is " + index)
// }

// We are do some wait to see this statement
// console.log("Print this after execution of for loop!")


// Asynchronous programming
// -----------------------------------------------------------------------------
// setTimeout(() => {

// for (let index = 0; index < 300; index++) {
//     const element = index;
//     console.log("The number is " + index)
// }
// }, 100);

// We are cannot do wait to see this statement
// console.log("Run this first and after 100ms run for loop!")



// AJAX 
// -------------------------------------------------------------------------------


/*

What is AJAX ?

- AJAX is a synchronous javascript and XML
- AJAX is a not programming language. Rather, it's set of existing technologies
- AJAX helps in fetching data asynchronously without interfacing with the existing page
- No page reload/referesh
- Modern websites use JSOn instead or XML for the data transfer.

Why use ajax ? 

- No page reload
- Better user experiance
- Save network bandwidth
- Very interactive

How it works ?

- Ajax uses XMLHttpRequest object also called xhr object to achieve this
- Modern websites use JSON instead or XML for the data transfer
- Data can be transfered in any format and protocol ( not always https necessoryly )

*/

let fetchBtn = document.getElementById('btn');
fetchBtn.addEventListener('click', btnClickHandler);


function btnClickHandler() {

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object

    // Here true = Asynchronous ( Non-blocking ) , false = Synchronous ( Blocking )
    // GET means we only fetch the data
    // POST means we fetch the data but we also send our data with it

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

    // What to do when response is ready
    xhr.onload = function () {

        // Check the status
        // The HTTP status code of 200 is OK
        if (this.status === 200) {

            let obj = JSON.parse(this.responseText)
            // console.log(obj);
            // console.log(obj['data'][0]['avatar']);


            let card = document.getElementById('card');
            let html = "";
            let userCount = 0;
            for (key in obj) {
                html += `
                <div class="card" id="card">
                    <div class="card-header">
                        User ${userCount += 1}
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <span>Name</span>
                        <h1>${obj[key].name}</h1> <br>
                        <span>Username</span>
                        <h2>${obj[key].username}</h2> <br>
                        <span>Email ID</span> <br>
                        <span>${obj[key].email}</span> <br>
                        <br>
                        <span>Website</span> <br>
                        <span>${obj[key].website}</span> <br>
                        </blockquote>
                    </div>
                </div>
                `
            }
            card.innerHTML = html;

        }
        else {
            // console.error("Some error is occured!")
            html = `<h1>Sorry, we could not found the result!</h1>`
        }
    }

    // Send the request
    // It's fetch the data without reloading or referesh the page
    xhr.send();


}
