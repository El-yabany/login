let fristName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let passward = document.getElementById("passwared");
let error_fristName = document.getElementById("error-name")
let error_email = document.getElementById("error-email")
let error_subject = document.getElementById("error-subject")
let error_passward = document.getElementById("error-passward") 
let error_page = document.getElementById("error-page")


let flag;


document.getElementById("btn").addEventListener("click" , ()=>{
    if( fristName.value == ""){
        error_fristName.textContent = "please write your name"
        flag = true
    }
    else{
        error_fristName.textContent = ""
        flag = false
    }

    if( email.value == ""){
        error_email.textContent = "please write youre email"
        flag = true
    }
    else if(email.value.match(/@gmail.com/) == null ){
        error_email.textContent = "you must be write @gmail.com"
        flag = true
    }
    else{
            error_email.textContent = ""
            flag = false

    }

    if(subject.value == ""){
        error_subject.textContent = "please write your bierth day"
        flag = true
    }
    else{
        error_subject.textContent = ""
        flag = false
    }
    
    if(passward.value == ""){
        error_passward.textContent = "please write your passwared"
        flag = true
    }
    else if(Number(passward.value) < 6){
        error_passward.textContent = "must be the passward more than 6 numbers"
        flag = true
    }
    else{
        error_passward.textContent = ""
        flag = false
    }
    if( flag == true){
        error_page.textContent = "please fill of page"        
    }
    else if( flag == false){
        window.open("../open after html/open.html")
    }
    else{
        window.open("../open after html/open.html")
    }


    



})
