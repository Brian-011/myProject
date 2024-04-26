document.getElementById("registrationForm").addEventListener("submit", function(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
  
    nameError.textContent = "";
    emailError.textContent = "";

    name===""? nameError.textContent=("Please write your name Pal!!"):console.log("username:>> "+name); 
    event.preventDefault();
    email===""? emailError.textContent=("An email is definitely required!!"):window.alert("Thank's for contacting ICD dealers.\n Welcome "+name),
    event.preventDefault();
    });