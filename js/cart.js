let button = document.getElementById('cart-button')
let number = document.querySelector('.number')
let popup = document.querySelector('.popup')
let plus = document.querySelector('.add')
let minus = document.querySelector('.minus')
let background = document.querySelector('.background')
let counter = 0

button.addEventListener('click', function (event) {
    if (counter == 0) {
        number.classList.add('popup-open')
        popup.classList.add('popup-open')
        setTimeout(increment, 64)
        console.log("COUNTER 0")
        minus.classList.add('minus-slide')
        plus.classList.add('add-slide')
    }

    if (counter > 0) {
        setTimeout(increment, 65)
        popup.classList.add('popup-open')
        popup.classList.add('popup-two')
        setTimeout(function () {
            background.classList.add('background-color')
            setTimeout(function () {
                background.classList.remove('background-color')
            }, 74)
        }, 73)
        setTimeout(function () {
            popup.classList.remove('popup-two')
        }, 74)
    }
})

minus.addEventListener('click', function () {
    counter--

    if (counter == 0) {
        number.innerHTML = null
        number.classList.remove('popup-open')
        popup.classList.remove('popup-open')
        popup.classList.remove('popup-two')
        background.classList.remove('background-color')
        minus.classList.remove('minus-slide')
        plus.classList.remove('add-slide')
    } else {
        popup.classList.add('popup-open')
        popup.classList.add('popup=two')

        setTimeout(() => {
            background.classList.add('background-color')
            setTimeout(() => {
                background.classList.remove('background-color')    
            }, 74);
        }, 73);

        setTimeout(() => {
            popup.classList.remove('popup-two')
        }, 74);

        setTimeout(() => {
            number.innerHTML = counter
        }, 65);
    }
})

plus.addEventListener('click', function () {
    if (counter == 0) {
        number.classList.add('popup-open')
        popup.classList.add('popup-open')
        setTimeout(increment, 64)
        console.log("COUNTER 0")
        minus.classList.add('minus-slide')
        plus.classList.add('add-slide')
    }

    if (counter > 0) {
        setTimeout(increment, 65)
        popup.classList.add('popup-open')
        popup.classList.add('popup-two')

        setTimeout(() => {
            background.classList.add('background-color')
            setTimeout(() => {
                background.classList.remove('background-color')
            }, 74);
        }, 73);

        setTimeout(() => {
            popup.classList.remove('popup-two')
        }, 74);
    }
})

function increment () {
    counter = isNaN(counter) ? 0 : counter
    counter++
    number.innerHTML = counter
}