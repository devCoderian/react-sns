
import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({post}) => {

    // const {me} = useSelector((state) => state.user);
    // const id = me?.id;
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened ] = useState(false);
    const id = useSelector((state) => state.user.me?.id);
    console.log('id',id);
    const onToggleLike = useCallback(() => {
            setLiked((prev) => !prev);
            // setLiked((prev) => !prev); -> false는 true로 true는 false
    },[])
    const onToggleComment = useCallback(
        () => {
            setCommentFormOpened((prev) => !prev);
    },[])

    return (
            <div style = {{marginBottom: 18 }}>
            <Card
                cover = {post.Images[0] && <PostImages images ={post.Images} />}
                actions = {[
                <RetweetOutlined key = "retweet" />,
                liked ?
                    <HeartTwoTone twoToneColor="#eb2f96" key = "heart" onClick={onToggleLike} />
                    : <HeartOutlined key = "comment" onClick={onToggleLike} />,
                <MessageOutlined key ="comment" onClick={onToggleComment} />,
                <Popover key = "more" content = {(
                    <Button.Group>
                        {id && post.User.id === id ? (
                        <>
                        <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                        </>
                        ):<Button>신고</Button>}
                    </Button.Group>
                )}>
                    <EllipsisOutlined />
                </Popover>
                ]}
                >
                    <Card.Meta
                    avatar = {<Avatar>{post.User.nickname[0]}</Avatar>}
                    title = {post.User.nickname}
                    description = {<PostCardContent postData = {post.content} />}
                    />
            </Card>
            {commentFormOpened && 
                <div>
                    <CommentForm post ={post}/>
                    <List
                        header ={`${post.Comments.length}개의 댓글`}
                        itemLayout ="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment 
                                    author = {item.User.nickname}
                                    avatar = {<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content = {item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            }
            {/* <CommentForm />
            <Comments /> */}
                
        </div>
    )
}
PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      User: PropTypes.object,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.any),
      Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
  };
export default PostCard
