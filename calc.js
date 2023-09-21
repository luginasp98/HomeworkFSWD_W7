//Rumus luas persegi panjang
exports.area_pp = function (x, y) {
    return x * y;
};

//Rumus luas persegi
exports.area_sq = function (x) {
    return x ** 2;
};

//Rumus keliling persegi panjang
exports.around_pp = function (x, y) {
    return (x * 2) + (y * 2);
};

//Rumus keliling persegi
exports.around_sq = function (x) {
    return x * 4;
};