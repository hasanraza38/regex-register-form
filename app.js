
const userName = document.querySelector('#userName')
const age = document.querySelector('#age')
const cnic = document.querySelector('#cnic')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')


const userNameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const cnicNumberRegex = /^\d{5}-\d{7}-\d{1}$/
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/



form.addEventListener('submit' , (event)=>{

    event.preventDefault()
    // console.log(userName.value);
    // console.log(password.value);

    console.log(userNameRegex.test(userName.value))
    console.log(emailRegex.test(email.value));
    console.log(passwordRegex.test(password.value))
    console.log(cnicNumberRegex.test(cnic.value))
    console.log(ageRegex.test(age.value))

    if (userNameRegex === true) {
        console.log(userName.value);
        
    }
    else if (emailRegex===true) {
        console.log(email.value);
        
    }
    else if (passwordRegex===true) {
        console.log(password.value);
        
    } else if (cnicNumberRegex===true) {
        console.log(cnic.value);
        
    } else if (ageRegex===true) {
        console.log(age.value);
        
    }
     else {

        console.log("You entered Wrong information ");
     }
})