function dryNumber(dry, numbers) {
  const barcodes = [...Array(numbers).keys()]
    .filter((number) => String(number + 1).includes(String(dry)))
    .map((number) => number + 1);
  return barcodes;
}

const wrong = dryNumber(2, 20); // [2, 12, 20]
console.log(wrong);
