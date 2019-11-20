/*
Creating myMap function.
What does map do:
1. iterate through all the elements of the array
2. perform action for all the elements while iterating.
3. Create a new array without mutating the original array.
*/
let array = [1, 2, 3, 4];
function myMap(array, callbackfunction) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    let b = callbackfunction(array[i]);
    result.push(b);
  }
  console.log(result);
}
function callbackfunction(num) {
  return num * num;
}
myMap(array, callbackfunction);
///Array - filter method
/*
Creating array filter function
1. It checks for a condn
2. If true , the array element is copied to result array otherwise rejected.
3. display result array.
*/
function myFilter(array, condnCallBackFunction) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let b = condnCallBackFunction(array[i]);
    if (b == true) {
      result.push(array[i]);
    }
  }
  console.log(result);
}
function condnCallBackFunction(num) {
  if (num % 2 == 1) {
    return true;
  }
}
myFilter(array, condnCallBackFunction);
/*
MyReduce Function ()
1. Array gets reduced to a single value.
2. takes 2 parameter, 1. callback function and a intial value for processing. This initial value gets updated on every item of array.
3. Results the single value based upon the condition.
 */
function MyReduce(array, callback, initialValue) {
  let result;
  for (let i = 0; i < array.length; i++) {
    result = callback(array[i], initialValue);
    initialValue = result;
  }
  console.log(result);
}
function callback(num, initialValue) {
  return num + initialValue;
}
MyReduce(array, callback, 0);
