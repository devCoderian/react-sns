import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useCallback } from "react";
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';
const ButtonWrapper = styled.div`
    margin-top: 10px
`;
const FormWrapper = styled(Form)`
padding: 10px
`;
// const style = useMemo(()=>({marginTop: 10}), []); -> 스타일 컴포넌트 대신 사용 

const LoginForm = () => {

    //props 필요 없음 redux const LoginForm = ({setIsLoggedIn}) 
    const dispatch = useDispatch(); 
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // },[]);
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
  
   //컴포넌트의 함수로 넘겨주는 props는 useCallBack(함수캐싱) 꼭쓰기-> 최적화를 위해

    //submit이 완료되면 onFinish 가 호출됨 antd의 onFinish는 자동으로 e.preventDefault가 설정되어 있음
    const onSubmitForm = useCallback(() =>{
        // e.preventDefault antd에서 생략
        // component에 넣는 거니까 useCallback으로 감싸기
        console.log(id, password);
        // setIsLoggedIn(true); props 받을 때
        dispatch(loginAction({id,password}));
    }, [id, password]);

    return (
        <>
          <FormWrapper onFinish = {onSubmitForm}>
              <div>
                  <label htmlFor = "user-id">아이디</label>
                  <br />
                  <Input name = "userId" value = {id} onChange = {onChangeId} required />
              </div>
              <div>
                  <label htmlFor = "user-password">비밀번호</label>
                  <br />
                  <Input 
                    name = "user-password" 
                    type = "password"
                    value = {password} 
                    onChange = {onChangePassword} 
                    required 
                    />
              </div>
              <ButtonWrapper>
                {/* <div style = {style}> 이렇게하면 useMemo 사용*/}
                {/* <div style = {{marginTop : 10}}> 이렇게하면 {} === {} false로 달라진게 없는데 리렌더링 됨*/}
                  <Button type = "primary" htmlType = "submit" loading = {false}>로그인</Button>
                  <Link href = "/signup"><a><Button>회원가입</Button></a></Link>
              </ButtonWrapper>
          </FormWrapper>  
        </>
    )
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm

/*
리렌더링 ->컴포넌트 안 함수가 
처음부터 끝까지 다시 실행되는 것은 맞으나 전체가 다시 그려지는게 아니라(useCallback, memo 등등 제외- 배열값이 바꾸지 않는한)
리턴 부분에서 바뀐 부분만 다시 그리는 것
리턴 부분이 버츄얼 돔 -> 이전과 비교해서 달라진 부분만 다시 그려주는 것
*/