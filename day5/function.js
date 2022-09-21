//function without return
// function tampilkan() {
//     console.log("halo!");
//   }
  
//   tampilkan();

// console.log('halo!');

//function with return
function munculkanAngkaDua() {
    return 2
  }
   
  var tampung = munculkanAngkaDua();
  console.log(tampung)    

// // //function with parameter
// function kalikanDua(angka) {
//     return angka * 2
//   }
   
//   // var tampung = kalikanDua(2);
//   // console.log(tampung) 

//   console.log(kalikanDua(2));

// //  //Function with more than one parameter 
 function tampilkanAngka(angkaPertama, angkaKedua, angkaKetiga) {
    return angkaPertama + angkaKedua + angkaKetiga
  }
   
  console.log(tampilkanAngka(5,3,1))

//Function - Initialize parameters with default values 
// function tampilkanAngka(angka = 1) {
//     return angka
//   }
   
//   console.log(tampilkanAngka(5))         // 5, sesuai dengan nilai parameter yang dikirim
//   console.log(tampilkanAngka())          // 1, karena default dari parameter adalah 1

// //Function with conditional
// function tampilAngka(angkaPertama, angkaKedua){

//     var hasil = angkaPertama + angkaKedua
    
//     if(hasil > 10){
//         return "hasil lebih besar dari 10"
//       } else if(hasil > 0 && hasil < 10 ){
//         return "hasil lebih kecil dari 10"
//       } else if(hasil === 0  ){
//         return "hasil 0"
//       }else {
//         return "Tidak ada nilai dari parameter"
//       }
//     }
// console.log(tampilAngka(-2,-2))

// //Function with Looping
// function looping(iteration){
//     for(var i = 1; i < iteration; i++){
//        console.log(i)
//     }
//   }
// looping(3)
