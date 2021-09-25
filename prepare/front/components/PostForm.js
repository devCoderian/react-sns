import React, { useRef, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_POST_REQUEST, addPostRequestAction } from '../reducers/post';
import useInput from '../hooks/useInput';

import { addPost } from '../sagas/post'

export const PostForm = () => {
    const { imagePaths, postAdded } = useSelector((state) => state.post);
    // const [text, setText] = useState('');
    // useInput으로 변경
    const [text, onChangeText, setText] = useInput('');
    const dispatch = useDispatch();
    const imageInput = useRef();
    const { addPostDone } = useSelector((state) => state.post);  
  useEffect(() => {
    if (addPostDone) {
      setText(''); // 따로 안만들면 서브밋하고 서버 오류날때 쓰던 글 지워짐
    }
    },[addPostDone]);
    const onClickImageUpload = useCallback(() => {
      imageInput.current.click();
    }, [imageInput.current]);
  
  
    // const onChangeText = useCallback((e) => {
    //   setText(e.target.value);
    // }, []);
  
  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    });
    // dispatch(addPostRequestAction(text));
    // // setText('') 따로 빼기
  }, [text]);
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="뭐라적지ㅣㅣㅣ?" />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">업로드</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;