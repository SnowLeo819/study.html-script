const lotto = [];
for (let i = 1; i < 46; i++) {
  lotto.push(i);
}

// 객체 - 추상적 개념.
// Math.random(); // static 객체, 메서드가 미리 올라와 있음(상주)
// const now = new Date() // 생성자 함수, 생성하지 않으면 메모리 X
// const random = Math.random() * 45;
// console.log(random);

// console.log(Math.round(random));
// console.log(Math.floor(random));
// console.log(Math.ceil(random));

// console.log(Math.ceil(random));

// console.log(random);
// console.log(lotto);

let gza = [];
for (let i = 0; i < 6; i++) {
  const random = Math.ceil(Math.random() * lotto.length - 1);
  gza.push(lotto.splice(random, 1)[0]);
}
console.log(gza);
