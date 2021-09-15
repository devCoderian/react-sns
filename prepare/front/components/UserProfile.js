import { Card , Avatar, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";
const UserProfile = () => {
    //const UserProfile = ({setIsLoggedIn}) 
    const dispatch = useDispatch();
    const onLogOut = useCallback(
        () => {
            // setIsLoggedIn(false);
            dispatch(logoutAction);
        },[]);
    return (
        <Card
            actions={[
                <div key = "twit">짹짹</div>,
                <div key = "followings">팔로잉</div>,
                <div key = "followings">팔로워</div>
            ]}>
        <Card.Meta
            avatar={<Avatar>ian</Avatar>}
            title = "이안"
        />
        <Button onClick = {onLogOut}>로그아웃</Button>  
        </Card>
    )
}

export default UserProfile;
