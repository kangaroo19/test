const backToTop=document.getElementById('backtotop');

function checkScroll(){
    let pageYOffset=window.pageYOffset;
    if(pageYOffset!==0){
        backToTop.classList.add("show");
    }
    else{
        backToTop.classList.remove("show");
    }
}

function moveBackToTop(){
    if(window.pageYOffset>0){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
}

window.addEventListener('scroll',checkScroll);
backToTop.addEventListener('click',moveBackToTop);


function transformPrev(){

}

const slidePrevList=document.getElementsByClassName("slide-prev");

for(let i=0; i<slidePrevList.length; i++){
    let classList=slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList=classList.getElementsByTagName('li');
    console.log(classList.clientWidth);
    console.log(liList.length*260);
    if(classList.clientWidth<liList.length * 260){  //li요소(class-card)가 넘칠때
        slidePrevList[i].classList.add("slide-prev-hover");
        slidePrevList[i].addEventListener('click',transformPrev);
    }
    else{
        const arrowContainer=slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);

        //shildPrevList[i]를 먼저 지우면 childPrevList가 없기 떄문에 slidePrevList[i].nextElemnetSibling실행되지 않음
    }
}

