import './Header.css'; // 같은 폴더에 있는 Header.css에서 import
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은📆</h3>
      <h1>{new Date().toDateString()}</h1>
      {/* js의 toDatestring은 Date 객체의 날짜 부분을 
      미국 영어권 형식의 문자열로 반환한다 */}
    </div>
  );
};

export default Header;
