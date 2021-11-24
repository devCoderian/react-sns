import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './_user';
import post from './_post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

//이전 상태와 액션을 통해 다른 상태를 리턴하는 함수
//(이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case 'LOG_IN':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: true,
//                     user: action.data,
//                 }
//             };
//         case 'LOG_OUT':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: false,
//                     user: null,
//                 }
//             };
//         default:
//             return state;
//     }
// }

// export default rootReducer;



// //이전 상태와 액션을 통해 다른 상태를 리턴하는 함수
// //(이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case 'LOG_IN':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: true,
//                     user: action.data,
//                 }
//             };
//         case 'LOG_OUT':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: false,
//                     user: null,
//                 }
//             };
//         default:
//             return state;
//     }
// }
