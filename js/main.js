/*! Catch2022 v1.0.0 | (c) 2020  | MIT License | git@github.com:Catch2022/Catch2022-Website */
// adjust the width so that there is never horizontal overflow
function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
setVw();
window.addEventListener('resize', setVw);


