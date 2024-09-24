const nav = document.getElementById('navbar');

const bar = document.getElementById('bar');
// if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
// }

const close = document.getElementById('close');
// if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
// }