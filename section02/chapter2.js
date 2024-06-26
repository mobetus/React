//function returnFalse() {
//  console.log('Fasle 함수');
//  return undefined;
//}

//function returnTrue() {
//  console.log('True 함수');
//  return 10;
//}

//console.log(returnFalse() && returnTrue());

//단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: '김현수' });

// T || T => 연산의 결과값은 첫번째 Truthy한 값이 반환이 된다.
// T && T => 연산의 결과값은 두번재 Truthy한 값이 반환이 된다.
