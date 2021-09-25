import { Button, Form, Input } from 'antd';
import React, { useCallback, useState,  useEffect} from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';

const CommentForm = ({post}) => {
    // const [commentText, setCommentText] = useState('');
    const id = useSelector((state)=> state.user.me?.id);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const dispatch = useDispatch();
    const { addCommentDone, addCommentLoading} = useSelector((state) => state.post);
    useEffect(()=>{
        if(addCommentDone){
            setCommentText(''); //따로 안만들면 서브밋하고 서버 오류날때 쓰던 글 지워짐
        }
      },[addCommentDone])

    // const onChangeCommentText = useCallback((e)=>{
    //     setCommentText(e.target.value);
    // });
    const onSubmitComment = useCallback(
        () => {
            console.log(post.id, commentText);
            dispatch({
                type: ADD_COMMENT_REQUEST,
                data: { content: commentText, userId: id, postId: post.id },
            });
        },
        //게시글은 props 내 아이디는 reducer 댓글은 컴포넌트 스테이트, 
        [commentText, id])
    return (
        <Form onFinish={onSubmitComment}>
             <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                <Button style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1}} 
                type="primary" htmlType="submit" loading= {addCommentLoading}>삐약</Button>
            </Form.Item>
        </Form>
    )
}
CommentForm.propTypes = {
    post: PropTypes.object.isRequired
}

export default CommentForm
