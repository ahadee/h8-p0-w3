function angkaPalindrome(num) {
    
    var hasil = '';

    for (var i=0; i<num; i++) {
        num++;

        hasil = String(num);

        var hasil1 = '';

        for (j=hasil.length-1; j>=0; j--) {
            hasil1 = hasil1 + hasil[j];
        }

        if (hasil === hasil1) {
            return hasil1;
        }
        
    }
    
  }

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001