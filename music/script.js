console.log("Welcome to Spotify");

let songnIndex = 0;
let audioelement = new Audio('music/music1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songname: "baarishein", filePath: "music/music1.mp3", coverPath: "covers/cover.jpeg" },
    { songname: "kho gye", filePath: "music/music2.mp3", coverPath: "covers/cover2.jpg" },
    { songname: "tumse mohobbat", filePath: "music/music3.mp3", coverPath: "covers/cover3.jpg" },
    { songname: "phir milonge na", filePath: "music/music4.mp3", coverPath: "covers/cover4.jpg" },
    { songname: "ankhiyan", filePath: "music/music5.mp3", coverPath: "covers/cover5.jpg" },
    { songname: "ankhon se batana", filePath: "music/music6.mp3", coverPath: "covers/cover6.jpg" },

]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})


masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate', () => {

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})


const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        gif.style.opacity = 1;
        makeallplays();
        songnIndex= parseInt(e.target.id);
        songnIndex = songnIndex + 1;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.currentTime = 0;
        audioelement.src = `music/music` + (songnIndex) + `.mp3`;
        mastersongname.innerText=songs[songnIndex-1].songname;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songnIndex>=9){
        songnIndex=0;
    }
    else{
        songnIndex+=1;
    }
    audioelement.src = `music/music` + (songnIndex) + `.mp3`;
    mastersongname.innerText=songs[songnIndex-1].songname;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songnIndex<=0){
        songnIndex=0;
    }
    else{
        songnIndex-=1;
    }
    audioelement.src = `music/music` + (songnIndex) + `.mp3`;
        mastersongname.innerText=songs[songnIndex-1].songname;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

