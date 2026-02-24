let attempt = 5;

function checkpassword(){

    let password = "1234";
    let button = document.getElementById("btn");
    let userpassword = document.getElementById("pass").value;
    let message = document.getElementById("message");

    // WHILE LOOP → checking attempts
    while(password !== userpassword && attempt > 0){

        attempt--;

        if(attempt > 0){
            message.innerHTML = "Wrong password! You have " + attempt + " attempts left.";
            return;   // stop here and wait for next click
        }
    }

    // If password correct
    if(password === userpassword){
        attempt = 5; // reset attempts
        message.innerHTML = "Password is correct!";
        return;
    }

    // If attempts finished
    if(attempt === 0){

        button.disabled = true;
        message.innerHTML = "Too many attempts! Locked for 5 seconds.";

        // FOR LOOP → timer
        let time = 5;

        let timer = setInterval(function(){

            message.innerHTML = "Locked... Wait " + time + " seconds.";
            time--;

            if(time < 0){
                clearInterval(timer);
                attempt = 5; // reset attempts
                button.disabled = false;
                message.innerHTML = "You can try again now!";
            }

        },1000);
    }
}