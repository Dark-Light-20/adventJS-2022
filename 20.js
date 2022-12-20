function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity);
  const generateDistribution = (weight) => {
    let remain = weight;
    const reindeers = reindeerTypes
      .filter((reindeer) => reindeer.weightCapacity < weight)
      .map((reindeer) => ({
        type: reindeer.type,
        num: 0,
      }));
    do {
      reindeerTypes.forEach((reindeer, index) => {
        if (remain - reindeer.weightCapacity >= 0) {
          reindeers[index].num++;
          remain -= reindeer.weightCapacity;
        }
      });
    } while (remain !== 0);
    return reindeers;
  };
  return gifts.map(({ country, weight }) => ({
    country,
    reindeers: generateDistribution(weight).reverse(),
  }));
}

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];

const reindeers = howManyReindeers(reindeerTypes, gifts);
console.log(reindeers);
reindeers.forEach((group) => console.log(group.reindeers));
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
