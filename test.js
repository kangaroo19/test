console.log('hi');
function desc(callback){
    setTimeout(()=>{
        console.log('jaehyun');
        callback();
    },3000);
    
}


function desc2(){
   console.log("hkhkhkhkhkh"); 
}

desc(desc2);

console.log("adfds");