function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxGiftsPossible = 0;
  let combinations = [];

  combinations.push([], [giftsCities[0]]);
  giftsCities.shift();

  giftsCities.forEach((giftsCity) => {
    const newList = combinations.map((combination) => {
      let _combination = [...combination];
      if (_combination.length < maxCities) _combination.push(giftsCity);
      return _combination;
    });
    combinations = combinations.concat(newList);
  });

  combinations.shift();

  const values = combinations.map((combination) => {
    const sum = combination.reduce((acc, item) => acc + item, 0);
    return sum > maxGifts ? 0 : sum;
  });

  maxGiftsPossible = Math.max(...values);

  return maxGiftsPossible;
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

const answer = getMaxGifts(giftsCities, maxGifts, maxCities); // 20 (12 + 3 + 5)

// const answer = getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
// const answer = getMaxGifts([50], 15, 1) // 0
// const answer = getMaxGifts([50], 100, 1) // 50
// const answer = getMaxGifts([50, 70], 100, 1) // 70
// const answer = getMaxGifts([50, 70, 30], 100, 2) // 100
// const answer = getMaxGifts([50, 70, 30], 100, 3); // 100
// const answer = getMaxGifts([50, 70, 30], 100, 4) // 100

console.log(answer);
