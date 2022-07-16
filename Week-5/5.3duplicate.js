function hasDuplicate (arr) {
    return arr.length === new Set(arr).size;
  }
  
  let uniqueArray = [1, 2, 3, 4, 5,6,7,8];
  console.log(`${uniqueArray} is unique : ${hasDuplicate (uniqueArray)}`);
  
  let nonUniqueArray = [1, 1, 2, 3, 4, 5,5];
  console.log(`${nonUniqueArray} is unique : ${hasDuplicate (nonUniqueArray)}`);