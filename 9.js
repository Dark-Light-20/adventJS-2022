function countTime(leds) {
  let iterations = 0;
  while (leds.includes(0)) {
    leds = leds.map((led, i) => (!led && leds.at(i - 1) ? 1 : led));
    iterations++;
  }
  return iterations * 7;
}

const leds = [0, 1, 1, 0, 1];
const time1 = countTime(leds); // 7
console.log(time1);
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

const time2 = countTime([0, 0, 0, 1]); // 21
console.log(time2);
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

const time3 = countTime([0, 0, 1, 0, 0]); // 28
console.log(time3);
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
