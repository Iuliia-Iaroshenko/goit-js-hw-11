const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]')
}

const TIMEDELAY = 1000;
let colorSwitchIsOn = false;


const onStartBtnClick = () => {
  if (colorSwitchIsOn === true) {
    return;
  }
  colorSwitchIsOn = true;
  colorSwitchIntervalId = setInterval(changeBackground, TIMEDELAY);
  refs.startBtn.removeEventListener('click', onStartBtnClick);
}

const changeBackground = () => {
  if (colorSwitchIsOn === true) {
  document.body.style.background = `#${Math.floor(Math.random() * 16777255).toString(16)}`;
  };
}

const onStopBtnClick = () => {
  colorSwitchIsOn = false;
  clearInterval(colorSwitchIntervalId);
  refs.startBtn.addEventListener('click', onStartBtnClick);
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
