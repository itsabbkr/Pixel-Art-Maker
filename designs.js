// When size is submitted by the user, call makeGrid()
$("#submit").click(makeGrid);

// Declare all variables
let color, row, col, canvas, tr, td;

 // Select color input
colorPicker = $("#colorPicker");
 
function makeGrid(e) {// Your code goes here!
  e.preventDefault();
  color = colorPicker.val()
  colorPicker.change(function(){
    color = $(this).val();
 })

  // Select size input
  row   = $("#inputHeight").val();
  col   = $("#inputWeight").val();
  canvas= $("#pixelCanvas");
  tr    = "<tr></tr>";
  td    = "<td></td>";

  canvas.children().remove();

  for(let i = 0; i < row; i++){
    canvas.append(tr);
  }
  for(let j = 0; j < col; j++){
    canvas.children().append(td);
  }

  canvas.mousedown("td", function(){
    $(this).css("background-color", color);
  })
}