 console.log("Welcome to JS")
// intialize var

let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterSongName = document.getElementById('masterSongName');
let timset = document.getElementsByClassName('timeStamp');
let masterPlay = document.getElementById('masterPlay');
let songIteam = Array.from(document.getElementsByClassName('SongIteam'));

let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');

let songs = [

    {songName: "Lemonade", filePath: "songs/0.mp3", coverPath: "image1.jpg"},
    {songName: "We Rollin", filePath: "songs/1.mp3", coverPath: "image1.jpg"},
    {songName: "On and On", filePath: "songs/2.mp3", coverPath: "image1.jpg"},
    {songName: "The Hills", filePath: "songs/3.mp3", coverPath: "image1.jpg"},
    {songName: "Insane", filePath: "songs/4.mp3", coverPath: "image1.jpg"},
    {songName: "Falling", filePath: "songs/5.mp3", coverPath: "image1.jpg"}

]
    
songIteam.forEach((element, i)=>{

    console.log(element, i);
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
    // element.getElementsByClassName("timset")[0].innerText=songs[i].duration;

})

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>
{
    audioElement.currentTime = (progressbar.value * audioElement.duration)/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongIteamPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('SongIteamPlay')).forEach((element)=>{

   element.addEventListener('click', (e)=>{
   makeAllPlays();
   index = parseInt(e.target.id);
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');   
   audioElement.src = `songs/${index}.mp3`;
   audioElement.currentTime = 0;
   masterSongName.innerText = songs[index].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    songIndex = index;


   
   })
})
document.getElementById('next').addEventListener('click', () =>{
    if(songIndex >= 5)
    {
     songIndex =0;
    }
    else{
     songIndex += 1; 
    }
 
    audioElement.src= `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 
 
 
 })

document.getElementById('previous').addEventListener('click', () =>{
   if(songIndex == 0)
   {
    songIndex = 0;
   }
   else{
    songIndex -= 1; 
   }

   audioElement.src= `songs/${songIndex}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');



})
