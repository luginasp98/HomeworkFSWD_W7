const calculator = require('./calc');

let x = 20, y = 50;

//Menghitng luas dan keliling persegi panjang
console.log("Luas persegi panjang dengan sisi x = 20cm dan y = 50 cm adalah "
			+ calculator.area_pp(x, y) + "cm²");

console.log("Panjang keliling persegi panjang dengan sisi x = 20cm dan y = 50 cm adalah "
			+ calculator.around_pp(x, y) + "cm");

//Menghitng luas dan keliling persegi
console.log("Luas persegi dengan sisi x = 20cm adalah "
+ calculator.area_sq(x) + "cm²");

console.log("Panjang keliling persegi dengan sisi x = 20cm adalah "
+ calculator.around_sq(x) + "cm");