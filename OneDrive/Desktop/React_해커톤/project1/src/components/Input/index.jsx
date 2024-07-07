import { useEffect, useState } from 'react';
import './style.css';

function Input() {
    const [pw, setPw] = useState('');
    const [isError, setIsError]=useState(true);
    const handleChangePw = (e) => setPw(e.target.value);

   

    useEffect(() => {
        if(pw.length>=8) setIsError(false);
        else setIsError(true);
    },[pw]);

    return (
        <form className='input_login'>
            <div className='input_label_box'>
                <p className='input_label'>ID:</p>
                <div className='id_box'>
                    <input type="text" 
                    placeholder='아이디를 입력해주세요' 
                    className='id_box_content' />
                </div>
                <p className='input_label'>PASSWORD</p>
                <div className='pw_box'>
                    <input
                     type="password"
                     onChange={handleChangePw}
                     placeholder='비밀번호를 입력해주세요'
                     className='pw_box_content'
                     id="password"
                      />
                </div>
                <p className='pw_box_error'>{isError && '8글자 이상 입력해주세요'}</p>
            </div>
            <button className='login_box' error={isError}>로그인</button>
            <div className='sign_up'>아이디가 없으신가요? <a href="https://nid.naver.com/user2/join/agree?lang=ko_KR&realname=">회원가입</a></div>
        </form>
    )
}
export default Input;