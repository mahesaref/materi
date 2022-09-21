const kecepatan =0;

if (kecepatan > 1 && kecepatan < 9){
    console.log("Anda sedang berjalan");
}
else if (kecepatan > 9 && kecepatan < 45){
    console.log("Anda sedang berlari");
}
else if (kecepatan == 0) {
    console.log("Anda tidak sedang lari atau berjalan, kemungkinan anda rebahan");
} else {
    console.log("kemungkinan anda sedang berkendara");
}

console.log("==============================================");

const kecepatan1 = 0;

switch (kecepatan1 > 1 && kecepatan1 < 9){
    case true:
        console.log("Anda sedang Berjalan");
        break
    case false:
        console.log("Entah anda sedang melakukan apa");
        break
}