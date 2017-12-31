//Used by Firefox and Safari in their Array.prototype.sort() implementation. Good for sorting linked lists.

//Recursively split the array into smaller arrays until it's only arrays containing a single item. Then compare them one by one, and concatenate them in the right order.

//O(n log n) for best and worst case, so it's better than quicksort in worst case.


function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  //recursively slice the array down the middle into a left and right side, until the length of each array is 1.

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

  //so, while we're still iterating thru the arrays, and haven't reached the end yet.
  while (indexLeft < left.length && indexRight < right.length) {
    //if the value in the left array is smaller than the one in the right array, push that left value into results, and increment the left index, so we can check the next value next time.
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      //otherwise, push the right value into results, and increment right index.
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  //concat the sorted results array with the rest of the left array & right array.
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

var array1 = [9, 1, 78, 2, 3, 1, 250];