const bar = document.getElementById ('bar');
const nav = document.getElementById ('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
const clo = document.getElementById('close');
if(clo){
    clo.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}  
