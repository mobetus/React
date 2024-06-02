// 1. 함수 표현식 ->호이스팅 안됨
function funcA() {
  console.log('funkA');
}

let varA = funcA;
varA();

let varB = function () {
  //익명함수
  console.log('funcB');
};

varB();
//funcB(); 값으로서 함수가 생성된 것이기 때문에 오류 발생

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

let varD = () => {
  return 1;
};

console.log(varD());
