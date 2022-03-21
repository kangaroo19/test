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
/////////////////////////////////////////////////////////////////////
function transformNext(event){
    const slideNext=event.target;
    const slidePrev=slideNext.previousElementSibling;
    const classList=slideNext.parentElement.parentElement.nextElementSibling;
    let activeLi=classList.getAttribute('data-position');
    const liList=classList.getElementsByTagName('li');
    //하나의 카드라도 왼쪽으로 이동했다면, 오른쪽으로 갈 수 있음
    if(Number(activeLi)<0){
        activeLi=Number(activeLi)+260;
        //왼쪾에 있던 카드가 오른쪽으로 갔다면 다시 왼쪽으로 갈 수 있으므로 prev버튼 활성화
        slidePrev.style.color='#2f3059';
        slidePrev.classList.add('slide-prev-hover');
        slidePrev.addEventListener('click',transformPrev);

        if(Number(activeLi)===0){
            slideNext.style.color='#cfd8dc'; //회색(비활성)
            slideNext.classList.remove('slide-next-hover');
            slideNext.removeEventListener('click',transformNext);
        }
    }
    classList.style.transition='transform 1s';
    classList.style.transform='translateX('+String(activeLi)+'px)';
    classList.setAttribute('data-position',activeLi);
}
/////////////////////////////////////////////////////////////////////
function transformPrev(event){   ///<-----방향(왼쪽)
    const slidePrev=event.target; //해당 이벤트가 발생된 요소 가져올수있음
    const slideNext=slidePrev.nextElementSibling;
    //console.log(sildePrev);
    //console.log(sildeNext);

    const classList=slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi=classList.getAttribute('data-position'); //디폴트 값은 0
    const liList=classList.getElementsByTagName('li');
    //console.log(liList.length*260*Number(activeLi))
    /*
    classList.clientWidth는 ul태그의 실질적인 너비
    activeLi 는 data-position에 있는 현재 위치
    즉, liList.length*260*Number(activeLi)는 현재 위치부터 오른쪽으로 나열되야 하는 
    나머지 카드들의 너비
    */
    if(classList.clientWidth<(liList.length * 260 + Number(activeLi))){ //넘칠때
        //위치를 왼쪽으로 260 이동(-260px);
        
        activeLi=Number(activeLi)-260;
        console.log(activeLi);

       // console.log(activeLi);
        /*위치를 왼쪽으로 260 이동(-260px)
        해당 위치는 변경된 activeLi값이 적용된 liList.length*260+Number(activeLi) 값임
        이 값보다 classList.clientWidth (ul태그의 너비)가 크다는 것은
        넘치는 li가 없다는 뜻으로 next버튼 활성화되면 안됨
        */

        if(classList.clientWidth>(liList.length * 260 + Number(activeLi))){
            slidePrev.style.color='#cfd8dc'; //왼쪽버튼 비활성(회색)
            slidePrev.classList.remove('slide-prev-hover');
            slidePrev.removeEventListener('click',transformPrev);
        }
        slideNext.style.color='#2f3059'; //파란색(활성)
        slideNext.classList.add('slide-next-hover');
        slideNext.addEventListener('click',transformNext);
    }
    classList.style.transition='transform 1s';
    classList.style.transform='translateX('+String(activeLi)+'px)';
    classList.setAttribute('data-position',activeLi);
}

const slidePrevList=document.getElementsByClassName("slide-prev");//slidePrevList에는 slide-prev가 3개 이므로 배열형식으로 3개 저장

for(let i=0; i<slidePrevList.length; i++){
    let classList=slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList=classList.getElementsByTagName('li');
    console.log('classList.clientWidth='+classList.clientWidth);
    console.log('liList의 길이 * 260='+liList.length*260);
    if(classList.clientWidth<liList.length * 260){  //li요소(class-card)가 넘칠때 ,260은 하나의 클래스카드의 width
        slidePrevList[i].classList.add("slide-prev-hover");
        slidePrevList[i].addEventListener('click',transformPrev);
    }
    else{//넘치지 않으면 arrowcontainer의 자식요소 삭제(자식요소의 형제요소부터 삭제할 것)
        const arrowContainer=slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);

        //shildPrevList[i]를 먼저 지우면 childPrevList가 없기 떄문에 slidePrevList[i].nextElemnetSibling실행되지 않음
    }
}

