const btnStart =document.querySelector('[data-start]');
const btnStop =document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

btnStart.addEventListener('click', onStartClik);
btnStop.addEventListener('click', onStopClick);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function onStartClik() {
    timerId = setInterval(()=>{
        const color = getRandomHexColor();
        body.style.backgroundColor = color;  
    }, 1000);
    btnStart.disabled = true;

};

function onStopClick() {
    clearInterval(timerId);
    btnStart.disabled = false;
}
