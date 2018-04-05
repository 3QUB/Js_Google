let myButton = document.getElementById("bouton-center")
let myHp = document.getElementById("element-center")

function showelements() {
    myButton.style.display = "none";
    myHp.style.display = "block";

}

myButton.onclick = function() {
    showelements()
}