
import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PostCard = ({post}) => {

    // const {me} = useSelector((state) => state.user);
    // const id = me?.id;
    const id = useSelector((state) => state.user.me?.id);

    return (
        <div>
            <Card
                cover = {post.Images[0] && <PostImages images ={post.Images} />}
                actions = {[
                <RetweetOutlined key = "retweet" />,
                <HeartTwoTone key = "heart"/>,
                <HeartOutlined key = "comment"/>,
                <MessageOutlined />,
                <Popover key = "more" content = {(
                    <ButtonGroup>
                        <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                        <Button>신고</Button>
                    </ButtonGroup>
                )}>
                    <EllipsisOutlined />
                </Popover>
                ]}
                >
            </Card>
                
        </div>
    )
}
PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.any),
      Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
  };
export default PostCard
