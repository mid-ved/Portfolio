(function () {
    "use strict";

    let el = function (element) {
        if (element.charAt(0) === "#") { // Если передано в ID...
            return document.querySelector(element) // ...возвращает один элемент
        }

        return document.querySelectorAll(element)
    }

    let veiwer = el('#veiwer'), // Экран калькулятора, на котором отображается результат
        equals = el('#equals'), // Кнопка равенства
        nums = el('.num'), // Список номеров
        ops = el('.ops'), // Список операторов
        theNum = '', // Текущий номер
        oldNum = '', // Первый номер
        resultNum, // Результат
        operator // Бэтмен

    let setNum = function () {
        if (resultNum) { // Если результат был отображен, сбросьте номер
            theNum = this.getAttribute('data-num')
            resultNum = ''
        } else { // В противном случае добавьте цифру к предыдущему номеру (это строка!)
            theNum += this.getAttribute('data-num')
        }

        veiwer.innerHTML = theNum // Отображение текущего номера
    }

    let moveNum = function () {
        oldNum = theNum
        theNum = ''
        operator = this.getAttribute('data-ops')
        equals.setAttribute('data-result', '') // Сбросить результат в атрибут
    }

    let displayNum = function () {
        oldNum = parseFloat(oldNum)
        theNum = parseFloat(theNum)

        switch (operator) {
            case 'plus':
                resultNum = oldNum + theNum
                break;

            case 'minus':
                resultNum = oldNum - theNum
                break;
            
            case 'times':
                resultNum = oldNum * theNum
                break;

            case 'divided by':
                resultNum = oldNum / theNum
                break;

            default:
                resultNum = theNum
        }

        if (!isFinite(resultNum)) { 
            if (isNaN(resultNum)) { // Если результат не является числом; задается,
                resultNum = "You broke it!" // например, двойным щелчком мыши по операторам
            
            } else { // Если результат бесконечен, засчитывается делением на ноль.
                resultNum = "Look at what you've done"
                el('#calculator').classList.add('broken') // Калькулятор перерыва
                el('#reset').classList.add('show') // И показать кнопку сброса
            }
        }

        veiwer.innerHTML = resultNum
        equals.setAttribute('data-result', resultNum)

        oldNum = 0
        theNum = resultNum
    }

    let clearAll = function () {
        oldNum = ''
        theNum = ''
        veiwer.innerHTML = '0'
        equals.setAttribute('data-result', resultNum)
    }

    for (let i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum
    }

    for (let i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum
    }

    equals.onclick = displayNum

    el('#clear').onclick = clearAll
})()