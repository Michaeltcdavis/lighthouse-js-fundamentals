for (let count = 100; count <= 200; count++) {
  if (count % 3 === 0) {
    if (count % 4 === 0) {
      console.log('LoopyLighthouse');
    } else {
      console.log('Loopy');
    }
  } else if (count % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(count);
  }
}