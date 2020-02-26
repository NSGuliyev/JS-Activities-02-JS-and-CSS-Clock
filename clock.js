const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();


    const seconds = now.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    secondHand.style.background = 'red';

    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    minHand.style.background = 'yellow';

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.background = 'orange';


    console.log(seconds);

}

setInterval(setDate, 1000);

setDate();