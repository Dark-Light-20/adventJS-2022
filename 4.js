function fitsInOneBox(boxes) {
  const sortedBoxes = boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);
  for (let i = 0; i < sortedBoxes.length - 1; i++) {
    const actualBox = sortedBoxes[i];
    const nextBox = sortedBoxes[i + 1];
    if (
      !(
        actualBox.l < nextBox.l &&
        actualBox.w < nextBox.w &&
        actualBox.h < nextBox.h
      )
    )
      return false;
  }
  return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const fits = fitsInOneBox(boxes); // true
console.log(fits);
