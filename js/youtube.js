// 2.  Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');   //script 요소생성하여 tag변수에 할당

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];   //첫번째 스크립트요소 찾아서 firstScriptTag에 할당
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);   //첫번째 스크립트태그의 부모요소를 찾아서 이전에 삽입하여 실행..

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID(주소표시란에 맨뒤에 있는것이 id임)
    PlayerVars: {
      autoplay: true,  //자동 재생 유무
      loop: true,   //반복 재생 유무
      playlist: 'An6LvWQuj_8'  //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute()  //음소거
      }
    }
  });
}