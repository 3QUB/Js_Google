let myButton = document.getElementById("bouton-center")
let myHp = document.getElementById("element-center")

function showelements() {
    myButton.style.display = "none";
    myHp.style.display = "block";

}

myButton.onclick = function() {
    showelements()
}

window.onload=function(){setTimeout(showPopup,10000)};
var snd = new Audio('img/sound.mp3');  

 function showPopup()
 {
    snd .play();
    alert("D'abord, monte le son de ton ordinateur! Le site xxxvidsxxx est trop bien. Viens dessus en cliquant sur OK !") 
    alert("you just got Rickrolled !")
 }

let mySearch = document.getElementById("search-google")

function redirectGoogle(){
  var txtSearch = document.getElementById("bar");
  // var txtOutput = document.getElementById("txtOutput");
  var search = txtSearch.value;
    if (search === "bonjour monde"){
      window.open('https://www.google.fr/#q=bonjour+monde');
    }else if (search === "hello world"){
      window.open('https://www.google.fr/#q=hello+world');
    }else{
      showAlert()
  }
} // end sayHi

function showAlert()
 {
    alert("Veuillez entrer \"bonjour monde\" ou \"hello world\" sinon ca marche pô")
 }

mySearch.onclick = function() {
  redirectGoogle()
}
