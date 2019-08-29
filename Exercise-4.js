/**
    Directions
    Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
    Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
    Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

    Gunakan switch case untuk kasus ini!

    Contoh:

    var hari = 21; var bulan = 1; var tahun = 1945;

    Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
 */

var tanggal = "1"; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = "5"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = "1945"; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var namaBulan;

if (tanggal < 1 || tanggal > 31){
    console.log("Format penulisan tanggal salah");
} else if (bulan < 1 || bulan > 12){
    console.log("Format penulisan bulan salah!");
} else if (tahun < 1900 || tahun > 2200){
    console.log("Format penulisan tahun salah!");
}else{
    switch (bulan) {
        case "1":
            namaBulan = "Januari";
            break;
        case "2":
            namaBulan = "Februari";
            break;
        case "3":
            namaBulan = "Maret";
            break;
        case "4":
            namaBulan = "April";
            break;
        case "5":
            namaBulan = "Mei";
            break;
        case "6":
            namaBulan = "Juni";
            break;
        case "7":
            namaBulan = "Juli";
            break;
        case "8":
            namaBulan = "Agustus";
            break;
        case "9":
            namaBulan = "September";
            break;
        case "10":
            namaBulan = "Oktober";
            break;
        case "11":
            namaBulan = "November";
            break;
        case "12":
            namaBulan = "Desember";
            break;
    }
    
    if (namaBulan) {
        console.log(tanggal + " " + namaBulan + " " + tahun);
    }
}