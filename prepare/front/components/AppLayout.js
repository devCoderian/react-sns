//메뉴 기능 
import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item>
                    <Link href ="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign:'middle'}} />
                </Menu.Item>
                <Menu.Item>
                <Link href = "/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs ={24} md = {6}>
                    왼쪽 메뉴
                </Col>
                <Col xs ={24} md = {12}>
                    {children}
                </Col>
                <Col xs ={24} md = {6} >
                    <a href ="" target="_blank" rel="noreferrer noopner">Made by devCoderian</a>    
                </Col>
            </Row>
        </div>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
// node타입 리액트의 타입 화면에 그릴수 있는 모든것이 노드
export default AppLayout
