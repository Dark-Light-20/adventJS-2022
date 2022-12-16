function decorateTree(base) {
  const nextDecoration = {
    PP: "P",
    BB: "B",
    RR: "R",
    PB: "R",
    BP: "R",
    PR: "B",
    RP: "B",
    BR: "P",
    RB: "P",
  };
  let tree = [base.split(" ")];
  while (tree[0].length !== 1) {
    const nextLevel = new Array(tree[0].length - 1)
      .fill("")
      .map((_, i) => nextDecoration[tree[0][i] + tree[0][i + 1]]);
    tree = [nextLevel, ...tree];
  }
  return tree.map((level) => level.join(" "));
}

const base = "B P R P";
const tree = decorateTree(base);
console.log(tree);
