import { Card , Avatar, Button } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/user";
import { logoutRequestAction } from "../reducers/user"
const UserProfile = () => {
    //const UserProfile = ({setIsLoggedIn})
    const dispatch = useDispatch();
    const { me, isLoggingOut} = useSelector(state => state.user)

    const onLogOut = useCallback(
        () => {
            // setIsLoggedIn(false);
            // dispatch(logoutAction); 사가 전
            dispatch(logoutRequestAction());
        },[]);
    return (
        <Card
            actions={[
                <div key = "twit">post</div>,
                <div key = "followings">팔로잉</div>,
                <div key = "followings">팔로워</div>
            ]}>
        <Card.Meta
            // avatar={<Avatar>{me.nickname}</Avatar>}
            // title ={me.nickname}
        />
        <Button onClick = {onLogOut} loading = {isLoggingOut}>로그아웃</Button>  
        </Card>
    )
}
export default UserProfile;
