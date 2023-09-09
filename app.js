"use strict"

let img = document.querySelector('img');
let paswordInput = document.querySelector('#password');
let close = 'images/visibility_off_FILL0_wght400_GRAD0_opsz48.svg';
let open = 'images/visibility_FILL0_wght400_GRAD0_opsz48 (1).svg'

function revealPwd(){
    if(paswordInput.type === "password"){
        
        paswordInput.type = "text"
        img.setAttribute('src',open)
    }else{
        paswordInput.type = "password";
        img.setAttribute('src', close)

    }
}

img.addEventListener('click',revealPwd)