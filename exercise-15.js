function groupAnimals(animals) {
    var animalsBaru = [];

    for (var i=0; i<animals.length; i++) {
        var hasil = [];
        var perKarakter = animals[i][0];
        var perIndex = animals[i];
        //var animalsBaru = [];

        for (var j=animals.length-1; j>i; j--) {
            if (perKarakter == animals[j][0]) {
                perIndex = perIndex + ', ' + animals[j]
                animals.splice(j,1);
            }
        }

        hasil.push(perIndex)

        animalsBaru.push(hasil)
        // console.log(animalsBaru);

    }
     
    //animalsBaru.sort();
    var temp= [];
    for (k=0; k<animalsBaru.length; k++) {
        if (animalsBaru[k] > animalsBaru[k + 1]) {
            temp = animalsBaru[k]
            animalsBaru[k] = animalsBaru[k + 1]
            animalsBaru[k + 1] = temp
        }
    }

    return animalsBaru;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]