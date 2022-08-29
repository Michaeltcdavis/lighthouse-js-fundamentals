
function smartGarbage(trash, bins) {
  switch (trash) {
    case 'recycling':
      bins.recycling += 1;
      break;
    case 'waste':
      bins.waste += 1;
      break;
    case 'compost':
      bins.compost += 1;
      break;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));