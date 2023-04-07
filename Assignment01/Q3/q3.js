let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");
let num4 = prompt("Enter fourth number:");
let num5 = prompt("Enter fifth number:");

let max = num1;

if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}
if (num4 > max) {
    max = num4;
}
if (num5 > max) {
    max = num5;
}

console.log("The largest number is " + max);
