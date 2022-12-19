function sortToys(toys, positions) {
  const sorted = [];
  toys.forEach((toy, index) => (sorted[positions[index]] = toy));
  return sorted.filter((toy) => toy.length);
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

const sorted1 = sortToys(toys, positions);
console.log(sorted1);
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

const sorted2 = sortToys(moreToys, morePositions);
console.log(sorted2);
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
