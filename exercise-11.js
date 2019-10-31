function tentukanDeretAritmatika(arr) {
    var aritCount=0;
    for(i=0; i<arr.length; i++) {
        // console.log(arr[i+2]-arr[i+1] , arr[i+1] - arr[i] )
        if (arr[i+1]-arr[i] === arr[i+2]-arr[i+1]) {
            aritCount= aritCount +1;
        }
    }
    

    if (aritCount === arr.length-2) {
        return true
    }                 
    else {
        return false
    }
  }
  
//   // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false