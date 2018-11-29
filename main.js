document.addEventListener('DOMContentLoaded', function () {
})

let interval = false;
const timeArr = [];
let timeDiff = 0;
const timer = 0;

const start = () => {
  (document.getElementById("startBtn")).addEventListener("click", () => {
    if (!interval) {
      timeDiff = Date.now();
      setInterval(updateTime, 1000);
    }
  })
  return timer;
}
const reset = (timer) => {
  timeArr = [];
  clearTimeout(timer);
}

const log = (timer) => {
  timeArr.push(timer);
}

function updateTime() {
  timer += logTime();
}

const logTime = () => {
  let timeNow = Date.now();
  let d = timeNow - timeDiff;
  timeDiff = timeNow;
  return d;
}