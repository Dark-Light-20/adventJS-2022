function printTable(gifts) {
  let table = "";
  gifts = [{ name: "Gift", quantity: 11111111 }, ...gifts];
  const maxNameLength = Math.max(...gifts.map((gift) => gift.name.length));
  const maxQuantityLength = Math.max(
    ...gifts.map((gift) => gift.quantity.toString().length)
  );
  gifts.shift();
  table += "+".repeat(7 + maxNameLength + maxQuantityLength) + "\n";
  table +=
    "| Gift" +
    " ".repeat(maxNameLength - 4) +
    " | Quantity" +
    " ".repeat(maxQuantityLength - 8) +
    " |\n";
  table +=
    "| " +
    "-".repeat(maxNameLength) +
    " | " +
    "-".repeat(maxQuantityLength) +
    " |\n";
  gifts.forEach((gift) => {
    table +=
      "| " +
      gift.name +
      " ".repeat(maxNameLength - gift.name.length) +
      " | " +
      gift.quantity.toString() +
      " ".repeat(maxQuantityLength - gift.quantity.toString().length) +
      " |\n";
  });
  table += "*".repeat(7 + maxNameLength + maxQuantityLength);
  return table;
}

const table1 = printTable([
  { name: "Game", quantity: 2 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
]);
console.log(table1);

const table2 = printTable([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]);
console.log(table2);
