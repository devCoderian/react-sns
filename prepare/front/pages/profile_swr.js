import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR from 'swr';
//swr
const fetcher = (url) => axios.get(url, {})

const Profile = () => {

  const dispatch = useDispatch();
  
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);
  //data, error 둘다 없으면 로딩중 둘중하나면 성공했거나 실패했거나
  const { data:followersData , error:followerError } = useSWR(`http://localhost:3060/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error:followingError } = useSWR(`http://localhost:3060/user/followings?limit=${followingsLimit}`, fetcher)
   //swr전
  /*useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST
    })
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST
    })
  }, [])
*/

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(
    () => {
     setFollowingsLimit((prev) => prev+3);
    },
    [],
  )
  const loadMoreFollowers = useCallback(
    () => {
     setFollowersLimit((prev) => prev+3);
    },
    [],
  )
  if (!me) {
    return '내 정보 로딩중...';
  }
  //리턴이 훅스보다 위에 있을 수는 없다.
  if(followerError || followingError){
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩중 에러가 발생함'
  }



  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        // data={me.Followings} swr전
        data= {followingsData}
        onClickMore = { loadMoreFollowings}
        loading = {!followingsData && !followingError}
      />
      <FollowList
        header="팔로워 목록"
        data= {followersData}
        onClickMore = { loadMoreFollowers}
        loading = {!followerError && !followersData}
      />
    </AppLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('getServerSideProps start');
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  console.log('getServerSideProps end');
  await context.store.sagaTask.toPromise();
});

export default Profile;