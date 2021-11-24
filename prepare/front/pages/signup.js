import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button} from 'antd';
import React, { useCallback, useState, useEffect } from "react";
import Router from 'next/router';
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {

    const dispacth = useDispatch();
    const { signupLoading, signUpDone, signUpError,me} = useSelector((state) => state.user);
    
    useEffect(() => {
        if(me&&me.id){
            // Router.push('/')
            Router.replace('/');
            //홧릴히 나가려면 Router.replace('/');
            //기록레서 사라짐
        }
    }, [me&&me.id]);

    useEffect(() => {
        if(signUpDone){
            // Router.push('/')
            Router.replace('/');
            //홧릴히 나가려면 Router.replace('/');
            //기록레서 사라짐
        }
    }, [signUpDone]);

    useEffect(() => {
        if(signUpError){
            alert(signUpError);
        }
    }, [signUpError])


    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordErr(e.target.value !== password);
        },[password])

    const [term, setTerm] = useState('');
    const [termErr, setTermErr] = useState(false);
    const onChangeTerm = useCallback(
        (e) => {
            setTerm(e.target.checked);
            setTermErr(false);
        },[password])

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordErr(true);
        }
        if(!term){
            return setTermErr(true);
        }
        console.log(email, nickname, password);
        dispacth({
            type: SIGN_UP_REQUEST, 
            data : {email, nickname, password }
        })
    },[email, password, passwordCheck, term]);

    return(
        <>
        <AppLayout>
            <Head>
                <title>회원가입 | sns</title>
            </Head>
            <Form onFinish = {onSubmit}>
                <div>
                    <label htmlFor ="user-email">이메일</label>
                    <br />
                    <Input name = "user-email" type = "email" value = {email} required onChange = {onChangeEmail} />
                </div>
                <div>
                    <label htmlFor ="user-nick">닉네임</label>
                    <br />
                    <Input name = "user-nick" value = {nickname} required onChange = {onChangeNickname} />
                </div>
                <div>
                    <label htmlFor ="user-password">비밀번호</label>
                    <br />
                    <Input name = "user-password" type="password" value = {password} required onChange = {onChangePassword} />
                </div>
                <div>
                    <label htmlFor ="user-password-check">비밀번호 체크</label>
                    <br />
                    <Input 
                    name = "user-password-check" 
                    type="password" 
                    value = {passwordCheck}
                    required 
                    onChange = {onChangePasswordCheck} />
                    {passwordErr && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name = "user-term" checked={term} onChange={onChangeTerm}>약관동의</Checkbox>
                    {termErr && <ErrorMessage> 약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style = {{marginTop:18}}>
                    <Button type = "primary" htmlType="submit" loading={signupLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
        </>
    )
}

export default Signup;