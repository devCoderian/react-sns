//메뉴 기능 
import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link'
const AppLayout = ({children}) => {
    return (
        <div>
            <Link href ="/"><a>노드버드</a></Link>
            <Link href = "/profile"><a>프로필</a></Link>
            <Link href = "/signup"><a>회원가입</a></Link>
            {children}
        </div>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
// node타입 리액트의 타입 화면에 그릴수 있는 모든것이 노드
export default AppLayout
