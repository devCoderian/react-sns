
import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutRequestAction, LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    //const UserProfile = ({setIsLoggedIn})
    const dispatch = useDispatch();
    const { me, logoutLoading} = useSelector(state => state.user)
    console.log(me)
    const onLogOut = useCallback(
        () => {
            // setIsLoggedIn(false);
            // dispatch(logoutAction); 사가 전
            dispatch(logoutRequestAction());
        },[]);
    return (
        <Card
            actions={[
                <div key = "twit">post<br />{me.Posts.length}</div>,
                <div key = "followings">팔로잉<br />{me.Followings.length}</div>,
                <div key = "followings">팔로워<br />{me.Followers.length}</div>
            ]}>
        <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title ={me.nickname}
        />
        <Button onClick = {onLogOut} loading = {logoutLoading}>로그아웃</Button>  
        </Card>
    )
}
export default UserProfile;
