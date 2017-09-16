var unsorted = [5, 6, 1, 8, 2, 4, 9, 3];

function bubbleSort(array){

  for (var j = 0; j < array.length - 1; j++){
    for (var i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]){
        console.log('do something');
        var temp = null;
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        console.log(array);
      }
   }
 }



  return array;
}

var sorted = bubbleSort(unsorted);
console.log(sorted);