const bgmOn = document.querySelector(".js-musicOn");
const bgmOff = document.querySelector(".js-musicOff");
var bgm = new Audio('./bgms/비오는 차안.m4a');


function playMusic(event){
    if(event !==0){bgm.play()}else{
        bgm.pause();
    }
}

function pauseMusic(event){
    bgm.pause();

}


function onMusic(){
    bgmOn.addEventListener("click", playMusic);
    
}

function offMusic(){
    bgmOff.addEventListener("click", pauseMusic);
     
}


function init(){
    onMusic();
    offMusic();

}

init();