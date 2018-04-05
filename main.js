let myButton = document.getElementById("bouton-center")
let myHp = document.getElementById("element-center")

function showelements() {
    myButton.style.display = "none";
    myHp.style.display = "block";

}

myButton.onclick = function() {
    showelements()
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
      function showAlert()
  }
} // end sayHi

function showAlert()
 {
    alert("Veuillez entrer \"bonjour monde\" ou \"hello world\" sinon ca marche pô")
 }

mySearch.onclick = function() {
  redirectGoogle()
}