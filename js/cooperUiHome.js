function topBar() {
  console.log("Adding top-options")
  var target = document.querySelector(".topBar");
  var e = document.createElement("div");
  e.innerHTML += "<div class='topOption unclickable'>Cooper Ui</div><div class='topOption'>Home</div><div class='topOption'>Ui elements</div><div class='topOption'>Colors</div>";
  target.appendChild(e);
  document.querySelectorAll(".topOption")[1].setAttribute("onClick", 'goToPage("index.html")');
  document.querySelectorAll(".topOption")[2].setAttribute("onClick", 'goToPage("ui.html")');
  document.querySelectorAll(".topOption")[3].setAttribute("onClick", 'goToPage("color.html")');
}

function mainContainer() {
  console.log("Adding main-container")
  var target = document.querySelector(".mainContainer");
  var e = document.createElement("div");
  var text1 = "Welcome to Coopers Ui <br> Here comes more text";
  var text2 = "I have created alot of different elements for use on any website";
  e.innerHTML += "<div id='img1' class='img'>C00P3R Ui design</div><div id='img2' class='img'><p>Ui elements</p></div><div id='img3' class='img'>Colors</div>"
  target.appendChild(e);
}

window.onload = function() {
  topBar();
  mainContainer();
}