function groupAnimals(animals) {
    var arr = [];
    var hasilSort = [];



    for (var i=0; i<animals.length; i++) {
        arr.push(animals[i])
    }

    arr.sort();

    // for (var j=0; j<arr.length; j++) {
    //     if (animals[i][0] == arr[j][0]) {
    //         hasilSort = 
    //     }
    // }

    return arr;


  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]