// file: index.js

console.log("Hello from JavaScript :)");
alert("This is an alert box! Click ok to close ");


const body = document.querySelector("body"); // This identifies the body of the DOM for index.html , which previously linked via <script></script> tag


//Creating a list of groceries:
const recipeList = document.createElement("ul"); // created ordered list element
const item1 = document.createElement("li"); // create list item element 
item1.innerText = "Bannanas"; // determine the text of the list item element
recipeList.appendChild(item1); //append the list item with its content into the ul 

const item2 = document.createElement("li");
item2.innerText = "Eggs";
recipeList.appendChild(item2);

const item3 = document.createElement("li"); // create list item
item3.innerText = "Flour"; // fill it with text
recipeList.appendChild(item3); // append list item into ul 

// Now you have ul with 2 list items containing text
// Append the ul list (unordered list) into the body:

body.appendChild(recipeList);


// SEING FETCH REQUESTS:
// and consol.logging them (should see it on the terminal)
//  url to be used = https://jsonplaceholder.typicode.com/todos/1

const example_url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(example_url)
    .then((response) => response.json())
    .then((todo)=>{console.log(todo)});




// SEING FETCH REQUESTS:
//EXAMPLE 2(a)-> Random joke: Gives you a json

//  url to be used = https://official-joke-api.appspot.com/random_joke
const another_url = "https://official-joke-api.appspot.com/random_joke";
fetch(another_url)
    .then((response) => response.json())
    .then((joke)=>{
        console.log(joke)
    });
// This is what you'd get on the console when you open the browser and open the console on developers tool of your website:
/* 
{type: 'general', setup: 'Where do hamburgers go to dance?', punchline: 'The meat-ball.', id: 285}
id: 285
punchline: "The meat-ball."
setup: "Where do hamburgers go to dance?"
type: "general"
[[Prototype]]: Object
*/

//  <--------------------------------------->

//EXAMPLE 2(b)-> Getting a Random joke out from the json (joke API):
fetch(another_url)
    .then((response) => response.json())
    .then((joke)=>{
        console.log(joke["setup"])
        console.log(joke["punchline"])
    });

// Console:
/* Will end up always giving a random joke and answer:
EXAMPLE:
Never take advice from electrons.
index.js:65 They are always negative. */

//  <--------------------------------------->

//EXAMPLE 2(c)-> Getting a Random joke out from the json (joke API) ONTO web page:
/* Combine your code in the exercise above with the DOM manipulation from last section 
to create a page that displays a random joke each time you visit it. */

const joke_generator = document.querySelector("p") // This is where i'll put in the joke (index.html)

fetch(another_url) // use the fetch method, like above...
    .then((response) => response.json())
    .then((joke)=>{
        joke_generator.textContent = "Joke of the Day: \n" // but instead of console.logging here you make this the text content of whatever you decided to query selector (i.e. what part of the DOM you 'honed into' to add content to)
        joke_generator.textContent += joke["setup"] + "\n"; 
        joke_generator.textContent += joke["punchline"];
    });


