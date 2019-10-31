function pasanganTerbesar(num) {
    var arr = num.toString().split('');
    var angka = [];
    
    for (var i = 0; i < arr.length - 1; i++) {
        angka[i] = Number(arr[i] + arr[i + 1]);
    }
    
    var angka_temp= angka[0];
    
    for (var j = 1; j < angka.length; j++){
        if(angka[j] > angka_temp){
        angka_temp = angka[j];
        };
    }
    return angka_temp;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99