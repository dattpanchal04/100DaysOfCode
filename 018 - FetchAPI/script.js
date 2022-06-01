let btn = document.getElementById('btn');
let contentDiv = document.getElementById('content');


// Function to get the text data using fetch!

function getDataFromFile() {

    let url = "sampleData.txt"

    fetch(url).then((response) => {
        return response.text()
    }).then((data) => {
        console.log(data)
    })

}


// Function to get JSON data using Fetch data ( Get request )
function getData() {

    let url = "https://api.github.com/users"

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })

}

// Function for POST request
function postData() {

    let url = "https://jsonplaceholder.typicode.com/posts";

    let data = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    let params = {
        method: "post",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data) // In most of cases your data is objects, that's why we use stringify
    }

    fetch(url, params).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })

}

// console.log("print this before get/fetch data!")

// This function returns at the last moment. Before function, this two console statement is run. Why ? because getData() function takes some times to fetch the data! It is run in background. 

getDataFromFile();
getData();
postData();

// console.log("print this after get/fetch data!")