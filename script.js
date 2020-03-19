const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2')

function showError(input, msg){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=msg;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, `enter valid ${getID(input)}`)
    }

 
}
function getID(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkRequired(inputArr){
    inputArr.forEach(element => {
        if(element.value===""){
            showError(element, `${getID(element)} is required.`);
        }
        else{
            showSuccess(element);
        }
    });
}
function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input, `${getID(input)} must be at least of ${min} characters`)
    }
    else if(input.value.length>max){
        showError(input, `${getID(input)} must be of maximum ${max} characters`)
    }
    else{
        showSuccess(input);
    }
    
}
function checkPasswords(pass1, pass2){
    if(pass1.value!==pass2.value){
        showError(pass2, "make sure both passwords match")
    }
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 15);
    checkLength(password2, 8, 15);
    if(!(email.value===""))
    checkEmail(email);
    checkPasswords(password, password2)
})