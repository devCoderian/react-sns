import { delay, put, takeLatest, fork, all} from "@redux-saga/core/effects";
import axios from "axios";
import { 
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS,ADD_COMMENT_REQUEST
}from '../reducers/post';

function addPostAPI(data){
    return axios.post('/api/post', data)
}

function* addPost(action){
    try{
         //서버가 없기 때문
        yield delay(1000)
        //const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data
        });
    }catch(err){
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function addCommentAPI(data){
    return axios.post(`/api/post/${data.postid}/comment`, data)
}

function* addComment(action){
    try{
         //서버가 없기 때문
        yield delay(1000)
        //const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        });
    }catch(err){
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}



function* watchAddPost(){
    
    yield takeLatest(ADD_POST_REQUEST, addPost) //주번 , 백번 잘못 눌러도 마지막것만 //동시에 로딩되는 것 중에서만 프론트에서 그렇게 생각한다. 서버에는 두번 저장된다 응답을 취소하는 것
    //yield throttle('ADD_POST_REQUEST' , addPost, 10000); //1분동안 한번만 요청! 중복요청 불가
}

function* watchCommentPost(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost)
    ]);
}
