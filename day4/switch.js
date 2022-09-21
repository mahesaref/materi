// switch(condition) {
//     case statement1:
//        break
//     case statement2:
//        break
//     case statement3:
//        break
//     default
//  }

// var buttonPushed = 2;
// switch(buttonPushed) {
//   case 1:   { console.log('matikan TV!'); break; }
//   case 2:   { console.log('turunkan volume TV!'); break; }
//   case 3:   { console.log('tingkatkan volume TV!'); break; }
//   case 4:   { console.log('matikan suara TV!'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }}

"Masukan Grade Nilai (A,B,C,D,E)"
var grade=console.log("G")
switch(grade){
   case 'A': bobot=4
   break
   case 'B': bobot=3
   break
   case 'C': bobot=2
   break
   case 'D': bobot=1
   break
   default :bobot=0
}
console.log("Bobot nilai = "+bobot)  