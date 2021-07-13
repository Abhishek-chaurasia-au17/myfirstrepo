
const BulbSwitch = document.querySelector('#BulbSwitch');
const bulb = document.querySelector('#bulb');



BulbSwitch.addEventListener('click',function ( ) {
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src = './image/bulb_on.png';
        BulbSwitch.innerHTML = 'Trun OFF';
    }else{
        bulb.src ='./image/bulb_off.png';
        BulbSwitch.innerHTML = 'Trun ON';
    }
});

