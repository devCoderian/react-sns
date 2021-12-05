import { delay,throttle, put, takeLatest, fork, all, call} from "redux-saga/effects";
import axios from "axios";
import { ADD_POST_TO_ME, REMOVE_FOLLOWER_FAILURE, REMOVE_POST_OF_ME} from '../reducers/user'
import shortId from "shortid";
import { LOAD_POSTS_FAILURE,LOAD_POSTS_SUCCESS,LOAD_POSTS_REQUEST,
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS,ADD_COMMENT_REQUEST, 
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
UNLIKE_POST_REQUEST, UNLIKE_POST_FAILURE, UNLIKE_POST_SUCCESS, 
REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
LOAD_POST_FAILURE,LOAD_POST_SUCCESS,LOAD_POST_REQUEST,
UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_REQUEST, LOAD_USER_POSTS_REQUEST, 
LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE
} from "../reducers/post";


function addPostAPI(data){
    // return axios.post('/post', data); //d이름을 주어야 한다.
    return axios.post('/post',data)
}

//사가는 동시에 여러 액션을 디스패치 가능 //어떤 동작이 여러 리듀서에 데이터를 동시에 변경해야 한다면 액션을 여러번 호출
function* addPost(action){
    try{
         //서버가 없기 때문
        // yield delay(1000)
        console.log('addpost')
        const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        //const id = shortId.generate();
        // console.log(result.data)
        yield put({
            type: ADD_POST_SUCCESS,
            // data: {
            //     id:result.data.id,
            //     content:result.data
            // }
            data: result.data,
        });
        //포스트추가할때 유저 리듀서 사용을 위해 필요
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        })
    }catch(err){
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data
        })
    }
}


function uploadImagesAPI(data) {
    return axios.post('/post/images', data);
  }
  
  function* uploadImages(action) {
    try {
      const result = yield call(uploadImagesAPI, action.data);
      yield put({
        type: UPLOAD_IMAGES_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: UPLOAD_IMAGES_FAILURE,
        error: err.response.data,
      });
    }
  }

function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`, data) //post/1/comment -> 게시글 1번에 댓글 작성
} 

function* addComment(action){
    try{
         //서버가 없기 때문
        //yield delay(1000)
        const result = yield call(addCommentAPI,action.data); //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        });
    }catch(err){
        console.error(err)
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
  }
  
  function* loadPost(action) {
    try {
      const result = yield call(loadPostAPI, action.data);
      yield put({
        type: LOAD_POST_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_POST_FAILURE,
        data: err.response.data,
      });
    }
  }

function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);
  }
  
  function* loadPosts(action) {
    try {
      const result = yield call(loadPostsAPI, action.lastId);
      yield put({
        type: LOAD_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_POSTS_FAILURE,
        error: err.response.data,
      });
    }
  }

function likePostAPI(data){
    return axios.patch(`/post/${data}/like`);
}

function* likePost(action){
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
        
    } catch (error) {
        yield put({
            type: LIKE_POST_FAILURE,
            data: error.response.data,
        });
    }
}

function unlikePostAPI(data){
    // return axios.patch(`/post/${data}/unlike`);
    return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action){
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
        
    } catch (error) {
        yield put({
            type: UNLIKE_POST_FAILURE,
            data: error.response.data,
        });
    }
}

function removePostAPI(data){
    return axios.delete(`/post/${data}`); //delete는 데이터 못넣는다.
}

function* removePost(action){
    try {
        const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.response.data,
        });
    }
}


function loadUserPostsAPI(data, lastId) {
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`);
  }
  
  function* loadUserPosts(action) {
    try {
      const result = yield call(loadUserPostsAPI, action.data, action.lastId);
      yield put({
        type: LOAD_USER_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_USER_POSTS_FAILURE,
        data: err.name,
      });
    }
  }

function loadHashtagPostsAPI(data, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
  }
  
  function* loadHashtagPosts(action) {
    try {
      const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
      yield put({
        type: LOAD_HASHTAG_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_HASHTAG_POSTS_FAILURE,
        data: err.response.data,
      });
    }
  }





function* watchLoadPost(){
    
    yield takeLatest(LOAD_POST_REQUEST, loadPost) //주번 , 백번 잘못 눌러도 마지막것만 //동시에 로딩되는 것 중에서만 프론트에서 그렇게 생각한다. 서버에는 두번 저장된다 응답을 취소하는 것
    //yield throttle('ADD_POST_REQUEST' , addPost, 10000); //1분동안 한번만 요청! 중복요청 불가
}


function* watchAddPost(){
    
    yield takeLatest(ADD_POST_REQUEST, addPost) //주번 , 백번 잘못 눌러도 마지막것만 //동시에 로딩되는 것 중에서만 프론트에서 그렇게 생각한다. 서버에는 두번 저장된다 응답을 취소하는 것
    //yield throttle('ADD_POST_REQUEST' , addPost, 10000); //1분동안 한번만 요청! 중복요청 불가
}

function* watchCommentPost(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}


function* watchLikePost(){
    yield takeLatest(LIKE_POST_REQUEST, likePost)
}

function* watchUnLikePost(){
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)
}
function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
  }
function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadUserPosts() {
    yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
}
function* watchLoadHashtagPosts() {
    yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost),
        fork(watchLoadPost),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchRemovePost),
        fork(watchUploadImages),
        fork(watchLoadPosts),
        fork(watchLoadUserPosts),
        fork(watchLoadHashtagPosts)
    ]);
}
