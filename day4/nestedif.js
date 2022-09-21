// if (condition1){
//     statement1
//     if (condition2){
//        statement2
//     }
//  }else{
//     statement1
//  }

//  var minimarketStatus = "open"
//  var telur = "ada"

//  if ( minimarketStatus == "open" ) {
//      console.log("saya akan belanja")
//      if(telur=="habis") {
//         console.log("Telur tidak tersedia dan saya pulang");
//      } else{
//         console.log("saya akan membeli telur");
//      }
//  } else {
//      console.log("minimarket tutup, saya pulang lagi")
//  }

var s ="";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);

[i,j]
[0,]