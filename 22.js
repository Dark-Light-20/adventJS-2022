function checkStepNumbers(systemNames, stepNumbers) {
  const minSystemLimit = {};
  let wrongSystem = false;
  for (let index = 0; index < stepNumbers.length && !wrongSystem; index++) {
    const number = stepNumbers[index];
    const name = systemNames[index];
    wrongSystem = minSystemLimit[name] > number;
    minSystemLimit[name] = number;
  }
  return !wrongSystem;
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

const increasing1 = checkStepNumbers(systemNames, stepNumbers); // => true
console.log(increasing1);

const increasing2 = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]); // => false
console.log(increasing2);
