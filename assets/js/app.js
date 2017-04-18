var parent = document.getElementById("parent");
var docFragment = document.createDocumentFragment();

function createBoxRed() {
  var boxRed = document.createElement("div");
  var boxRedMedium = document.createElement("div");
  var boxRedLittle = document.createElement("div");

  boxRed.setAttribute("id","box-red");
  boxRed.setAttribute("class","box-content");
  boxRedMedium.setAttribute("id","box-red-medium");
  boxRedMedium.setAttribute("class", "box-medium");
  boxRedLittle.setAttribute("id","box-red-little");
  boxRedLittle.setAttribute("class","box-little")

  parent.appendChild(boxRed);
  boxRed.appendChild(boxRedMedium);
  boxRedMedium.appendChild(boxRedLittle);
}
createBoxBlue();
createBoxRed();
function createBoxBlue() {
  var boxBlue = document.createElement("div");
  var boxBlueMedium = document.createElement("div");
  var boxBlueLittle = document.createElement("div");

  boxBlue.setAttribute("id","box-blue");
  boxBlue.setAttribute("class","box-content");
  boxBlueMedium.setAttribute("id","box-blue-medium");
  boxBlueMedium.setAttribute("class","box-medium");
  boxBlueLittle.setAttribute("id","box-blue-little");
  boxBlueLittle.setAttribute("class","box-little");

  parent.appendChild(boxBlue);
  boxBlue.appendChild(boxBlueMedium);
  boxBlueMedium.appendChild(boxBlueLittle);
}
