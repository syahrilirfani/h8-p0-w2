/**
  1. Melakukan Looping Menggunakan While

  Problem
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
  Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju 
  dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/

var counter = 0;
var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "

console.log("LOOPING PERTAMA");
while (counter <= 20){
  console.log(counter + separator + coding1);
  counter+=2;
}
console.log("LOOPING KEDUA");
while (counter >=0){
  console.log(counter + separator + coding2);
  counter-=2;
}

/**
  2. Melakukan Looping Menggunakan For
  
  Problem
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
  Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju 
  dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

  Hints
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement
*/

var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "
console.log("LOOPING PERTAMA");

for(counter=1; counter<=20; counter++){
  console.log(counter + separator + coding1);
}
console.log("LOOPING KEDUA");
for(counter=20; counter>0; counter--){
  console.log(counter + separator + coding2);
}

/**
  3. Angka Ganjil dan Genap

  Hint: kamu akan menggunakan kondisional juga di kasus ini.

  Problem
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
  Di dalam perulangan, periksa setiap angka counter:

  Apabila angka counter adalah angka genap, tuliskan GENAP
  Apabila angka counter adalah angka ganjil, tuliskan GANJIL
  Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
  Pada 3 perulangan baru ini periksa setiap angka counter:

  Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
  Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
  "3 kelipatan 3" dan seterusnya.
*/

for (counter=1; counter<=100; counter++){
  if (counter % 2 === 0){
    console.log('GENAP');
  } else{
    console.log('GANJIL');
  }
}

for (counter=1; counter<=100; counter+=2){
  if (counter % 3 === 0){
    console.log(counter + " kelipatan 3");
  }
}

for (counter=1; counter<=100; counter+=5){
  if (counter % 6 === 0){
    console.log(counter +" kelipatan 6");
  }
}

for (counter=1; counter<=100; counter+=9){
  if (counter % 10 === 0){
    console.log(counter + " kelipatan 10");
  }
}