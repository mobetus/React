const Controller = () => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButoon(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButoon(-10);
        }}
      >
        -10
      </button> 
      <button onClick={() => {
          onClickButoon(-100);
        }}>-100</button>
      <button onClick={() => {
          onClickButoon(100);
        }}>+100</button>
      <button onClick={() => {
          onClickButoon(10);
        }}>+10</button>
      <button onClick={() => {
          onClickButoon(1);
        }}>+1</button>
    </div>
  );
};

export default Controller;
