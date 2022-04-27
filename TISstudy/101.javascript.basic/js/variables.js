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
//   console.log("🚀 ~ file: variables.js ~ line 12 ~ bb", bb);
// } else {
//   let cc = 30;
//   console.log("🚀 ~ file: variables.js ~ line 15 ~ bb", bb);
// }
// console.log("🚀 ~ file: variables.js ~ line 16 ~ bb", bb);
// let, const 는 block scope
// var 는 function scope 를 따른다.

test();
function test() {
  var localnum = 20;
  if (true) {
    var functionNum = "나는 var로 선언된 functionNum 입니다.";
    let blockNum = "나는 let으로 선언된 blockNum 입니다.";
    console.log(blockNum);
  }
  console.log(functionNum);
}

console.log(Math.round(1.6));
// round 라는함수는 Math 라는 객체 내에서만 작동한다.

let age = 29;
let name = "박지형";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; //배열, array

console.log("나의 이름은 " + name + " 이고 나이는 " + age);
console.log(`나의 이름은 ${name} 이고 나이는 ${age}`);

console.log(colors[2]);
