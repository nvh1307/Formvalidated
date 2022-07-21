var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var passwordConfirm = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input,message){
    let parent = input.parentElement;
    let child = parent.querySelector('small');
    parent.classList.add('error');
    child.innerText = message
}

function showSucess(input,message){
    let parent = input.parentElement;
    let child = parent.querySelector('small');
    parent.classList.remove('error');
    child.innerText = ''
}

function checkError(listInput){
    let isEmpty = false
    listInput.forEach(input=>{
        input.value=input.value.trim()
        if(!input.value){
            isEmpty = true
            showError(input,"Khong duoc de trong")

        }
        else{
            showSucess
        }
    })
    return isEmpty
}
function checkEmail(input){
    const regaxEmail =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()
    let isEmailError = !regaxEmail.test(input.value)
    if (regaxEmail.test(input.value)){
        showSucess(input)
    }

    else{
        showError(input,"co loi")
    }
    return isEmailError
}

function checkLength(input,min,max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input,`phai co it nhat ${min} ky tu`)
        return true
    }
    if (input.value.length>max){
        showError(input,`khong duoc vuot qua ${max} ky tu`)
        return true
    }
    
    return false
}

function checkpassword(password,passwordConfirm){
    if(password.value!==passwordConfirm.value){
        showError(passwordConfirm,"Mat khau khong trung khop")
        return true
    }
    return false
}
form.addEventListener('submit',function(e) {
    e.preventDefault()
    let isempty = checkError([username,email,password,passwordConfirm])
    let isEmail = checkEmail(email)
    let ischeckpassword = checkpassword(password,passwordConfirm)

    // loi tong 1 trong ca 4 dieu kien tren deu sai thi do nothing. neu thanh cong thi call api
})