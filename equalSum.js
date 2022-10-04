function arraySum(arr) {
  let foundIndex = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum = leftSum + arr[l];
    }
    for (let r = i + 1; r < arrLength; r++) {
      rightSum = rightSum + arr[r];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
arraySum([2]);
