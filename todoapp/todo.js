/*
    Functionality of App:-

    Add Button:-
      - copy content from the input text field
      - create elements for a New Task (div,checkbox,text,label,
      edit button, delete button)
      - add the newly created elements to the "tobocompleted" section

    Checkbox:-
      - if checked is true, then move task to "completed" section
      - if checked is false, then move task to "tobecompleted" section

    Edit Button:-
      - Check: Input text display is none?
        - copy label innerText to the input text value
        - show input text & hide label
      - Check: Input text display is inline?
        - copy input text value & update label value with it
        - hide input text and show label

    Delete Button:-
      - Delete the parent div elements

*/

// Get the Elements on HTML page
var addBtn = document.getElementsByTagName("button")[0];
var checkBox = document.getElementsByName("checkbox");
var editBtn = document.getElementsByClassName("edit");
var deleteBtn = document.getElementsByClassName("delete");
var tobecompletedEl = document.getElementById("tobecompleted");
var completedEl = document.getElementById("completed");


// Add Button Functionality
var addTask = function() {
  // get user entered Task
  var userInput = document.getElementById('userTxtbox').value;

  var newDiv = document.createElement("div");
  var newChkBox = document.createElement("input");
  newChkBox.type = "checkbox";
  newChkBox.name = "checkbox";
  newChkBox.onchange = moveTask;
  var newTxtBox = document.createElement("input");
  newTxtBox.setAttribute("type", "text");
  newTxtBox.name = "editcontent";
  var newLabel = document.createElement("label");
  newLabel.innerHTML = userInput;
  var newEditBtn = document.createElement("button");
  newEditBtn.setAttribute("class", "edit");
  newEditBtn.innerHTML = "Edit";
  newEditBtn.onclick = editTask;
  var newDeleteBtn = document.createElement("button");
  newDeleteBtn.class = "delete";
  newDeleteBtn.innerHTML = "Delete";
  newDeleteBtn.onclick = deleteTask;

  newDiv.appendChild(newChkBox);
  newDiv.appendChild(newTxtBox);
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newEditBtn);
  newDiv.appendChild(newDeleteBtn);

  tobecompletedEl.appendChild(newDiv);
  document.getElementById('userTxtbox').value = "";
}

// Move Task Functionality
var moveTask = function() {
  console.log("moveTask");

  if (this.checked == true) {
    console.log("move to completed");
    completedEl.appendChild(this.parentNode);
  }
  else if (this.checked == false) {
    console.log("move to tobecompleted");
    tobecompletedEl.appendChild(this.parentNode);
  }
}

// Edit Task Functionality
var editTask = function() {

  var listItem = this.parentNode;
  var editField = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  if (editField.style.display === "" || editField.style.display === "none") {
    console.log(label.innerText);
    editField.value = label.innerText;
    editField.style.display = "inline";
    label.style.display = "none";
  }
  else if (editField.style.display === "inline") {
    label.innerText = editField.value;
    editField.style.display = "none";
    label.style.display = "inline";
  }

}

// Delete button
var deleteTask = function() {
  console.log("delete task");
  var divItem = this.parentNode;
  console.log(divItem);
  var parentEl = divItem.parentNode;
  console.log(parentEl);

  parentEl.removeChild(divItem);
}


// Bindings
addBtn.onclick = addTask;

for (var i = 0; i < editBtn.length; i++) {
  editBtn[i].onclick = editTask;
}

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = deleteTask;
}

for (var i = 0; i < checkBox.length; i++) {
  checkBox[i].onchange = moveTask;
}
