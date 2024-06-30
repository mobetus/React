// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

animal.age = 2; // 추가하기
animal.name = '까망이'; //수정하기
delete animal.color; //삭제하기

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: '김헌수',
  // 아래를 메서드 선언이라고 함`
  sayHi() {
    console.log('안녕');
  },
};

person.sayHi();
person['sayHi']();
