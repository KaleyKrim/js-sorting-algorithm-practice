function quickSort(arr){

  var lessArray = [];
  var greaterArr = [];
  var pivot = [arr[0]];

  if (arr.length === 0){
    return arr;
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot){
      lessArray.push(arr[i]);
    }else{
      greaterArr.push(arr[i]);
    }
  }

  return quickSort(lessArray).concat(pivot.concat(quickSort(greaterArr)));
}



var array = [5, 9, 1, 10, 10, 4, 14, 7, 3, 4];
console.log(quickSort(array));