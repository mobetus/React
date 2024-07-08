import './Header.css'
function Header(props) { 
    // 2번) 매개변수로 props를 넣고
    return (
      <header className="Index_header">
        <p>{ props.item } <span className='item_price'>10,000원</span></p>
        <p className='item_detail'>{props.detail}</p>
        <p className='item_count'>{props.count}</p>
      </header>
    );
  }
  
  export default Header;
//자식 컴포넌트