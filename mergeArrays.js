function mergeArray(arr1, arr2) {
  let resultArray = [];
  let arr1Length = arr1.length;
  for (let index = 0; index < arr1Length; index++) {
    if (index % 2 === 0) {
      resultArray.push(Number(arr1[index]) + Number(arr2[index]));
    } else {
      resultArray.push(arr1[index] + arr2[index]);
    }
  }
  console.log(resultArray.join(" - "));
}
mergeArray(
  ["5", "15", "23", "56", "35"],
  ["17", "22", "87", "36", "11"]
);
