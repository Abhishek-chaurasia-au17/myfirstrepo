

const Input1 = document.querySelector('#Input1');
const btn = document.querySelector('#button');
const messageContent = document.querySelector('.message-content');
const feedback = document.querySelector('.feedback')

btn.addEventListener('click' ,function (params) {
    if(Input1.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    }
    messageContent.textContent = Input1.value;
})