import { all, delay, put, take, takeLatest, takeEvery, fork , call} from "redux-saga/effects";
import axios from "axios";
import {
    LOG_IN_REQUEST,LOG_IN_SUCCESS,LOG_IN_FAILURE,
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_FAILURE,
    SIGN_UP_REQUEST,SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
     CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, 
     FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
     UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, LOAD_FOLLOWERS_REQUEST,
      LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE,
       LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE,
       REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_SUCCESS
 
  } from '../reducers/user';
function loginAPI(data){
    return axios.post('/user/login', data);
}
function* login(action){
    console.log('saga login function')
    try{
        const result = yield call(loginAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        //dispatch
        console.log(result)
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        });
    }catch(err){
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logoutAPI(){
    return axios.post('/user/logout')
}

function* logout(){
    
    try{
         //서버가 없기 때문
        //yield delay(1000);
        yield call(logoutAPI) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    }catch(err){
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function signupAPI(data){
    //return axios.post('http://localhost:3060/user', data);
    //return axios.post('/user', data);
    return axios.post('/user', data)
}

function* signup(action){
    
    try{
         //서버가 없기 때문
        //yield delay(1000);
        const result = yield call(signupAPI, action.data);
        //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    }catch(err){
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}


function loadUserAPI(data){
    return axios.get('/user')
}

function* loadUser(action){
    
    try{
         //서버가 없기 때문
        //yield delay(1000);
        const result = yield call(loadUserAPI, action.data);
        //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data
        });
    }catch(err){
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        })
    }
}

function changeNicknameAPI(data){
    return axios.patch('/user/nickname',{ nickname: data })
}

function* changeNickname(action){
    
    try{
         //서버가 없기 때문
        //yield delay(1000);
        const result = yield call(changeNicknameAPI, action.data);
        //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data
        });
    }catch(err){
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        })
    }
}

function followAPI(data){
    return axios.post(`/user/${data}/follow`)
}

function* follow(action){
    
    try{
        const result = yield call(followAPI, action.data);
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data
        });
    }catch(err){
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function unfollowAPI(data){
    return axios.delete(`/user/${data}/unfollow`)
}

function* unfollow(action){
    
    try{
        const result = yield call(unfollowAPI, action.data);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data
        });
    }catch(err){
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function loadFollowersAPI(data){
    return axios.get(`user/followers`, data)
}

function* loadFollowers(action){
    try {
        const result = yield call(loadFollowersAPI, action.data);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data
        });
         }catch(err){
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        })
    }
}

function loadFollowingAPI(data){
    return axios.get(`user/followings`, data)
}

function* loadFollowings(action){
    try {
        const result = yield call(loadFollowingAPI, action.data);
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data
        });
         }catch(err){
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        })
    }
}

function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);
  }
  
  function* removeFollower(action) {
    try {
      const result = yield call(removeFollowerAPI, action.data);
      yield put({
        type: REMOVE_FOLLOWER_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: REMOVE_FOLLOWER_FAILURE,
        error: err.response.data,
      });
    }
  }
  

//이벤트 리스너 같은 역할을 한다. 단점 1회용 -> 해결하기 ->while
function* watchLogin(){
    //while(true){
        yield takeLatest(LOG_IN_REQUEST, login) //login이라는 액션이 실행될 때까지 기다리겠다. LOG_IN_REQUEST 액션이 실행되면 login 함수 실행
    //}
    // yield takeEvery('LOG_IN_REQUEST', login) -> 보통 이걸쓴다.
}
function* watchLogout(){
    
        yield takeEvery(LOG_OUT_REQUEST, logout) //takeLatest 써야함 
    
}

function* watchSignup(){
    yield takeEvery(SIGN_UP_REQUEST, signup);
    // yield takeLatest('SIGN_UP_REQUEST', signup);
}

function* watchLoadUser(){
    yield takeLatest(LOAD_USER_REQUEST, loadUser)
}

function* watchChangeNickname(){
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname)
}

function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, follow)
}
function* watchUnFollow(){
    yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

function* watchLoadFollowers(){
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers)
}
function* watchLoadFollowings(){
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings)
}
function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
  }
  
export default function* userSaga(){
    yield all([
        fork(watchLogin), //call이랑은 다름 
        fork(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
        fork(watchSignup),
        fork(watchLoadUser),
        fork(watchChangeNickname),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
    ]);
}