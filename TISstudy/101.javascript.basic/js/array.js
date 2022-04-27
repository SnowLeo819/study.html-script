// const fruits = ["apple", "banana", "orange", "kiwi"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// fruits.push("plum");
// console.log(fruits);

// 데이터의 유형
// let num = 10; // 숫자
// let isOk = true; // 참/거짓
// let myName = "박지형"; //문자

// /* primitive(기본:값,, 복사해서 새 박스에 담기)
//   vs reference(참조:위치만 알려주기) */

// let newNum = num;
// num = 20;
// console.log(num, "===", newNum);

const colors = ["red", "green", "blue"]; // reference type array,object
let newColors = colors;
// colors.push("yellow");
// console.log(newColors, "===", colors);

colors.push("yellow"); // 기존 배열 맨 끝에 추가
colors.unshift("gray"); // 기존 배열 맨 앞에 추가

const lastItem = colors.pop();
console.log(lastItem);

console.log(colors);
// push("넣을 데이터"), pop() 맨 뒤에 추가, 맨 뒤 값 가져오기
// unshift("넣을 데이터"), shift() 맨 뒤에 추가, 맨 뒤 값 가져오기

const selectItem = colors.splice(2, 2); // 중간 내용 가져오기, 대상은 기존 배열에서 삭제됨 ※ 배열값 출력
console.log(selectItem);
console.log(colors);
