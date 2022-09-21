// initalization;
// while (condition){
//     //loop body
//     increment;
// }

//example 1
// for(var angka = 1; angka <= 10; angka+2) 
// var angka = 1;
// while(angka < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
//   console.log('Iterasi ke-' + angka); // Menampilkan nilai flag pada iterasi tertentu
//   angka++; // Mengubah nilai flag dengan menambahkan 1 
// }

//example 2
var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}
 
// console.log(jumlah);