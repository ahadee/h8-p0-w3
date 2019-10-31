// var kata = 'katak';

function palindrome(kata) {
    var hasil='';
    //var hasil1='';


    for (j=kata.length-1; j>=0; j--) {
        hasil= hasil + kata[j];
    }

    if (kata == hasil) {
        return true
    }
    else {
        return false
    }
    
  }

console.log(palindrome('katak')); //true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false