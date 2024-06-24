import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
//Header와 App 컴포넌트 잘 인식이 되는걸 확인가능함

// function Header() {
//   //or const Header = () => {}도 가능
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }
function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={'카페'} />
      <Button text={'블로그'}>
        {/* App 컴퍼넌트에서 Button 컴퍼넌트 3개를 렌더링한 결과 */}
        <Header />
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
