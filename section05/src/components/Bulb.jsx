import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');
  console.log(light);
  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {/* 또는 전구 끄기/켜기 */}
        {/* 삼환연산자로 아래처럼 표현 가능 */}
        {light === 'ON' ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default Bulb;
