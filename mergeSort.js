//Used by Firefox and Safari in their Array.prototype.sort() implementation. Good for sorting linked lists.

//Recursively split the array into smaller arrays until it's only arrays containing a single item. Then compare them one by one, and concatenate them in the right order.

//O(n log n) for best and worst case, so it's better than quicksort in worst case.


function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

var array1 = [9, 1, 78, 2, 3, 1, 250];