const userNameElement = document.querySelector('.username');
const passwordElement = document.querySelector('.password');
const submitBtn = document.querySelector('.button');
const responseArea = document.getElementById('response');
let undeMaintenance = true;
let body = document.body;
let goNext = false;


if(undeMaintenance) {
    body.innerHTML = '<h1 style="color:white; margin-top:100px">Page Removed by the Developer!</h1>';
}


const htmlElement = `
<div class="main">
<div class="card">

    <div class="dp"></div>
    <p class="user">Debesh Halder</p>
    <p class="bio">Magic happens when you believe <3 </p>
    <div class="insta-link">
        <div class="insta-icon"></div>
        <div class="link">
            <p class="link-name link1" id="link-name">iamdebesh391</p>
        </div>
    </div>

    
    
        
</div>


<div class="card">

    <div class="dp2"></div>
    <p class="user">Darshana Mondal</p>

    <p class="bio">तुम प्रेम हो..तुम प्रीत हो
        मेरी भावना की तुम, राधे जीत हो </p>

    <div class="insta-link">
        <div class="insta-icon"></div>
        <div class="link">
            <p class="link-name link2" id="link-name">darshana_mon</p>
        </div>
    </div>

    
    
        
</div>


</div>
`;
function correctInputs() {
    let username = (userNameElement.value).toLowerCase();
    let password = (passwordElement.value);
    
    if(username === "panda" && password === "69") {
        goNext = true;
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
       body.innerHTML = htmlElement;
       const instaLink1 = document.querySelector('.link1');
        const instaLink2 = document.querySelector('.link2');

        instaLink1.addEventListener('click',()=>{
            window.location.href = "https://instagram.com/iamdebesh391";
        });
        instaLink2.addEventListener('click',()=>{
            window.location.href = "https://instagram.com/darshana_mon";
        });
    }
});

