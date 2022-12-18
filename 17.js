function carryGifts(gifts, maxWeight) {
  const filteredGifts = gifts.filter((gift) => gift.length <= maxWeight);
  const bags = filteredGifts.reduce(
    (acc, currentGift) => {
      const lastBagIndex = acc.length - 1;
      if (
        acc[lastBagIndex].reduce((length, gift) => (length += gift.length), 0) +
          currentGift.length <=
        maxWeight
      ) {
        acc[lastBagIndex].push(currentGift);
      } else {
        acc[lastBagIndex + 1] = [currentGift];
      }
      return acc;
    },
    [[]]
  );
  return bags.filter((bag) => bag.length).map((bag) => bag.join(" "));
}

const bags = carryGifts(["toy", "gamme", "toy", "bike"], 6);

console.log(bags);
