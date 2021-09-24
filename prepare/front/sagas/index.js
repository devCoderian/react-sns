import { all, fork, takeEvery, takeLatest, throttle, delay } from 'redux-saga/effects'
import axios from 'axios'
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

function* login(action){
    
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

function addPostAPI(data){
    return axios.post('/api/post', data)
}

function* addPost(action){
    try{
         //서버가 없기 때문
        yield delay(1000)
        //const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'ADD_POST_FAILUARE',
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
    
        yield takeEvery('LOG_OUT_REQUEST') //takeLatest 써야함 
    
}
function* watchAddPost(){
    
        yield takeLatest('ADD_POST_REQUEST') //주번 , 백번 잘못 눌러도 마지막것만 //동시에 로딩되는 것 중에서만 프론트에서 그렇게 생각한다. 서버에는 두번 저장된다 응답을 취소하는 것
        //yield throttle('ADD_POST_REQUEST' , addPost, 10000); //1분동안 한번만 요청! 중복요청 불가
}
export default function* rootSaga(){
    yield all([
        fork(watchLogin), //call이랑은 다름 
        fork(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
        fork(watchAddPost)
    ]);
}

// const gen = function*(){
//      console.log(1);
//      yield; //yeild에서 멈춘다.
//      console.log(1);
//      yield;
//      console.log(1);
//      yield;
// }
// gen.next();
//해야 실행된다. 호출하고 done이 true가 될때까지 실행가능
//while(true){yield '무힌'}; //기점에서 중단됨 gen.next()로 무한반복 가능
// let i = 0;
// const gen = function*(){
//     while(true){
//         yield i++;
//     }
// }
//이벤트 리스너처럼 특정 지점에서 호출 클릭했을 때 호출 //무한의 이벤트 리스너