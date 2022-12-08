function getGiftsToRefill(a1, a2, a3) {
  const giftsA1 = new Set(a1);
  const giftsA2 = new Set(a2);
  const giftsA3 = new Set(a3);
  const allGifts = [...giftsA1, ...giftsA2, ...giftsA3];
  const storesByGift = {};
  allGifts.forEach(
    (gift) =>
      (storesByGift[gift] = storesByGift[gift] ? ++storesByGift[gift] : 1)
  );
  const refill = Object.keys(storesByGift).filter(
    (gift) => storesByGift[gift] === 1
  );
  return refill;
}

const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['doll', 'pc']
console.log(gifts);
