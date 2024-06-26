import { useState, useRef } from 'react';
// input의 값이 변경되었을 때를 의미하는 onchange
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
// 아래 input에 텍스트를 입력하게 되면 onChangeName 함수 실행됨
//이름이라는 state의 초기값이 input 태그의 초기값으로 잘 설정이 되있음
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  const onSubmit = () => {
    if (input.name === '') {
      //이름을 입력하는 DOM 요소 포커스
    }
  };

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={'이름'}
        />
        {input.name}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          {/* select 태그의 값이 바뀌면 onchange의 값이 변경이되서 
          country state에 바로바로 보관이 된다 */}
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>

        <div>
          <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        </div>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

// const countRef = useRef(0);
// const inputRef = useRef();

// const onChange = (e) => {
//   // countRef.current++;
//   count++;
//   console.log(count);
//   setInput({
//     ...input,
//     [e.target.name]: e.target.value,
//   });
// };

// const onSubmit = () => {
//   if (input.name === '') {
//     // 이름을 입력하는 DOM 요소 포커스
//     inputRef.current.focus();
//   }
// };

//     <div>
//       <textarea name="bio" value={input.bio} onChange={onChange} />
//     </div>

//     <button onClick={onSubmit}>제출</button>
//   </div>
//   );
// };

export default Register;
