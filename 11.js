function getCompleted(part, total) {
  const getSeconds = (time) =>
    time.split(":").reduce((acc, item, i) => acc + item * 60 ** (2 - i), 0);
  const currentWork = getSeconds(part);
  const totalWork = getSeconds(total);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(currentWork, totalWork);

  return `${currentWork / divisor}/${totalWork / divisor}`;
}

const fraction1 = getCompleted("01:00:00", "03:00:00"); // '1/3'
console.log(fraction1);

const fraction2 = getCompleted("02:00:00", "04:00:00"); // '1/2'
console.log(fraction2);

const fraction3 = getCompleted("01:00:00", "01:00:00"); // '1/1'
console.log(fraction3);

const fraction4 = getCompleted("00:10:00", "01:00:00"); // '1/6'
console.log(fraction4);

const fraction5 = getCompleted("03:30:30", "01:10:10"); // '2/3'
console.log(fraction5);

const fraction6 = getCompleted("03:30:30", "05:50:50"); // '3/5
console.log(fraction6);
