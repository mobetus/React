import {useRef, useState, useContext } from "react";
import './Editor.css';
import { TodoDispatchContext} from "../App"

const Editor = () => {
  const ( onCreate) = useContext(TodoContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onsubmit():
    }
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
    }
  }
  return (
    <div className="Editor">
      <input placeholder="새로운 Todo..." />
      <button>추가</button>
    </div>
  );
};

export default Editor;
