const btn = document.getElementById("mail-btn");
const inputText = document.getElementById("mail-input");
const errorIcon = document.querySelector(".error");
const invalidText = document.querySelector(".under-input")
const form =document.querySelector("form");

btn.addEventListener("click", ValidateEmail);

function ValidateEmail(){

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(inputText.value.match(mailformat)){
alert("Your email submitted successfully!");
}
else  {
  errorIcon.style.display = "block";
  invalidText.style.display = "block";
console.log("nope");
}

}
