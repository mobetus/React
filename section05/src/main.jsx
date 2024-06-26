import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import App2 from './App2.jsx';
import './index.css';

// const Hello = () => {
//   return <div>hello</div>;
// };
// 관례상 App이라는 이름으로 루트 컴포넌트로 설정하기 때문에

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
