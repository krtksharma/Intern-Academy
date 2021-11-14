//responsive navbar
var a = document.getElementById("right");
var b = document.querySelector(".ham");
var c = document.querySelector(".ham1");

function visible() {
    a.style.visibility = "visible";
    b.style.display = "none";
    c.style.display = "block";

}
function visible1() {

    a.style.visibility = "hidden";
    b.style.display = "block";
    c.style.display = "none";
}

//   responsive navabar ends here 


//sign in starts from here
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
btn1.onclick = function () {
    modal2.style.display = "block";
}
btn2.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span1.onclick = function () {
    modal1.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

function signup(){
    modal1.style.display="block";
    modal.style.display="none";
    modal3.style.display="none";
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
    
}

function signin(){
    modal.style.display="block";
    modal1.style.display="none";
    modal3.style.display="none";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
}
function error(){
    modal3.style.display="block";
}
  //sign in ends here 





