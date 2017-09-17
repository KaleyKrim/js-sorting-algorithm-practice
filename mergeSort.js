function mergeSort(arr){
  if(arr.length < 2){
  return arr;
  }

  var middle = Math.floor(arr.length/2);

  var left = mergeSort(arr.slice(0, middle));
  var right = mergeSort(arr.slice(middle, arr.length));

  return sort(left, right);


  function sort(left, right){
    var sorted = [];
    while((left.length + right.length) > 0){
      if(!left[0]){
        sorted.push(right.shift());
      }else if(!right[0]){
        sorted.push(left.shift());
      }else if(left[0] < right[0]){
        sorted.push(left.shift());
      }else{
        sorted.push(right.shift());
      }
    }
    return sorted;
  }
}


var array1 = [9, 1, 78, 2, 3, 1, 250];

console.log(mergeSort(array1));