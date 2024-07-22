// file: index.js (index.html has script with src as index.js (current file))

console.log("Hello from JavaScript :)"); // This message will be seen on console of the browser (at the developer tools)
alert("This is an alert box! Click ok to close "); // alert will be seen as soon as you go onto the browser and user will be prompted to click the button to close the alert 

// 1) <<<<<<<<<<<<<<<<<<<<<<<<<<<<-MANIPULATING THE DOM ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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


// 2)<<<<<<<<<<<<<<<<<<<<<<<<<<<<-FETCH REQUESTS: ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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


 //  <--------------------------------------->
// 3 (a)<<<<<<<<<<<<<<<<<<<<<<<<<<<<- EVENT LISTENERS : ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// The "listener" is a function that will be called whenever the event "happens". e.g. For example, we can attach a function to be executed whenever the user clicks on the button with a specific id 
//We use JavaScript event listeners to run code when the user interacts with the page (e.g clicking on a button)

//2 steps for approaching this:
// 1. Get the DOM element (e.g. document.querySelector, etc.)
// 2. Attaching the event listener

/* EXAMPLE

STEP 1...
const buttonEl = document.querySelector('#my-button'); 

THEN STEP 2...
buttonEl.addEventListener('click', () => {
  // this will execute when the user clicks on the button
  console.log('clicked!');
});

OR SHORTER SYNTAX (FOR STEP 2):
document.querySelector('#my-button').addEventListener('click', () => {
  console.log('clicked!');
});

NOTE :  the addEventListener has been called for the event to be handled at all.
EXAMPLE:
// This function will attach the event listener when called 
const attachListener = () => {
  document.querySelector('#my-button').addEventListener('click', () => {
    console.log('clicked!');
  });
}

// If the user clicks on the button now, nothing will happen (yet)

// ...

// Later, we call the function defined previously
attachListener();

// The click is now handled

*/


// TASK -> Take your joke code from the previous section, and adapt it so that the punchline to the joke is only shown after the user clicks a button.

//STEP 1 : Add a button to the html, that a person(user) can click on  why button? because i've chosen my event listener to 'wait' for the user action of clicking and need something for the user to click on. Once button added to index.html file , follow step 2

//STEP 2: Add something to 'identify' the button e.g. an id . I've named my id "button" 
//STEP 3 : 'identify the component you want to attach an event listener to 

const listening_button = document.getElementById("button") //document.querySelector("button") works just fine too, althogh the more specific the better in the long-run

//STEP 4 : CREATE event listener , that 'waits' for click on the button you identified earlier on
listening_button.addEventListener('click', () => {
    console.log("You've gone and clicked the button! :D");
});

// STEP 5:
const exampleListener = () => {
    // copy paste the event listener from step 4 here:
    listening_button.addEventListener('click', () => {
        console.log("You've gone and clicked the button! :D");
    });
}


//STEP 6 : CLICK ON THE BUTTON! Having opened the developer tool - you should see the console put out the message aboves

const joke_appears_on_button_click = () => {
    listening_button.addEventListener('click', () => {
        // will put the joke in a h2 element to see it works
        fetch(another_url) // use the fetch method, like above...
            .then((response) => response.json())
            .then((joke)=>{
                document.querySelector("h2").innerText  = joke["setup"] + "\n"; 
                document.querySelector("h2").innerText  += joke["punchline"];
    });
    });
}


// 3 (a) Take your joke code from the previous section, and adapt it so that the punchline to the joke is only shown after the user clicks a button.






/*  ************** NOTE : Event listeners are NOT limited to clicks! ****************** 
There are an enormous number of events available for us to listen for, everything from mouse clicks, key strokes, and scrolling, to rotating your device, printing the page or even plugging in a gamepad!
****************************************************************************************
*/