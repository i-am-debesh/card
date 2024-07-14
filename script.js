const userNameElement = document.querySelector('.username');
const passwordElement = document.querySelector('.password');
const submitBtn = document.querySelector('.button');
const responseArea = document.getElementById('response');
let undeMaintenance = false;
let body = document.querySelector('.main-body');
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
        color: rgba(157, 59, 105, 0.76);
        text-align: center;
        margin-top: 90px;
        margin-bottom: -100px;
        font-size: 40px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
        
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
            color: rgba(157, 59, 105, 0.76);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
            
            ">Happy Birthday Kuchipuchi ❤️</h1>
    
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
            color: rgba(157, 59, 105, 0.76);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
            
            ">Happy Birthday Kuchipuchi ❤️</h1>
    
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
            color: rgba(157, 59, 105, 0.76);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
            
            ">Happy Birthday Kuchipuchi ❤️</h1>
    
    
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
            color: rgba(157, 59, 105, 0.76);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
            
            ">Happy Birthday Kuchipuchi ❤️</h1>
    
    
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
                tor sob ichhe puron hok,
                <br>
                evabei amar sthe jhogra kore ja
                </b>
                <br>
                (btw.. eta ami banachhi 13th july.                               
                <br>
                and 14th mane kal chole jabo kolkata
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
                Happy Birthday once again
                <br>
                kuchipuchi
                <br>
                pompom
                <br>
                mithai
                <br>
                rajrani
                <br>
                jono gono mono
                <br>
                maya mono biharini
                <br>
                singho ❤️
                <br>
                (:
                </b>

            
            </marquee>           
                
        </div>

        <div class="btn">
            <button class="next-btn" onclick = "goNext()">>></button>
        </div>
        
        
    </div>
    </div>
`
const page5 = `
     <div>

        <h1 class="heading" style="
            color: rgba(157, 59, 105, 0.76);
            text-align: center;
            margin-top: 90px;
            margin-bottom: -100px;
            font-size: 40px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
            
            ">Happy Birthday Kuchipuchi ❤️</h1>
    
    
    <div class="main">
        <div class="card">
            
            
            <div class="frame">

            </div>   
            <div class="anim">
                <img class="anim-img" src="/images/Nt6v.gif
                " alt="">
            </div>  
                
                
        </div>

        <!-- <div class="btn">
            <button class="next-btn">>></button>
        </div> -->
        
        
    </div>
    </div>
`

let pages = [page0, page1, page2, page3, page4, page5];
function isCorrectInputs() {
    let username = (userNameElement.value).toLowerCase();
    let password = (passwordElement.value);
    
    if(username === "pompom" && password === "69") {
        
        return true;
    }else {
        return false;
    }
}
submitBtn.addEventListener('click', ()=>{
    
    
    if(!isCorrectInputs()) {  
        responseArea.innerText = 'incorrect user or password!';

        setTimeout(()=>{
            responseArea.innerText = '';
    },1500)
    }else {
        pageCount++;
        body.innerHTML = pages[pageCount];
        playBg();
        setAnim(pageCount);
    }
});
setAnim(pageCount);
function goNext() {
    pageCount++;
    body.innerHTML = pages[pageCount];
    setAnim(pageCount)
    if(pageCount === 2 || pageCount === 3 || pageCount === 5) {
        pauseBg();
        if(pageCount === 5) {
            let song = new Audio('/music/music2.mp3');
            song.play();
            song.loop = true;

        }

    }else {
        if(isPlaying === false) {
            playBg();
        }
    }
}
function redirect() {
    window.location.href = "https://www.instagram.com/_mon_o_nita_/";
}


//Animations:::
function congrats() {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}
function hearts() {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };
      
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });
}
function snow(color_hex = "#B3237C") {
    const duration = 15 * 1000,
    animationEnd = Date.now() + duration;

    let skew = 1;

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    (function frame() {
    const timeLeft = animationEnd - Date.now(),
        ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
        },
        colors: [color_hex],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
        requestAnimationFrame(frame);
    }
    })();
}


function setAnim(count) {
    if(count === -1) {
        hearts();
    }else if(count === 0) {
        congrats();
        snow();
        setTimeout(()=>{
            snow();
            
        }, 3000)
    }else if(count === 1) {
        snow();
    }else if(count === 2) {
        congrats();
        snow();
        hearts();
        setTimeout(()=>{

            setTimeout(()=>{
                snow();
                hearts();
            }, 10000)
            snow();
            hearts();
        }, 10000)
    }else if(count === 3) {
        hearts();
        snow();
        setTimeout(()=>{
            snow();
            hearts();
        }, 10000)
    }else if(count === 4) {
        hearts();
        snow();
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    snow();
                    hearts();
                }, 5000)
                snow();
                hearts();
            }, 10000);

            snow();
            hearts();
        }, 10000);
    }
    else if(count === 5) {
        hearts();
        snow();
        setTimeout(()=>{
            setTimeout(()=>{
                snow();
                
            }, 5000)
            snow();
            
        }, 5000)
    }
}
