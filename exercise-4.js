var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2 (arr) {
    arr.splice(1,1,'Roman Alamsyah Elsharawy');
    
    arr.splice(2,1,'Provinsi Bandar Lampung');
    
    arr.splice(4,0,'Pria');

    arr.splice(5,1,'SMA Internasional Metro');
    
    console.log(arr);

    var hasil = arr[3].split("/");

    switch (hasil[1]) 
    {
        case '01':
            console.log('Januari');
            break;
        
        case '02':
            console.log('Februari');
            break;

        case '03':
            console.log('Maret');
            break;

        case '04':
            console.log('April');
            break;

        case '05':
            console.log('Mei');
            break;

        case '06':
            console.log('Juni');
            break;

        case '07':
            console.log('Juli');
            break;

        case '08':
            console.log('Agustus');
            break;

        case '09':
            console.log('September');
            break;

        case '10':
            console.log('Oktober');
            break;

        case '11':
            console.log('November');
            break;

        case '12':
            console.log('Desember');
            break;
    }

    var hasilJoin = hasil.join("-")

    hasilSort = hasil.sort(function(a, b){return b-a})

    console.log(hasilSort);


    console.log(hasilJoin);

    hasilSlice = arr[1].slice(0,14);

    console.log(hasilSlice);

}


dataHandling2(input);