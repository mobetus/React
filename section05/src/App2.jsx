// import { useState } from 'react';
import './App.css';
// import Bulb from './components/Bulb';
// import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';

function App2() {
  return (
    <>
      <Register />
      <HookExam />
      {/* 리턴문에 state를 넣고 자식 컴포넌트로 counter 배치 */}
    </>
  );
}

export default App2;
