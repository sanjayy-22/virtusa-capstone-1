let n: number = 12345;
let sum: number = 0;

while (n > 0) {
    let digit: number = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}

console.log("Sum of digits:", sum);