let attempt=5;
function checkpassword(){
    let password="1234";
    let userpassword=document.getElementById("pass").value;
    let message=document.getElementById("message");
    
   for(let i=0; i<1; i++){
   
    while(password!=userpassword && attempt>1){
        attempt--;
        message.innerHTML="Wrong password! You have "+attempt+" attempts left.";
        return false;
    }
    while(password==userpassword){
        message.innerHTML="Password is correct!";
        return false;
    }
     message.innerHTML="You have exceeded the number of attempts!";

    }
   }
