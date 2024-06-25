import './Main.css';
// Props -> 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 리액트 기능
// State -> 현재 가지고 있는 상태나 모양을 정의, 변화할 수 있는 동적인 값  
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 랜더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다
// 리렌더링은 1.자신이 가진 state의 값이 변경이 되었을 때 2.자신이 제공받는 props의 값이 변경이 되었을 때 3.
// 3. 부모 컴포넌트가 리렌더링이 되면 자식 컴포넌트도 리렌더링된다
const Main = () => {
  // const number = 9;
  // const obj = { a: 1 };
  const user = {
    name: '김현수',
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        // style={{
        //   //카멜 표기법(camel case)
        //   backgroundColor: 'red',
        //   borderBottom: '5px solid blue',
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }
  // return (
  //   빈 태그로 최상위 태그를 해도 되지만 흩뿌려진다
  //   main 태그로 하면 모든 요소들이 묶여있는 것을 확인 가능함
  //   <>
  //     {/* {/* <h1>main</h1> */}
  //     <h2>{number % 2 === 0 ? '짝수' : '홀수'}</h2>
  //     {10}
  //     {number}
  //     {[1, 2, 3]}
  //     {true}
  //     {undefined}
  //     {null}
  //     {obj.a} */}
  //     {/* 삼환연산자 사용방법 */}
  //     {/* {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>} */}
  //   </>
  // );
};

export default Main;
