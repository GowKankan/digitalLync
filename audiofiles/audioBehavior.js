

var audioBox = document.getElementsByTagName("audio");
var playlist = document.getElementById("playlist");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

playlist.onclick = startPlayList;
playBtn.onclick = resumePlay;
pauseBtn.onclick = pauseTheSong;

function startPlayList(e) {
  console.log("event", e.target);

  var currentTrk = document.getElementsByTagName("audio");
  for (var i = 0; i < currentTrk.length; i++) {
    if (!currentTrk[i].paused) {
      currentTrk[i].pause();
    }
  }

  var songSrc = e.target.getAttribute("data-src");
  var newAudioEl = document.createElement("audio");
  newAudioEl.src = songSrc;
  newAudioEl.class="";
  newAudioEl.setAttribute("class", "active");

  document.body.appendChild(newAudioEl);
  console.log("New Track selected", newAudioEl);
  playTheSong(newAudioEl);
}

function playTheSong(audio) {
  console.log("Playing: ", audio);
  audio.play();
}

function resumePlay() {
  for (var i = 0; i < audioBox.length; i++) {
    if (audioBox[i].paused) {
      audioBox[i].play();
    }
  }
  console.log("Resuming selected track ");
}

function pauseTheSong() {
  for (var i = 0; i < audioBox.length; i++) {
    if (!audioBox[i].paused) {
      audioBox[i].pause();
      console.log("paused the song");
    }
  }
}
