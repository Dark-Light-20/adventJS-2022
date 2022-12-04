function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);
  const reindeersCapacity = reindeers.reduce(
    (acc, reindeer) => acc + reindeer.length * 2,
    0
  );
  return Math.floor(reindeersCapacity / giftsWeight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
const packs = distributeGifts(packOfGifts, reindeers); // 2
console.log(packs);
