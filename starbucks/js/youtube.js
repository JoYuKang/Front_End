// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // yutube iframe에서 찾는거기 때문에 이름을 변경하면 안된다.
  // <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
  //  <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 비디오 아이디를 여기에 입력
    playerVars: {
      autoplay: true,
      loop: true,
      videoId: 'An6LvWQuj_8', // 영상을 반복시키기 위해서 아이디 값 한번 더 입력해야 한다.
    },
    events:{
      onReady: function(event){
        event.target.mute() // 음소거
      }
    }

  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}