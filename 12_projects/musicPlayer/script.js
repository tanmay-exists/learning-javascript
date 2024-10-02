console.log("Welcome nigga to Spotify")

// initialize the variables
let songIndex = 0
let audioElement = new Audio('songs/11.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName: "Sakanigadik", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sakanigadik", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Sakanigadik", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Sakanigadik", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Sakanigadik", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sakanigadik", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakanigadik", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sakanigadik", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sakanigadik", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Sakanigadik", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Sakanigadik", filePath: "songs/11.mp3", coverPath: "Firefly a black man listening music 47218.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

// handle play/pause
masterPlay.addEventListener('click', () =>{
    masterSongName.innerText = songs[songIndex].songName
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// listen events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('click', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex++
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 10
    }
    else{
        songIndex--
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})