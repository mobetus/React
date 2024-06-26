// 함수선언

function greeting() {
  console.log('안녕하세요!');
}

console.log('호출 전');
greeting(); //괄호 없이 하면 아무것도 호출되지 않음
console.log('호출 후');

//함수
function getArea(width, height) {
  //width, height은 매개변수
  let area = width * height;

  console.log(area);
}

getArea(10, 20); //10, 20은 인수
getArea(30, 20);
getArea(120, 200);

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻 = 선언문을 호출문보다 아래에 두어도
//내부적으로 알아서 끌어올려져 호이스팅 되기 때문에 아무런 문제 없음
//함수
function getArea(width, height) {
  function another() {
    //중첩 함수=함수 내부에 또 다른 함수 생성
    console.log('another');
  }

  another();
  let area = width * height;

  return area;
  // console.log('hello'); 이 콘솔은 넣어도 실제 수행되지는 않음
}
