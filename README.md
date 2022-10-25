I coded along with: https://youtu.be/fL9cts8ykbU

CRUD operations =
C: create
R: read
U: update
D: delete

For this project I used bootstrap to make a modal,
bootstrap is a free oopen source front-end development framerwork
and a modal is basically a popup box that is displayed on top of the main contect

then in my css
i added properties to the body to keep the app in the exact center of the screen
and added more css properties to my classes and divs and to the modal card as well

in JS the first thing I did was select all the selectors from the HTML that I needed to use
then created a form validation for the input fields to make sure the user cannot submit blank input fields
then I used local storage to collect data for whatever input the user writes steps were:

1. To collect the data from the input fields I used the funciton named acceptData and an array named Data then push them inside the local storage.
2. I had to invoke the function acceptData inside the else statement of the form validation in order for it to work properly.
3. I wrote a small function inside the else statement of the form validation to close the modal because it does not do it automatically.
4. I created a function that takes in the users input aka tasks. and used template literals to create the HTML elements.
5. I used a map to push the data collected from the user inside the template.
6. and once again in order for it to work I had to add the acceptData function I had already created into my createTasks function.

the next function I created was to be able to delete a task
first I had to delete the html element from the screen
then remove the targetted task from the data array
and lastly update the local storage with the new changes in the new data

after my delete task function I created a function to edit tasks
first I had to target the task selected to specifically edit that one
then i targetted the values which would be [task, date, and description]
and then i had to call the delete task function created above to remove the selected data from local storage, the HTML element and the data array.

ONCE I WAS DONE COLLECTING AND ACCEPTING DATA from the user:
I needed to clear the input fields
I created a functioned called resetForm

the two biggest errors I ran into were:

1.  when i refreshed the page, all my data would delete
2.  on my console i kept getting an uncaught typeError saying: cannot read properities of null (reading 'map')

to solve error 1: I created a IIFE (Immediately invoked function expression) to retrieve the data from local storage

to solve error 2: I had to include Or: || and a blank array [] in my function

then the last problem i ran into as well was whenever i would add more than three tasks
is that my tasks would overlflow the container app and to solve that I had to add: overflow-y: scroll; on my app class and an .app::-webkit-scrollbar

and obviously the biggest challenge for this project for me was not meeeting the requirements
I understand somewhat of the logic of using a JSON or text file using FS but when it came down to actually
creating the server and just overall trying to grasp the problem solving I just ended up sticking with local storage.
