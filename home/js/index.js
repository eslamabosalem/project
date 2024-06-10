var username=localStorage.getItem("username");
var logbtn=document.getElementById("logbtn");
console.log(username);

usernameww.innerhtml=username


logbtn.addEventListener("click", function(){


localStorage.removeItem("username")


})