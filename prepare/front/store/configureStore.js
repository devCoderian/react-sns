import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

const configureStore = () =>{
    const store = createStore(reducer);
    return store;    
};

//debugging이 true일시 리덕스에 대한 설명 참조 가능
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development' 
});

export default wrapper;