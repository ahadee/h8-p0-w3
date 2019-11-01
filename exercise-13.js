function targetTerdekat(arr) {
    var tempO = 0;
    var tempX = [];
    var hasil = 0 ;
    var hasilKecil= Infinity;

    for (i=0; i<arr.length; i++) {
        if (arr[i] == 'o') {
            tempO = i
        }

        else if (arr[i] == 'x') {
            tempX.push(i)
        }
    }
    // console.log(tempX)
    for (j=0; j<tempX.length; j++) {
            hasil = tempX[j] - tempO;
            // console.log(hasil, " << ini hasil di loop")
            if (hasil < 0 ) {
                hasil = hasil * -1
            }
            // console.log(hasil, " << setelah kali minus")
            if (hasilKecil > hasil) {
                hasilKecil = hasil
            }
        // console.log(hasilKecil)

    }
    // console.log(hasilKecil)
    if (hasilKecil === Infinity){
        hasilKecil = 0;
    }
    return hasilKecil;
    // if (hasil[j] < hasil[j+1]) {
    //     return hasil
    // }
    console.log(tempO, " << ini o")
    console.log(tempX, " << ini x")
    console.log(hasil)
    //return tempX;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2