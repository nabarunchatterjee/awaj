export function timeDifference() {
  const date1 = new Date("9 August, 2024");
  const date2 = new Date();
  var delta = Math.abs(date2 - date1) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta % 60); // in theory the modulus is not required

  return `${days} Days ${hours} Hrs ${minutes} mins ${seconds} secs`;
}

export function slogIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const helpers = { timeDifference, slogIndex };
export default helpers;
