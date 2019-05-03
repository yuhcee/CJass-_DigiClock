const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const display = document.querySelector(".display");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const ampm = hours >= 12 ? "pm" : "am";
  const secondsFormat = seconds >= 10 ? seconds : "0" + seconds;
  display.textContent = hours + " : " + minutes + " : " + secondsFormat+" " + ampm;
  display.style.color = "white";
}

setInterval(setDate, 1000);
