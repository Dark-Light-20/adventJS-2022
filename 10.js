function checkJump(heights) {
  let goneDown = false;
  let goneUp = false;
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1]) {
      goneUp = true;
      if (goneDown) return false;
    } else if (heights[i] > heights[i + 1]) {
      goneDown = true;
    }
  }
  return goneUp && goneDown;
}

const heights1 = [1, 3, 8, 5, 2];
const check1 = checkJump(heights1); // true
console.log(check1);

const heights2 = [1, 7, 3, 5];
const check2 = checkJump(heights2); // false
console.log(check2);
