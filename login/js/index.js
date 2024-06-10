var logform=document.getElementById("logform")
var sideEmail=document.getElementById("sideEmail");
var sidepassword=document.getElementById("sidepassword");
var successAlery=document.getElementById("successAlery");

var alluser=[];


if (localStorage.getItem("alluser")!==null){

    alluser=JSON.parse(localStorage.getItem("alluser"))
    
   
    }
    
console.log(alluser);


logform.addEventListener("submit",function(e){

    e.preventDefault();

login()


})











function login(){
    var userdata={

        email:sideEmail.value,
        Passwoerd:sidepassword.value,
        
    } 
       
if (isloginvalid(userdata)==true){

console.log("you can log in");
successAlery.classList.replace("d-block","d-none");

}
else{
   successAlery.classList.replace("d-none","d-block");
    console.log("user not found");
    window.location.href="../home/index.html"

}

    
}



function isloginvalid(userdata){

for (var i=0 ;i<alluser.length;i++){
if(alluser[i].email.toLowerCase()==userdata.email.toLowerCase() && alluser[i].Passwoerd==userdata.Passwoerd){
localStorage.setItem("username",alluser[i].name)
return true;

}
   
   


}
}
   










