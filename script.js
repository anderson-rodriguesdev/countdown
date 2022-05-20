import Countdown from "./countdown.js";

const tempoParaNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");

console.log(tempoParaNatal.total);
setInterval(() => {
  console.log(tempoParaNatal.total);
}, 1000);
