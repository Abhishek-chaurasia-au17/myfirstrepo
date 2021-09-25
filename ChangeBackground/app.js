const body = document.querySelector('body');
const btn = document.querySelector('button');
const colors = ['#36D1DC', '#FF512F', '#b92b27', '#1565C0', '#f12711', '#f5af19', '#52c234', '#DD2476']

const changecolors = function(){
    let genColor = Math.trunc(Math.random()*6)
    body.style.background = colors[genColor]
}


btn.addEventListener('click', changecolors)