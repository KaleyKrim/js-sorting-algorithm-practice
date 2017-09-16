// var mergeSort = function(){

  var leftList = [];
  var rightList = [];




  function splitArray(arr){

  }


  function sortArray(left, right){
    debugger;
    var temp = [];
    for (var i = 0; i < left.length; i++) {
      var savei = left[i];
      var tempValue = left.splice(i, 1);
      temp.push(tempValue);
      if (right[i] < savei){
        tempValue = right.splice(i, 1);
        temp.unshift(tempValue);
        var result = [].concat.apply([], temp);
        temp = result;
      }else{
        tempValue = right.splice(i, 1);
        temp.push(tempValue);
        var result = [].concat.apply([], temp);
        temp = result;
        }
      }
    return temp;
  }


var array1 = [10, 3];
var array2 = [4, 5];

console.log(sortArray(array1, array2));


//   return {

//   };
// }



// //to save you time typing it all
// console.log("merge that shit!");

// //merge sort explained

// var array = /*left index*/[10,5,2,1,9,6,4,20];/*right index*/
// //mid  = 0 index plus 7 index divide by 2 = 3.5 floor that = 3 - therefore 3 is mid index
// var leftIndex = 10;
// var rightIndex = 20;
// var midIndex = 1;

// // so in left part i have:
// var leftPart = [10,5,2,1]; var rightPart = [9,6,4,20];
// //so we look at the mids again of each part
// var leftOfLeftPart = [10,5]; var rightOfLeftPart = [2,1];
// //now we divide each part again:
// [10]/*left*/[5]/*right*/
// //so now we sort these two:
// if (10 > 5){
//   //swap elements
// }
// returns [5,10];
// //same steps with the right part divided:
// [2]/*left*/[1]/*right*/
// //so now we sort these two:
// if (2 > 1){
//   //swap elements
// }
// returns [1,2];

// //then we re-join the two parts into one part:
// [5,10] [1,2];
// //so 1st index compared with 1st index
// //5 with 1 = take 1
// //5 with 2 = take 2
// //5 with 10 = take 5
// //10 only remaining = take 10
// [1,2,5,10]



// [1,2,5,10];