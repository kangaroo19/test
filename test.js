const ball=document.getElementById("ball");

ball.onmousedown=function(event){
    let shiftX=event.clientX-ball.getBoundingClientRect().left;
    let shiftY=event.clientY-ball.getBoundingClientRect().top;
    console.log(shiftX,event.clientX);
    ball.style.position='absolute';
    ball.style.zIndex=1000;
    document.body.append(ball);
    
    function moveAt(pageX,pageY){
        ball.style.left=pageX-shiftX+'px';
        ball.style.top=pageY-shiftY+'px';
        
    }

    moveAt(event.pageX,event.pageY);

    function onMouseMove(event){
        moveAt(event.pageX,event.pageY);
    }
    document.addEventListener('mousemove',onMouseMove);

    ball.onmouseup=function(){
        document.removeEventListener('mousemove',onMouseMove);
       // ball.onmouseup=null;
    };
};

ball.ondragstart=function(){
    return false;
}


