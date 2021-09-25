//메뉴 기능 
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const SerachInput = styled(Input.Search)`
    vertical-align: middle;
`;
//gutter때문에 생기는 가로폭 스크롤 없애기
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {me}  =  useSelector((state) => state.user);
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item>
                    <Link href ="/"><a>YOUTODAY</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign:'middle'}} />
                    {/* <Input.Search enterButton style={{ verticalAlign:'middle'}} /> */}
                </Menu.Item>
                <Menu.Item>
                <Link href = "/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs ={24} md = {6}>
                    {/* 리덕스로 전역으로 바꿈 props 필요 x{isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn}/>: <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {me? <UserProfile/>: <LoginForm />}
                </Col>
                <Col xs ={24} md = {12}>
                    {children}
                </Col>
                <Col xs ={24} md = {6} >
                    <a href ="" target="_blank" rel="noreferrer noopner">Made by devCoderian</a>    
                </Col>
            </Row>
            {/* <LoginForm /> */}
        </div>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
// node타입 리액트의 타입 화면에 그릴수 있는 모든것이 노드
export default AppLayout