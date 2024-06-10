var sideName=document.getElementById("sideName");
var sideEmail=document.getElementById("sideEmail");
var sidepassword=document.getElementById("sidepassword");
var nameAlery=document.getElementById("nameAlery");
var EmailAlery=document.getElementById("EmailAlery");
var passwordAlert=document.getElementById("passwordAlert");
var registerform=document.getElementById("registerform");
var alluser=[];


if (localStorage.getItem("alluser")!==null){

    alluser=JSON.parse(localStorage.getItem("alluser"))
    
   
    }
    

registerform.addEventListener("submit", function(e){

e.preventDefault()

if (checkIfAllInputAreValid()){
    adduser()
}


})

function adduser(){

var newuser={
name:sideName.value,
email:sideEmail.value,
password:sidepassword.value,
}
  
if (isAlreadExist(newuser)==true){

    console.log("AlreadExist");
    existAlert.classList.replace("d-none","d-block");
    
    }
    else{
        existAlert.classList.replace("d-block","d-none");
        successAlery.classList.replace("d-none","d-block");
      
window.location.href="../login/index.html"     
       
        alluser.push(newuser)

        console.log(alluser);
        localStorage.setItem("alluser",JSON.stringify(alluser))
        
        
        }





}



function isAlreadExist(newuser){

for (var i=0 ;i<alluser.length;i++){
if(alluser[i].email.toLowerCase()==newuser.email.toLowerCase()){
    console.log("Email is Aleart Exist");
    return true;
    
}


};


};


























function validateinput(regex,element,alertmss){

    var pattern = regex;
    if(pattern.test(element.value)){
    console.log("valid");
    element.classList.remove("is-invalid")
    element.classList.add("is-valid")
    alertmss.classList.replace("d-block","d-none");
    return true;
    
    }else{
        element.classList.add("is-invalid")
    element.classList.remove("is-valid")
        console.log("invalid");
       alertmss.classList.replace("d-none","d-block");
    
    return false;
    
    };
    }
    
    
    
    function checkIfAllInputAreValid(){
    
    if( validateinput(/^[A-Z][a-z]{2,8}$/,sideName,nameAlery)==true&&
    
    validateinput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,sideEmail,EmailAlery)==true&&
    
    validateinput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/,sidepassword,passwordAlert)==true
    )
    
    {
        console.log("all Input Are Valid");
        return true;
    }
        
    
       else{
        console.log("somthing went wrong");
        return false;
       }
    
    
    
    }


