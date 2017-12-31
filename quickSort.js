//Divide an array into two sub-arrays: smaller, and larger.
//Picks a pivot, orders elements so lesser come before the pivot, and greater go after the pivot. Then recursively do the same for the lesser sub-array and the greater sub-array. Repeatrepeatrepeat.

//I used arr[0] as the pivot, which is BAD news for already sorted arrays. You really should choose a random index for the pivot, or median, instead.

//Much more efficient than bubble & selection. Can be 2~3 times faster than merge sort & heapsort.

//Average time complexity: O(n log(n))
//Worse case: O(n^2), but this is rare.

function quickSort(arr){

  let smaller = [];
  let larger = [];
  let pivot = [arr[0]];

  if (arr.length === 0){
    return arr;
  }

  //we start at arr[1] because arr[0] is the pivot.
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot){
      smaller.push(arr[i]);
    }else{
      larger.push(arr[i]);
    }
  }

  return quickSort(smaller).concat(pivot.concat(quickSort(larger)));
};

let array = [5, 9, 1, 10, 10, 4, 14, 7, 3, 4];

console.log(quickSort(array));