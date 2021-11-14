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
var modal5 = document.getElementById("myModal");
var modal6 = document.getElementById("myModal1");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("closee1")[0];


function modal(){
    modal5.style.display="block";
}
span.onclick = function() {
    modal5.style.display = "none";
  }
span1.onclick = function() {
    modal6.style.display = "none";
}

  function signUp(){
      modal6.style.display="block";

  }
 function signIn(){
      modal5.style.display="block";
      modal6.style.display="none";
  }


