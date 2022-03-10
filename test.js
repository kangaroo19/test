const box1=document.querySelector("#box1");

function dbclickfunc(){
    box1.classList.add("mkblue");
    console.log("db");
}
box1.addEventListener("dblclick",dbclickfunc);