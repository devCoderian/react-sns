import { all, delay, put, take, takeLatest, takeEvery} from "@redux-saga/core/effects";
import axios from "axios";
function loginAPI(){
    return axios.post('/api/login')
}

function* login(action){
    try{
        //서버가 없기 때문
        yield delay(1000)
        //const result = yield call(loginAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        //dispatch
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_IN_FAILUARE',
            data: err.response.data,
        })
    }
}

function logoutAPI(){
    return axios.post('/api/logout')
}

function* logout(action){
    
    try{
         //서버가 없기 때문
        yield delay(1000)
        //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_OUT_FAILUARE',
            data: err.response.data,
        })
    }
}


//이벤트 리스너 같은 역할을 한다. 단점 1회용 -> 해결하기 ->while
function* watchLogin(){
    while(true){
        yield take('LOG_IN_REQUEST', login) //login이라는 액션이 실행될 때까지 기다리겠다. LOG_IN_REQUEST 액션이 실행되면 login 함수 실행
    }
    // yield takeEvery('LOG_IN_REQUEST', login) -> 보통 이걸쓴다.
}
function* watchLogout(){
    
        yield takeEvery('LOG_OUT_REQUEST', logout) //takeLatest 써야함 
    
}



export default function* userSaga(){
    yield all([
        fork(watchLogin), //call이랑은 다름 
        fork(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
        fork(watchAddPost)
    ]);
}