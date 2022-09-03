const merge = function (arr1, arr2) {
  // check if first array is empty. If so, return array 2
  if (arr1.length === 0) {
    return arr2;
  } else {
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = k; j < arr2.length; j++) {
        //check whether arr2 item is less than current arr1 item, and splice
        if (arr2[j] < arr1[i]) {
          arr1.splice(i, 0, arr2[j]);
          k = j + 1;
          // add the remaining numbers in arr2 greater than the largest number in arr1
        } else if (i === arr1.length - 1) {
          for (let m = k; m < arr2.length; m++) {
            arr1.push(arr2[m]);
            // close the loop
            k = arr2.length;
          }
        }
      }
    }
  }
  return arr1;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));
console.log(merge([4], [2, 5, 8]));
console.log(merge([], [1, 2, 6]));
console.log(merge([1, 2, 6], []));