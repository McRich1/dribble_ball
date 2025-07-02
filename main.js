
let ball = document.getElementById('ball')
const up = ()=>{
    ball.style.bottom = '600px'
}
const down = ()=>{
    ball.style.bottom ='50px'
}
document.addEventListener('keydown', up);
document.onkeyup = down;