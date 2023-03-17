import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_OUTTIME = 'videoplayer-current-time';
const saveTime = localStorage.getItem(VIDEO_OUTTIME);
player.on('timeupdate', throttle(handleVideoTimeup, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function handleVideoTimeup(evt) {
  console.dir(evt);
  localStorage.setItem(VIDEO_OUTTIME, evt.seconds);
}

player
  .setCurrentTime(saveTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
