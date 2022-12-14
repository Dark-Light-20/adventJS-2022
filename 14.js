function getOptimalPath(path) {
  const response = path.reduceRight((previous, current) =>
    current.map(
      (value, index) => value + Math.min(previous[index], previous[index + 1])
    )
  )[0];
  return response;
}

const optimal = getOptimalPath([[0], [3, 4], [9, 8, 1]]); // 5
console.log(optimal);
