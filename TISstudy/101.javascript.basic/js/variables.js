// var num01 = 10;
// let num02 = 20;
// let num02 = 30;
// const num03 = 30;

// console.log(num01);
// console.log(num02);
// console.log(num03);

// let aa = 10;
// if (true) {
//   let bb = 20;
//   console.log("π ~ file: variables.js ~ line 12 ~ bb", bb);
// } else {
//   let cc = 30;
//   console.log("π ~ file: variables.js ~ line 15 ~ bb", bb);
// }
// console.log("π ~ file: variables.js ~ line 16 ~ bb", bb);
// let, const λ block scope
// var λ function scope λ₯Ό λ°λ₯Έλ€.

test();
function test() {
  var localnum = 20;
  if (true) {
    var functionNum = "λλ varλ‘ μ μΈλ functionNum μλλ€.";
    let blockNum = "λλ letμΌλ‘ μ μΈλ blockNum μλλ€.";
    console.log(blockNum);
  }
  console.log(functionNum);
}

console.log(Math.round(1.6));
// round λΌλν¨μλ Math λΌλ κ°μ²΄ λ΄μμλ§ μλνλ€.

let age = 29;
let name = "λ°μ§ν";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; //λ°°μ΄, array

console.log("λμ μ΄λ¦μ " + name + " μ΄κ³  λμ΄λ " + age);
console.log(`λμ μ΄λ¦μ ${name} μ΄κ³  λμ΄λ ${age}`);

console.log(colors[2]);
