impurt { useState} from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onchange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;