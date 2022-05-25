// menubar/topnav til computerformat
window.onscroll = function() {myFunction()};
var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;

// menubar/topnav til computerformat - Her kodes en sticky menubar
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Javascript til sidenav og burgerbar for mobil-format
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

