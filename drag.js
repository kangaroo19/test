const list=document.querySelector(".list");
//dragstart dragover dragdrop

let picked=null;
let pickedIndex=null;
list.addEventListener("dragstart",(e)=>{
    //console.log(e);
    const obj=e.target;
    picked=obj;
    pickedIndex=[...obj.parentNode.children].indexOf(obj);
    //...스프레드 오퍼레이터
    //indexOf ->배열의 인덱스 값 반환
    picked=e.target;
})
list.addEventListener("dragover",(e)=>{
    e.preventDefault();
    //console.log(e);
})

list.addEventListener("drop",(e)=>{
    const obj=e.target;
    const index=[...obj.parentNode.children].indexOf(obj);
    if(index>pickedIndex){
        obj.after(picked);
    }
    else{
        obj.before(picked);
    }
    
})