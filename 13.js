function getFilesToBackup(lastBackup, changes) {
  const filesToBackup = changes
    .filter((change) => change[1] > lastBackup)
    .map((change) => change[0])
    .sort((a, b) => a - b);
  return [...new Set(filesToBackup)];
}

const lastBackup = 1546300800;

const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100],
];

const files = getFilesToBackup(lastBackup, changes); // => [ 1, 3 ]
console.log(files);
