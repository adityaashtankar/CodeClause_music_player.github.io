
let currentMusic=0;
const audio=document.querySelector('#song')
const seekbar=document.querySelector('.rslider')
const artist=document.querySelector('.artist')
const songname=document.querySelector('.song')
const wallpaper=document.querySelector('.image')
const currentTime=document.querySelector('.start')
const songduration=document.querySelector('.end')
const playbtn=document.querySelector('.playbtn')
const next=document.querySelector('.next')
const album=document.querySelector('.album')
const back=document.querySelector('.back')
const exitButton = document.getElementById('exitButton');

playbtn.addEventListener('click',()=>{
    playbtn.classList.toggle('pause');
    if(playbtn.className.includes('pause')){
     audio.pause();
 }
 else
 {
        audio.play();
 }
   
})

const setMusic=(i)=>{
    seekbar.value=0;
    const song=songs[i]
    currentMusic=i;
    audio.src=song.path;
    album.innerHTML=song.album;
    songname.innerHTML=song.name;
    artist.innerHTML=song.artist;
    wallpaper.style.backgroundImage=`url('${song.cover}')`;
    currentTime.innerHTML='00:00'
    setTimeout(()=>{
        seekbar.max =audio.duration;
        console.log(audio.duration)

        songduration.innerHTML=formatTime(audio.duration);
        
    },300)
   
}
setMusic(0);
const formatTime=(time)=>{
 let min=Math.floor(time/60);
 if(min<10)
 {
    min=`0${min}`;
 }
 let sec=Math.floor(time % 60);
 if(sec<10)
 {
    sec=`0${sec}`;
 }
 return `${min}:${sec}`;
}
setInterval(()=>{
  seekbar.value=audio.currentTime;
  currentTime.innerHTML=formatTime(audio.currentTime);
},500)
seekbar.addEventListener('change',()=>{
 audio.currentTime=seekbar.value;
})
const playmusic=()=>{
    audio.play()
    playbtn.classList.remove('pause')
}
next.addEventListener('click',()=>{
    if(currentMusic>=songs.length-1)
    {
        currentMusic=0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playmusic(); 
})
back.addEventListener('click',()=>{
    if(currentMusic>=songs.length-1)
    {
        currentMusic=0;
    }
    else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playmusic(); 
})
exitButton.addEventListener('click', () => {
    window.close();
  });