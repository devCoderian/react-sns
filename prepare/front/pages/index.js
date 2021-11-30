import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore'

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);
console.log(mainPosts)
//getServerSideProps 이전
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_USER_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePost, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};
//알아서 home보다 먼저 실행된다. 화면을 그리기 전 서버에서 먼저 실행한다.
//매개변수 안에 context가 있는데 context안에 스토어가 들어있다.
//이 부분 실행 결과를 reducer HYDRATE로 보내준다.

//getStaticProps와 getServerSideProps은 별 차이가 없어 보이지만, 빌드 이후 변경가능여부 페이지 들어갈때마다 
//정보가 바뀌면 getServerSideProps, getStaticProps은 블로그 글 처럼 html로 미리 정적으로 파일을 만들어둘수있는 경우
//getStaticProps -> next에서 페이지를 html로 만들어줘서 빠르게 제공 서버에는 무리가 덜 가게 , 블로그 글, 이벤트 글 
//대부분 getServerSideProps
export const getServerSideProps = wrapper.getServerSideProps((context) => {
  
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });

})
export default Home;