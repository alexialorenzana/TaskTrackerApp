let form = document.getElementById("form");  // declaring a variable called form, this is basically the container for all of the elements in our form.                                                 
let textInput = document.getElementById("textInput"); 
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => { // this is to prevent the user from submitting the form until the validation has been completed.
e.preventDefault();
formValidation();
});

let formValidation = () => { // this function is passed in an object with two properties: textInput and msg.

if (textInput.value === "") { // contains the input element that was clicked on
console.log("failure");
msg.innerHTML = "Task cannot be blank";  // the message to be displayed if validation fails.
} else {
console.log("success");
msg.innerHTML = "";
acceptData(); // If validation is success, it calls acceptData(), which clears out any existing data from add and then adds new data to it before calling setAttribute("data-bs-dismiss", "").
add.setAttribute("data-bs-dismiss", "modal"); // called this to dismiss the modal window after adding new data to add.
add.click();

(() => {
add.setAttribute("data-bs-dismiss", "");//this is for the function be set to "" after adding new data to the input field.
})();
}
};    

let data = [{}]; //empty object

let acceptData = () => { // this is the event handler that accepts new values from the text file and data file of the form
data.push({ // pushes this newly created object onto the data array using push().
text: textInput.value,
date: dateInput.value,
description: textarea.value,
});

localStorage.setItem("data", JSON.stringify(data)); //this is where the user's input will be stored in local storage.

console.log(data);
createTasks(); //creates tasks based on what was entered in each text box and date box
};

//so i basically set up a function that accepts data from the user and stores it in localStorage.
//the function then logs the data to the console, and calls another function to create tasks based on the logged data.

let createTasks = () => {  
tasks.innerHTML = ""; //empty which means there are no tasks 
data.map((x, y) => { // a map method call with two arguments: x and y, used to iterate over each item in the array (in this case data ) and return something else based on what value was passed into it for x 
// returning HTML markup from within JavaScript
return (tasks.innerHTML += `
<div id=${y}>
<span class="fw-bold">${x.text}</span>
<span class="small text-secondary">${x.date}</span>
<p>${x.description}</p>
<span class="options">
<i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
<i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
</span>
</div>
`);
});

resetForm();
};

let deleteTask = (e) => {  // function that deletes the task from local storage, the e parameter is equaled to the event from the original function which is "click"
e.parentElement.parentElement.remove(); //removes all of the tasks in this form's parent element, which is its first child element.
data.splice(e.parentElement.parentElement.id, 1); //splices off one item from data and saves it back into local storage with a different name so that when you reload your browser or open up your console again, you'll see what was deleted.
localStorage.setItem("data", JSON.stringify(data));
console.log(data); // now we print out what the datat looks like now, and store it back into local storage
};

let editTask = (e) => {  //function when the users clicks on the edit button
let selectedTask = e.parentElement.parentElement; //get element from its parent, which is selectedTask
textInput.value = selectedTask.children[0].innerHTML; //change the value of the text input
dateInput.value = selectedTask.children[1].innerHTML; //chage the value of the date input
textarea.value = selectedTask.children[2].innerHTML; //change the value of the description input
deleteTask(e); //we call back the delete function created above to update the local storage with the edits
};

let resetForm = () => { //function to clear the input that have been entered previously
textInput.value = "";
dateInput.value = "";
textarea.value = "";
};

(() => { //when i refreshed the page, all my data would delete so this is why we had to retrieve the data from local storage
data = JSON.parse(localStorage.getItem("data")) || [] //i have to add Or: || and a blank array [] in my function to avoid uncaught typeError
console.log(data);
createTasks();
})();