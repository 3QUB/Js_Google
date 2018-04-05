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
 
 function showPopup()
 {
    alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")
 }


// // from textBoxes.html
// function redirect Google(){
//   var txtName = document.getElementById("bar");
//   // var txtOutput = document.getElementById("txtOutput");
//   var search = txtName.value;
//   if (search === "bonjour monde"){

//   }else if (search === "hello world"){

//   }else{

//   }
  
//   } // end sayHi