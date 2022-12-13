function selectSleigh(distance, sleighs) {
  let selectedSleigh = undefined;
  for (const sleigh of sleighs) {
    if (distance * sleigh.consumption <= 20) selectedSleigh = sleigh;
    else break;
  }
  return selectedSleigh ? selectedSleigh.name : null;
}

const distance = 30;
const sleighs = [
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 },
];

const sleigh = selectSleigh(distance, sleighs); // => "Madeval"
console.log(sleigh);
