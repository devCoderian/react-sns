import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers/index'
import { composeWithDevTools }from 'redux-devtools-extension'

const configureStore = () =>{
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ?compose(applyMiddleware(...middlewares))
    :composeWithDevTools(applyMiddleware(...middlewares))
    //데브툴 연결 보안에는 취약
    //개발용 미들웨어 설치 필요 npm i redux-devtools-extension
    const store = createStore(reducer, enhancer);
    //미들웨어는 enhancer를 넣어서 사용가능

    // store.dispatch({
    //     type: 'CHANGE_NICKNAME',
    //     data: '정이안'
    // })
    //dispatch하는 순간 리듀서로 전달된다.
    return store;    
};

//debugging이 true일시 리덕스에 대한 설명 참조 가능
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development' 
});

export default wrapper;