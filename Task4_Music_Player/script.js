const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

let songIndex = 0;

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");

function loadSong() {
    audio.src = songs[songIndex];
    songTitle.innerText = songs[songIndex];
}

function playPause() {

    if (audio.src === "") {
        loadSong();
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong();
    audio.play();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong();
    audio.play();
}

loadSong();