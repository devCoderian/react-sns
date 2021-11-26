// import AppLayout from "../components/AppLayout";
// import Head from "next/head";
// import NicknameEditForm from "../components/NicknameEditForm";
// import FollowList from "../components/FollowList";
// import { useSelector } from "react-redux";

// const Profile = () => {
//     // const followerList = [{nickname:'제로초'}, {nickname:'바보'}, {nickname: '노드버드 오피셜'}];
//     // const followingList = [{nickname:'제로초'}, {nickname:'바보'}, {nickname: '노드버드 오피셜'}];
//     const { me } = useSelector((state) => state.user)
//     return(
//         <>
//         <Head>
//             <title>내 프로필 | sns</title>
//         </Head>
//         <AppLayout>
//             <NicknameEditForm />
//             <FollowList header = "팔로잉" data = {me.Followings} />
//             <FollowList header = "팔로워" data = {me.Followers} />
//         </AppLayout>
//         </>
//     )
// }

// export default Profile;

import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
      // const followerList = [{nickname:'제로초'}, {nickname:'바보'}, {nickname: '노드버드 오피셜'}];
    // const followingList = [{nickname:'제로초'}, {nickname:'바보'}, {nickname: '노드버드 오피셜'}];
    const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={me.Followings}
      />
      <FollowList
        header="팔로워 목록"
        data={me.Followers}
      />
    </AppLayout>
  );
};

export default Profile;