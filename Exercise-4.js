// Initialize variables
var tanggal = "1"; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = "12"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = "2000"; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var namaBulan;

// Switch Logic
if (tanggal < 1 || tanggal > 31){
    console.log("Format penulisan tanggal salah");
} else if (bulan < 1 || bulan > 12){
    console.log("Format penulisan bulan salah");
} else if (tahun < 1900 || tahun > 2200){
    console.log("Format penulisan tahun salah   ");
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