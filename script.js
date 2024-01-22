const shadow = document.querySelector('.shadow');

document.querySelector('.tittle').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.tittle').classList.toggle('open-tittle');
    shadow.classList.toggle('open-shadow');
});
document.querySelector('.hal-1').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-1').classList.toggle('open-hal-1');
});
document.querySelector('.hal-2').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-2').classList.toggle('open-hal-2');
});
document.querySelector('.hal-3').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-3').classList.toggle('open-hal-3');
});
document.querySelector('.hal-4').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-4').classList.toggle('open-hal-4');
});
document.querySelector('.hal-5').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-5').classList.toggle('open-hal-5');
});
document.querySelector('.hal-6').firstElementChild.addEventListener('click',()=>{
    document.querySelector('.hal-6').classList.toggle('open-hal-6');
    shadow.classList.toggle('close-shadow');
});
