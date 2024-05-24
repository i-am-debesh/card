const instaLink1 = document.querySelector('.link1');
const instaLink2 = document.querySelector('.link2');

instaLink1.addEventListener('click',()=>{
    window.location.href = "https://instagram.com/iamdebesh391";
});
instaLink2.addEventListener('click',()=>{
    window.location.href = "https://instagram.com/darshana_mon";
});

let body = document.body;
let undeMaintenance = false;
if(undeMaintenance) {
    body.innerHTML = '';
}