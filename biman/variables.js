var num01 = 10;
var num01 = 50;
let num02 = 20;
//console.log(num02);

let aa = 10;
if (true) {
  let bb = 20;
} else {
  let cc = 30;
  console.log("๐ ~ file: variables.js ~ line 7 ~ aa", bb);
}
//console.log("๐ ~ file: variables.js ~ line 9 ~ bb", bb);
//let, const ๋ block scope
//var ๋ function scope๋ฅผ ๋ฐ๋ฅธ๋ค.

var num = 20; // ์ ์ญ ๋ณ์
function test() {
  var localNum = 10;
  if (true) {
    var functionNum = "๋๋ var๋ก ์ ์ธ๋ functionNum์๋๋ค.";
    let blockNum = "๋๋ let์ผ๋ก ์ ์ธ๋ blockNum์๋๋ค.";
  }
  console.log("๐ ~ file: variables.js ~ line 22 ~ test ~ blockNum", functionNum);
}
test(); // ํจ์์ ํธ์ถ....
console.log(Math.round(1.6));

let age = 20;
let name = "์ฅ์ฑํธ";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; // ๋ฐฐ์ด, array
let uriban = ["์ด์์ฑ", "์ต์ด์ง", "์ฅํ"];
console.log(uriban[0]);
console.log(uriban[1]);
uriban.push("์ด์คํ");
console.log(uriban[3]);

console.log(`๋์ ์ด๋ฆ์  ${name} ์ด๊ณ  ๋์ ๋์ด๋ ${age} `);
