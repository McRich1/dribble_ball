let button = document.getElementById('button');
let ball = document.getElementById('ball')
ball.style.backgroundColor =  'red';
const up = ()=>{
    ball.style.bottom = '600px'
}
const down = ()=>{
    ball.style.bottom ='50px'
}
document.addEventListener('keydown', up);
document.onkeyup = down;
button.onmousedown = up;
button.onmouseup = down;