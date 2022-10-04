function arrayRotation(arrayToRotate, rotation) {
  for (let i = 0; i < rotation; i++) {
    let numberToMove = arrayToRotate.shift();
    arrayToRotate.push(numberToMove);
  }
  console.log(arrayToRotate.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
