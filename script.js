const userNameElement = document.querySelector('.username');
const passwordElement = document.querySelector('.password');
const submitBtn = document.querySelector('.button');
const responseArea = document.getElementById('response');

function correctInputs() {
    let username = (userNameElement.value).toLowerCase();
    let password = (passwordElement.value);
    
    if(username === "panda" && password === "69") {
        return true;
    }else {
        return false;
    }
}
submitBtn.addEventListener('click', ()=>{
    if(!correctInputs()) {  
        responseArea.innerText = 'incorrect password!';

        setTimeout(()=>{
            responseArea.innerText = '';
    },1500)
    }else {
       window.location.href = "page2.html";
    }
});



