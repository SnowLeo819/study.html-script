console.log("hello js");

let i = 0;
console.log(i);
i = i + 1;
console.log(i);
i += 1;
console.log(i);
i++;
console.log(i);

/*
let num = ++i (num 은 1)
let num = i++ (num 은 0)
*/

// for 문 길이를 알 때
// for (let i = 0; i < 100; i++) {
//   console.log("hello js");
// }
// console.log("end");

//statement
let sum = 0;
for (let i = 1; i <= 100; i += 2) {
  sum = sum + i;
}
console.log(sum);

// while 문 길이를 모를 때
// while
