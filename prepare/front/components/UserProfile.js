import { Card , Avatar, Button } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/user";
import { logoutRequestAction } from "../reducers/user"
const UserProfile = () => {
    //const UserProfile = ({setIsLoggedIn})
    const dispatch = useDispatch();
    const { me, logoutLoading} = useSelector(state => state.user)

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
                <div key = "followings">팔로잉{me.Followings.length}</div>,
                <div key = "followings">팔로워{me.Followers.length}</div>
            ]}>
        <Card.Meta
            avatar={<Avatar>{me.nickname}</Avatar>}
            title ={me.nickname}
        />
        <Button onClick = {onLogOut} loading = {logoutLoading}>로그아웃</Button>  
        </Card>
    )
}
export default UserProfile;
