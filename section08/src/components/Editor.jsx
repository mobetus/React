import { useRef, useState } from 'react';
import './Editor.css'; // 같은 폴더에 있는 Editor.css에서 import

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="Editor">
      {/* 클래스를 Editor로 한 부분은 뒤에 input, button등을 바로 쓰기 가능 */}
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown} // 사용자가 키를 눌렀을 때의 이벤트
        onChange={onChangeContent}
        placeholder="새로운 Todo.."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
