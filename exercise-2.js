var hasil = '';

function balikString(word) {
    //var hasil = '';

    for (var i=word.length-1; i>=0; i--) {
        hasil = hasil + word[i];
    }
    return hasil;
}

console.log(balikString('hello world!'));