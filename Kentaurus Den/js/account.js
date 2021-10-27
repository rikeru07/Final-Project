function validateForm() {  
    //collect form data in JavaScript variables   
    var username = document.getElementById("registerUsername").value;  
    var emailAdd = document.getElementById("registerEmail").value;  
    var password = document.getElementById("registerPassword").value;  
    var ConfirmP = document.getElementById("registerConfirmPass").value; 
     
    //minimum password length validation  
    if(password.length < 8) {  
      document.getElementById("registerPassword").innerHTML = "**Password length must be atleast 8 characters"; 
      
      alert ("Password length must be atleast 8 characters");  
      return false;  
    } 
    
    if(password != ConfirmP) { 
        alert ("**Passwords do not match!");  
      return false;  
    } else {
        window.localStorage.setItem('user', username);
        window.localStorage.setItem('pass', password)
        window.localStorage.setItem('accountUsername', username);
        alert ("Registered successfully");  
        window.location.href = "index.html";
    }
 }

 function signInForm(){
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value; 

    if(username != window.localStorage.getItem('user')){
        alert("Username cannot be found!");
    }
    else{
        if(password != window.localStorage.getItem('pass')){
            alert("Wrong Credentials!");
        }
        else{
            alert("Logged In Successfuly");
            window.localStorage.setItem("accountUsername", window.localStorage.getItem('user'));
        }
    }
 }

 function nameFunc(){
     if(window.localStorage.getItem('accountUsername') == null){
        document.getElementById("caller").innerHTML = "Welcome, Guest";
        $("#SignOut").removeClass('visible').addClass('invisible');
        $("#LogIn").removeClass('invisible').addClass('visible');
     }
     else{
        document.getElementById("caller").innerHTML = "Welcome, "+window.localStorage.getItem('accountUsername');
        $("#LogIn").removeClass('visible').addClass('invisible');
        $("#SignOut").removeClass('invisible').addClass('visible');
     }
 }

 function signOut(){
     window.localStorage.removeItem('accountUsername');
     window.location.href = "index.html";
 }