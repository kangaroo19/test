const parent=document.querySelector('.parent');

const child=document.querySelector('#child1');


console.log(child.nextElementSibling);
parent.removeChild(child);
parent.removeChild(child.nextElementSibling);