


const box1=document.querySelector("#box2");

box1.setAttribute('data-position',2);


console.log(box1.getAttribute('data-position'));
const a=box1.getAttribute('data-position');
console.log(a);


const container=document.getElementsByClassName('container');
for(let i=0;i<container.length;i++){
    console.log(i);
}

const move=document.getElementById('move');
const controller=document.getElementById('controller');
move.style.border='1px solid red';
function moveCircle(){
    move.style.transition='transform 0.5s';
    move.style.transform='translateX('+b*50+'px)';

}
let b=1;
function countClick(){
    //b=1;
    console.log(b);
    b++;
    controller.addEventListener('click',moveCircle);
}
controller.addEventListener('click',countClick);