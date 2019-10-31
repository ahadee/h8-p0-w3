
function hitungJumlahKata(kalimat) {
    var hasil = 1;
    // var hasil = kalimat.split(' ');

    // return hasil.length; 

    for(i=0; i<kalimat.length; i++ ) {
        if (kalimat[i] == ' ') {
            hasil += 1;
        }
    }
        return hasil;
  }


console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5  