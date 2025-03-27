function setDate () {
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()

    let secondsDegrees = (seconds / 60) * 360
    let minutesDegrees = (minutes / 60) * 360
    let hoursDegrees = (hours / 12) * 360 + minutesDegrees / 12

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

setDate ()
setInterval(setDate, 1000)