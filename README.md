Istructions:

1. Create a static markup in html/css;

2.    Initialize Vue;

3.   Create an array of objects representing the tasks;

4.    Print the elements in the loop on the page if they exist;

5.    Otherwise, print the message "there are no tasks";

6.   Use v-model to monitor the value of an input;

7.    Add a method that will be activated on the button click;

8.   Add a check on the entered word;

9.   Toggle the 'done' class if the task has been completed;

10.   Add a method that removes the element from the list;

11.   Add a condition to the button click.

________________



Description:

Redo the to-do list exercise done in class. This time, each to-do will be an object, consisting of two properties:

-text, a string indicating the to-do text;

-done, a boolean (true/false) indicating whether the to-do has been done or not.

MILESTONE 1
Print inside an HTML list an item for each to-do. If the done property is true, display the to-do text with a strikethrough.

MILESTONE 2
Display next to each item an "x": clicking on it will remove the to-do from the list.

MILESTONE 3
Set up a text input field and an "add" button: clicking on the button will read the entered text and use it to create a new to-do, which is then added to the list of existing to-dos. In addition to clicking the button, also intercept the ENTER key to add the to-do to the list.

Bonus:
1- If the to-do has fewer than 5 characters, display an error message.

2- Clicking on the item's text, reverse the value of the done property of the corresponding to-do (if done was false, set it to true and vice versa).

3- Delete the to-do only if it has been completed, otherwise display an error message.