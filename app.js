const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const bGround = document.querySelector(".container");
const title = document.querySelector(".title");
let m = 25;
let s = 0;
let timer;
let isWork = true;

const timeToString = (n) => (n < 10 ? "0" + n : n);

const Start = () => {
  timer = setInterval(() => {
    s--;
    if (s == -1) {
      m--;
      s = 59;
    }

    if (m == -1) {
      if (isWork) {
        m = 5;
        bGround.style.backgroundColor = "rgb(56, 133, 138)";
      } else {
        m = 25;
        bGround.style.backgroundColor = "rgb(186, 73, 73)";
      }
      isWork = !isWork;
    }

    min.innerHTML = timeToString(m);
    sec.innerHTML = timeToString(s);
    title.innerHTML = `${timeToString(m)}:${timeToString(s)}`;
  }, 1000);
};

const Stop = () => {
  clearInterval(timer);
};

startBtn.addEventListener("click", () => {
  Start();
});
stopBtn.addEventListener("click", () => {
  Stop();
});
