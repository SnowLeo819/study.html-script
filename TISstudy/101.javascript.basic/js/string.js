// 분할 시 배열로 반환된다.(띄어쓰기도 데이터로 포함한다)
const msg = "Hello Jabascript";
const splitMsg = msg.split("");
console.log(splitMsg);

// console.log(msg.charAt(0));

const tel = "010-4908-0944";
const splitTel = tel.split("-");
console.log(splitTel);

const joinTel = splitTel.join("");
const joinTel2 = splitTel.join();
console.log(joinTel);

console.log(joinTel2);
