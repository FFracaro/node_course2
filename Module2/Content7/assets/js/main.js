/* MINE
const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
let isActive = 0;
let myInterval;

start.addEventListener('click', () => {
    if(isActive === 0 || isActive === 1){
        clock.style.color = "rgb(0, 0, 0)"
        myInterval = setInterval(getTimer, 1000);  
        isActive = 3;    
    }
});

pause.addEventListener('click', () => {
    if(isActive === 3)
    {
        clearInterval(myInterval);
        clock.style.color = "rgb(240,128,128)";
        isActive = 1;
    }
});

restart.addEventListener('click', () => {
    if(isActive === 1 || isActive === 3){
        clearInterval(myInterval);
        clock.style.color = "rgb(0, 0, 0)"
        clock.innerText = "00:00:00";
        resetTimerVariables();        
        isActive = 0;
    }
});

let seconds = 0;
let minutes = 0;
let hours = 0;

const timer = () => {
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;

        if(hours === 24)
            hours = 0;
    }

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};

const formatTime = (value) => value < 10 ? '0' + value : value;

const getTimer = () => {
    clock.innerText = timer();
}

const resetTimerVariables = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
}
*/

function clock(){
    const clock = document.querySelector('.clock');
    const start = document.querySelector('.start');
    const pause = document.querySelector('.pause');
    const restart = document.querySelector('.restart');
    let seconds = 0;
    let timer;

    const createHourWithSeconds = () => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const startClock = () => { //Usuário ṕode travar o clock ao spammar o botão start
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = createHourWithSeconds();
        }, 1000)
    }

    start.addEventListener('click', () => {
        clearInterval(timer);
        clock.style.color = "rgb(0, 0, 0)"
        startClock();
    });

    pause.addEventListener('click', () => {
        clearInterval(timer);
        clock.style.color = "rgb(240,128,128)";
    });

    restart.addEventListener('click', () => {
        clearInterval(timer);
        seconds = 0;
        clock.style.color = "rgb(0, 0, 0)"
        clock.innerHTML = `00:00:00`;
    });
}

clock();