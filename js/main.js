let num = document.getElementById('counter-sum')
let input = document.querySelector('input')
let inputvalue = parseInt(input.value)

num.innerHTML = 0

document.getElementById('add').addEventListener('click', add)
document.getElementById('minus').addEventListener('click', minus)

function add() {
    num = num + inputvalue
    num.innerHTML = num
}

function minus() {
    num = num - inputvalue
    num.innerHTML = num
}

console.log(inputvalue)