const body = document.querySelector('body');
const btn = document.querySelector('button');
const hexValue = document.querySelector('h1')
const colorhex = ['1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f']


let randomeColors = function () {
    let hexNum = '#'
    for(let i = 0; i < 6; i++){
        hexNum += colorhex[Math.floor(Math.random() * colorhex.length)]
    }
    body.style.backgroundColor =  hexNum;
    hexValue.textContent = `HEX COLOR : ${hexNum}`;
}   

btn.addEventListener('click', randomeColors)