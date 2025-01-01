const light=document.querySelector('.light');
const dark=document.querySelector('.dark');
const body=document.querySelector('body');
const header=document.querySelector('.transparent');
const money=document.querySelectorAll('.money');
function Modes(){
    light.addEventListener('click',()=>{
        dark.classList.remove('hide');
        light.classList.add('hide');
        body.classList.add('dark_mode');
        body.classList.remove('light_mode');
        money.forEach((e)=>{
            e.classList.add('courses_same_color');
        })
    })
    dark.addEventListener('click',()=>{
        light.classList.remove('hide');
        dark.classList.add('hide');
        body.classList.add('light_mode');
        body.classList.remove('dark_mode');
        money.forEach((e)=>{
            e.classList.remove('courses_same_color');
        })
    })
}
window.addEventListener('load',()=>{
    Modes();
})