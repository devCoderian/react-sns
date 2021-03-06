import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({postData}) => {
    console.log(postData)
    return (
        <div>
            {/* 사용자 의도가 없으면 리렌더링 될일이 없기때문에 키로 인덱스 사용 가능 key는 똑같은 단어 생성할 수도 있어서*/}
            {postData.split(/(#[^\s#]+)/g).map((v) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link
            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`}
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
    )
}
PostCardContent.prototypes = {
    postData: PropTypes.string.isRequired,
}
export default PostCardContent
