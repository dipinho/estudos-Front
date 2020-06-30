setInterval(() =>{

let time = document.querySelector('p');
let half = document.querySelector('p span');
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

if(h<10)
    h = "0" + h;
if(m<10)
    m = "0" + m;
if(s<10)
    s = "0" + s;

if(h>=12)
    time.innerText = `${h}:${m}:${s}PM`;
if(h<12)
    time.innerText = `${h}:${m}:${s}AM`;

},1000);