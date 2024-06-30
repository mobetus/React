const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
        // 위처럼 화살표 함수로 이벤트 핸들러 함수를 표현하고
        // 해당 이벤트 핸들러에서 onclickbutton이라는 함수를
        // 호출해서 인수를 우리가 원하는 값으로 넘기도록 이렇게
        // 설정을 해주는 것이다
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
