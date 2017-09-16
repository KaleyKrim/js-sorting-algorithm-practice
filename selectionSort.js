var selectionSort = function () {

debugger;

  function swapValue(arr, i, j){
    var savedValue = arr[i];
    arr[i] = arr[j];
    arr[j] = savedValue;
  }


  function sortArray (arr){
    for (var i = 0; i < arr.length; i++) {
      var smallest = i;
      for (var j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[smallest]) {
          smallest = j;
        }
      }
      if (i !== smallest){
        swapValue(arr, i, smallest);
      }
    }
    return arr;
  }

  return {
    swapValue : swapValue,
    sortArray : sortArray,
  };
};


var array = [5, 9, 1, 10, 10, 4, 14, 7, 3, 4];
console.log(selectionSort().sortArray(array));