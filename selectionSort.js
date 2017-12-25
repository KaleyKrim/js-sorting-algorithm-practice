//Divides list into two parts, a LEFT sublist of sorted items, and RIGHT sublist of unsorted items. Left sublist starts empty, with right sublist containing the whole list. Finds the smallest element in the right sublist, swaps it with the leftmost element in the unsorted right sublist, and moves the boundary of the sublist one element to the right.

//Time complexity: O(n^2)
//Inefficient for large lists. Performs worse than insertion sort.


function swap(arr, i, j){
  let savedValue = arr[i];
  arr[i] = arr[j];
  arr[j] = savedValue;
}


function selectionSort(arr){

  for(let i = 0; i < arr.length; i++){
    //the leftmost element of the right sublist is set to i
    let min = i;
    //here we're iterating through the unsorted right list, which begins at the value to the right of i, i+1
    for(let j = i + 1; j < arr.length; j++){
      //if any of the values in the right sublist are smaller than the leftmost element, we set the minimum index to j
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    //if the min value is something other than i, meaning there was a value later on in the list that was smaller, we'll swap them
    if(i !== min){
      swap(arr, i, min);
    }
  }
  return arr;
}

let array = [5, 9, 1, 10, 10, 4, 14, 7, 3, 4];
console.log(selectionSort(array));