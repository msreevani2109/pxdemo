const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registerBtn = document.querySelector('#btn-register');
const loginBtn = document.querySelector('#btn-login');
const btnPopup = document.querySelector(".btnLgin-popup");
const iconClose = document.querySelector(".icon-close");
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add("active-popup");
})

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
   
})
iconClose.addEventListener("click",()=>{
    wrapper.classList.remove('active-popup'); 
});

registerBtn.addEventListener('click',()=>{
    const uname = document.getElementById("rg-un").value;
    const umail = document.getElementById("rg-mail").value;
    const upwd = document.getElementById("rg-pwd").value;
    let existingUser;
    if(uname === "" && umail === "" && upwd ===""){
        alert("please fill in all fields");
        return;
    }
    if(localStorage && localStorage.getItem("userInfo")){
        existingUser = localStorage.getItem("userInfo");
    }

    if(existingUser){
        alert("user alreday exists. please login!");
        showLoginForm();
        return;
    }
    const user = {
        uname:name,
        umail:umail,
        upwd:upwd
    }
    localStorage.setItem("userInfo",JSON.stringify(user));
    alert(`Registered Succesfully with email: ${umail}`);
    showLoginForm();
})

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.location.href = "home.html";
})

function showLoginForm(){
    wrapper.classList.remove('active');
}

