const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// 로컬 mp3 파일명
const songs = ["Some Like It Hot!!", "Mullally - Sweet Coffee", "Justin Bieber - Lifetime", "INFINITE - Tell Me"];
let songIndex = 0;

function getSongTitle(song) {
  return song.charAt(0).toUpperCase() + song.slice(1);
}

const musicPath = "/music/";
const imagePath = "/image/";

const mp3Files = [
  "song0.mp3",
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

const imageFiles = [
  "image0.jpg",
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

function loadSong(songIndex) {
  title.innerText = getSongTitle(songs[songIndex]);
  audio.src = musicPath + mp3Files[songIndex];
  cover.src = imagePath + imageFiles[songIndex];
}

function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector("i.fas").classList.remove("fa-pause");
  playButton.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1; // 첫 번째 곡에서 이전 버튼을 누르면 마지막 곡으로 이동
  loadSong(songIndex); // 노래 로드
  if (musicContainer.classList.contains("play")) {
    playSong(); // 현재 재생 중이면 다시 재생
  }
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0; // 마지막 곡에서 다음 버튼을 누르면 첫 번째 곡으로 이동
  loadSong(songIndex); // 노래 로드
  if (musicContainer.classList.contains("play")) {
    playSong(); // 현재 재생 중이면 다시 재생
  }
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

loadSong(songIndex);
