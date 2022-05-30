// Let's learn about the DOM in JS

// to console DOM, it's returns a object
let doc = document;
console.log(doc)

console.log(typeof (doc)) // Object

// returns a HTMl collection which consists the tags you use in your HTML
all = document.all
console.log(all)

console.log(document.body)

// Iterate all the elements of the body using foreach loop
// Array.from(all).forEach(function(e){
//     console.log(e)
// })

// Iterate links from a DOM
links = document.links;
console.log(links)

// Create HTML element using DOM
createElem = document.createElement('h1')
console.log(createElem)
console.log(all)

// 	Returns all <a> elements that have a name attribute
console.log(document.anchors)

// Returns the document's cookie
console.log(document.cookie)

//	Returns the document's doctype
console.log(document.doctype)

// Returns the <html> element
console.log(document.documentElement)

// You can checkout more properties of DOM on the internet

// Function to disabled the button
function disable() {
    let disableBtn = document.getElementById('disableBtn')

    disableBtn.setAttribute('disabled', true)
    disableBtn.textContent = "Thanks :)"
}

