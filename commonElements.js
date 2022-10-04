function commonElements(arr1, arr2) {
  for (let arr1Index = 0; arr1Index < arr1.length; arr1Index++) {
    for (let arr2Index = 0; arr2Index < arr2.length; arr2Index++) {
      if (arr1[arr1Index] === arr2[arr2Index]) {
        console.log(arr1[arr1Index]);
      }
    }
  }
}


commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
//for(const element of firstArray){
    //if(secondArray.includes elemtn){
        //console.log(element)
 //   }
//}