import Swal from 'sweetalert2';

const finishTimeInput = document.getElementById('date-selector');
const timerTable = document.querySelector('[timer]');
const countdownBtn = document.querySelector('[data-start]');

const etaDays = document.querySelector("[data-days]");
const etaHours = document.querySelector("[data-hours]");
const etaMinutes = document.querySelector("[data-minutes]");
const etaSecs = document.querySelector("[data-seconds]");
let countdownIsOn = false;
countdownBtn.setAttribute('disabled','true');

const countDown = () => { 
        if (countdownIsOn === true) {
            return
        }
        
        countdownIsOn = true;
        setInterval(() => {
            const oneSecond = 1000;
            const oneMinute = oneSecond * 60;
            const oneHour = oneMinute * 60;
            const oneDay = oneHour * 24;
            const timeZoneSet = oneHour * 3;

            const currentTime = Date.now();
            const etaTime = Date.parse(finishTimeInput.value);
            const deltaTime = (etaTime - currentTime - timeZoneSet);
            console.log(deltaTime);
      
            const days = Math.floor(deltaTime / oneDay);
            const hours = Math.floor((deltaTime % oneDay) / oneHour);
            const mins = Math.floor(((deltaTime % oneDay) % oneHour) / oneMinute);
            const secs = Math.floor((((deltaTime % oneDay) % oneHour) % oneMinute) / oneSecond);
            
            console.log({ days, hours, mins, secs });

            etaDays.innerHTML = days;
            etaHours.innerHTML = hours;
            etaMinutes.innerHTML = mins;
            etaSecs.innerHTML = secs;
            }, 1000);         
        };
 
const etaDateCheck = () => {
     if (Date.parse(finishTimeInput.value) <= Date.parse(new Date())) {
        Swal.fire({
            title: 'Please choose a date in the future',
            icon: 'error',
            confirmButtonText: 'OK',
         });
           finishTimeInput.value = "";
        return;
    } 
    countdownBtn.removeAttribute('disabled');
    
}
countdownBtn.addEventListener('click', countDown);
finishTimeInput.addEventListener('change', etaDateCheck);
