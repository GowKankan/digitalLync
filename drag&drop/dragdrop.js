
function drag(event) {
  //set the data type and value of the dragged data
  event.dataTransfer.setData("img", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var getImg = event.dataTransfer.getData("img");
  event.target.appendChild(document.getElementById(getImg).cloneNode(true));
}

function allowDrop(event) {
  event.preventDefault();
}
