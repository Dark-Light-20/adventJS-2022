function createCube(size) {
  let cube = "";
  // Top side
  for (let i = 0; i < size; i++) {
    cube += " ".repeat(size - i - 1);
    cube += "/\\".repeat(i + 1);
    cube += "_\\".repeat(size);
    cube += "\n";
  }
  // Bottom side
  for (let i = 0; i < size; i++) {
    cube += " ".repeat(i);
    cube += "\\/".repeat(size - i);
    cube += "_/".repeat(size);
    cube += "\n";
  }
  return cube.slice(0, -1);
}

const cube = createCube(3);
console.log(cube);
