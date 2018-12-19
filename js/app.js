// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function getColor() {
  return document.getElementById("colorPicker").value;
}

function createCell(i, j) {
  var cell = document.createElement("td");
  var color = document.createAttribute("color");
  color.value = "white";
  cell.setAttributeNode(color);
  addListeners(cell)
  return cell;
}

function addListeners(cell) {
  // setup listeners
  cell.addEventListener( "click", function(event) {
    $(this).attr("color", getColor());
  });
  cell.addEventListener( "mouseover", function() {
    $(this).css("background-color", getColor());
  });
  cell.addEventListener( "mouseleave", function() {
    $(this).css("background-color", $(this).attr("color"));
  });
}

function clearCellClickHandler(event) {
   clearCell($(this)
   )};

function makeGrid() {
  var X = document.forms["sizePicker"]["inputWeight"].value;
  var Y = document.forms["sizePicker"]["inputHeight"].value;

  var table = document.getElementById("pixelCanvas");
  table.innerHTML = "";

  for (i = 0; i < X; i++) {
    var row = document.createElement("tr");
    for (j = 0; j < Y; j++) {
      var cell = createCell(i, j);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
