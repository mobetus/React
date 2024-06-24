import { useState, useRef } from 'react';
// input의 값이 변경되었을 때를 의미하는 onchange
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
// 아래 input에 텍스트를 입력하게 되면 onChangeName 함수 실행됨
const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  //이름이라는 state의 초기값이 input 태그의 초기값으로 잘 설정이 되있음
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={'이름'} />
        {name}
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
        {birth}
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          {/* select 태그의 값이 바뀌면 onchange의 값이 변경이되서 
          country state에 바로바로 보관이 된다 */}
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
        <div>
          <textarea value={bio} onChange={onChangeBio}></textarea>
          {bio}
        </div>
      </div>
    </div>
  );
};
// const [input, setInput] = useState({
//   name: '',
//   birth: '',
//   country: '',
//   bio: '',
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
