document.addEventListener('DOMContentLoaded', function () {
})

const timeOut;
let timeDiff = 0;
const timer;
let timeDisplay = document.getElementById("timeHeader");

const start = () => {
  (document.getElementById("startBtn")).addEventListener("click", (event) => {
    if (!timeOut) {
      timeDiff = Date.now();
      timeOut = setTimeOut(updateTime, 1000);
    }

  })
}

const renderTime = () => {
  timeDisplay.innerHTML.toString() = timer
  console.log(timer)
}

const updateTime = () => {
  timer += logTime();
  renderTime();
}

const logTime = () => {
  let timeNow = Date.now();
  let d = timeNow - timeDiff;
  timeDiff = timeNow;
  return d;
}