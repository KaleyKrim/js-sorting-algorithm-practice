//Repeatedly iterates through the array, compares each pair of adjacent items and swaps them if they're in the wrong order, until they're all in the right order.
//It's simple but slow. Avoid for large lists.
//Possibly useful if the list is mostly sorted, but has some barely out-of-order elements.

//Time complexity: ((best & worst case))
//O(n^2) [[n is number of items to be sorted]]

function bubbleSort(arr){
  for (var i = 0; i < arr.length - 1; i++){
    for(var j = 0; j < arr.length - 1; j++){
      if (arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9,7,5,4,3,1]));