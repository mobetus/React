const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    // syntheticBaseEvent라는 개체가 바로 매개변수 e에 저장된 이벤트 객체
    //합성이벤트(모든 웹브라우저의 이벤트 객체를 하나로 통일한 형태)
    console.log(text);
  };
  //onClickButton은 이벤트 핸들러 함수
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
