
let num = 58;
let roman = "";

while (num >= 50) {
    roman = roman + "L";
    num = num - 50;
}

while (num >= 10) {
    roman = roman + "X";
    num = num - 10;
}

while (num >= 5) {
    roman = roman + "V";
    num = num - 5;
}

while (num >= 1) {
    roman = roman + "I";
    num = num - 1;
}

console.log("Roman Numeral:", roman);
