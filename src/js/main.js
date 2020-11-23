// adjust the width so that there is never horizontal overflow
function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
setVw();
window.addEventListener('resize', setVw);


