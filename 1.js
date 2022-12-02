function wrapping(gifts) {
  return gifts.map(
    (gift) =>
      "*".repeat(gift.length + 2) +
      "\n*" +
      gift +
      "*\n" +
      "*".repeat(gift.length + 2)
  );
}

/* 
    Puntos conseguidos: 131
    3,579 ops/s (Higher is better)
    Cyclomatic complexity: 1 (Lower is better)
    Maintainability: 159% (Higher is better)
*/
