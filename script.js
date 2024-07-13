const userNameElement = document.querySelector('.username');
const passwordElement = document.querySelector('.password');
const submitBtn = document.querySelector('.button');
const responseArea = document.getElementById('response');
let undeMaintenance = false;
const nextButton = document.querySelector('.next-btn');
let body = document.body;
let isPlaying = false;
let bgAudio = new Audio('/music/music1.mp3');
let pageCount = -1;
function playBg() {
    bgAudio.play();
    bgAudio.loop = true;
    isPlaying = true;
}
function pauseBg() {
    bgAudio.pause();
    isPlaying = false;
    
}

if(undeMaintenance) {
    body.innerHTML = '<h1 style="color:white; margin-top:100px">Page Removed by the Developer!</h1>';
}


// const htmlElement = `
// <div class="main">
// <div class="card">

//     <div class="dp"></div>
//     <p class="user">Debesh Halder</p>
//     <p class="bio">Magic happens when you believe <3 </p>
//     <div class="insta-link">
//         <div class="insta-icon"></div>
//         <div class="link">
//             <p class="link-name link1" id="link-name">iamdebesh391</p>
//         </div>
//     </div>

    
    
        
// </div>
        
// </div>


// </div>
// `;


const page0 = `
    <div>

    <h1 class="heading" style="
        color: rgb(242, 255, 3);
        text-align: center;
        margin-top: 90px;
        margin-bottom: -100px;
        font-size: 40px;
        
        
        ">Happy Birthday Kuchipuchi ❤️</h1>
    
    <div class="main">
        
        <div class="card">

            <div class="dp"></div>
            <p class="user">Mononita Singha</p>
            <p class="nick-name">(kuchipuchi)</p>
            <p class="bio">It's not over until I win</p>
            <div class="insta-link">
                <div class="insta-icon"></div>
                <div class="link">
                    <p class="link-name link1" id="link-name" onclick = "redirect()">kuchipuchi</p>
                </div>
                
            </div>

                      
                
        </div>

        <div class="btn">
            <button class="next-btn" onclick = "goNext()">>></button>
        </div>
        
        
    </div>
    </div>
`
const page1 = `
    <div>

        <h1 class="heading" style="
            color: rgb(242, 255, 3);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            
            
            ">Happy Birthday Kuchipuchi</h1>
    
    <div class="main">
        <div class="card">

            <video width="100%" height="100%" autoplay muted loop class="video2">
                <source src="/videos/bday-card2.mp4" type="video/mp4">
                <!-- <source src="movie.ogg" type="video/ogg"> -->
              
              </video>

                      
                
        </div>

        <div class="btn">
            <button class="next-btn" onclick = "goNext()">>></button>
        </div>
        
        
    </div>
    </div>
`

const page2 = `
    <div>

        <h1 class="heading" style="
            color: rgb(242, 255, 3);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            
            
            ">Happy Birthday Kuchipuchi</h1>
    
    <div class="main">
        <div class="card">

            <video width="100%" height="100%" autoplay controls>
                <source src="/videos/video2.mp4" type="video/mp4">
                <!-- <source src="movie.ogg" type="video/ogg"> -->
              
              </video>

                      
                
        </div>

        <div class="btn">
            <button class="next-btn" onclick = "goNext()">>></button>
        </div>
        
        
    </div>
    </div>
`

const page3 = `
    <div>

        <h1 class="heading" style="
            color: rgb(242, 255, 3);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            
            
            ">Happy Birthday Kuchipuchi</h1>
    
    
    <div class="main">
        <div class="card">

            <video width="100%" height="100%" autoplay controls>
                <source src="/videos/video1.mp4" type="video/mp4">
                <!-- <source src="movie.ogg" type="video/ogg"> -->
              
              </video>

                      
                
        </div>

        <div class="btn">
            <button class="next-btn" onclick = "goNext()">>></button>
        </div>
        
        
    </div>
    </div>
`

const page4 = `
    <div>

        <h1 class="heading" style="
            color: rgb(242, 255, 3);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            
            
            ">Happy Birthday Kuchipuchi</h1>
    
    
    <div class="main">
        <div class="card">
            
            
            <marquee behavior="scroll" direction="up" scrollamount="1" class="end-msg">
                <b>
                Happy Birthday Kuchipuchi..❤️
                <br>
                many many happy returns of the day.
                <br>
                <br>
                onek boro ho
                <br>
                sob ichhe puron hok
                <br>
                evabei amar sthe jhogra kore ja
                </b>
                <br>
                (btw.. eta ami tor jnno banachhi
                <br>
                aj 13th july
                <br>
                14th mane kal chole jabo kolkata
                <br>
                okhane laptop niye jbona ty banano hbena.
                <br>
                ty aj e kore rakhlm..)
                <br>
                <br>
                <br>
                <b>
                
                <br>
                Ar ki jno bolte hoiii...
                <br>
                .
                <br>
                .
                <br>
                .
                <br>
                .
                <br>
                Tke ar porasonar kotha ki bolbo
                <br>
                Emni e tui ato porish.
                <br>
                sob goals achieve kor..
                <br>
                kokhono give up korbina..
                <br>
                jodio tui onk strong tau 
                <br>
                kokhono jodi give up korar kotha 
                <br>
                mathai ase. ettu jhamela kore nibi amr sthe😂
                <br>
                <br>
                <br>
                And the most important jeta holo:
                <br>
                <br>
                Nijer kheyal rakh. 
                <br>
                Ami ettu jalai tke but onk bhalobashi..❤️
                <br>
                (:
                </b>

            
            </marquee>           
                
        </div>

        <!-- <div class="btn">
            <button class="next-btn">>></button>
        </div> -->
        
        
    </div>
    </div>
`

let pages = [page0, page1, page2, page3, page4];
function isCorrectInputs() {
    let username = (userNameElement.value).toLowerCase();
    let password = (passwordElement.value);
    
    if(username === "pompom" && password === "69") {
        goNext = true;
        return true;
    }else {
        return false;
    }
}
submitBtn.addEventListener('click', ()=>{
    pageCount++;
    body.innerHTML = pages[pageCount];
    playBg();
    
    // if(!correctInputs()) {  
    //     responseArea.innerText = 'incorrect password!';

    //     setTimeout(()=>{
    //         responseArea.innerText = '';
    // },1500)
    // }else {
       
    //    const instaLink1 = document.querySelector('.link1');
    //     const instaLink2 = document.querySelector('.link2');

    //     instaLink1.addEventListener('click',()=>{
    //         window.location.href = "https://instagram.com/iamdebesh391";
    //     });
    //     instaLink2.addEventListener('click',()=>{
    //         window.location.href = "https://instagram.com/darshana_mon";
    //     });
    // }
});

if(pageCount > 0) {
    nextButton.addEventListener('click', ()=>{
    console.log('clicked');
    })
}
function goNext() {
    pageCount++;
    body.innerHTML = pages[pageCount];
    if(pageCount === 2 || pageCount === 3) {
        pauseBg();

    }else {
        if(isPlaying === false) {
            playBg();
        }
    }
}
function redirect() {
    window.location.href = "https://www.instagram.com/_mon_o_nita_/";
}

