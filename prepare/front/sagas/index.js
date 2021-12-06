import { all, fork } from 'redux-saga/effects'
import postSaga from './post';
import userSaga from './user';

import axios from 'axios';
import { backUrl } from '../config/config';
// axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;
export default function* rootSaga(){
    yield all([
        // saga 쪼개기 전
        // fork(watchLogin), //call이랑은 다름 
        // fork(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
        // fork(watchAddPost) 
        fork(postSaga),
        fork(userSaga)
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