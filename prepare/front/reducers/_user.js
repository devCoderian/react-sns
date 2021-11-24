const dummyUser =(data) => ({
    ...data,
    id: 1,
    nickname: '정이안',
    Posts: [{id: 1}],
    Followings: [{nickname: 'dksfh'}, {nickname: 'ddsfh'}, {nickname: 'dssksfh'}],
    Followers: [{nickname: 'dksfh'}, {nickname: 'ddsfh'}, {nickname: 'dssksfh'}],
  });
  
  export const initialState = {
    loginLoading: false, //로그인 시도중
    loginDone: false, //로그아웃 시도중
    loginError: false,
   
    logoutLoading: false, //로그인 시도중
    logoutDone: false,
    logoutError: false, //로그아웃 시도중

    signupLoading: false, //로그인 시도중
    signupDone: false,
    signupError: false, //로그아웃 시도중

    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
  };
  
  export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
  export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
  export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

  export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
  export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
  export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

  export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
  export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
  export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

  export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
  export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
  export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

  export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
  export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
  export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

  
  export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
  export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
  export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

  // 게시글 데이터 등록 삭제는 post 리듀서에서만 변경 가능하기 때문에
  //추가 액션 필요 -> 포스트 사가에서 유저 액션 호출 가능
  export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; //내 게시글 추가 액션
  export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // 내 게시글 삭제 액션

  export const signupRequestAction = (data) =>({
    type: SIGN_UP_REQUEST,
    data,
  })

  export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
  });
  
  export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
  });

 
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        console.log('reducer login')
        return {
          ...state,
          loginLoading: true,
          loginError: null,
          loginDone: false
        };
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          loginLoading: false,
          loginDone: true,
          me: action.data
        };
      }
      case LOG_IN_FAILURE: {
        return {
          ...state,
          loginLoading: false,
          loginError: action.error,
        };
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state,
          logoutLoading: true,
          logoutDone: false,
          logoutError: null,
        };
      }
      case LOG_OUT_SUCCESS: {
        return {
          ...state,
          logoutLoading: false,
          logoutDone: true,
          me: null
        };
      }
      case LOG_OUT_FAILURE: {
        return {
          ...state,
          logoutLoading: false,
          logoutError: action.error,
        };
      }
      case SIGN_UP_REQUEST: {
        return {
          ...state,
          signupLoading: true,
          signupDone: false,
          signupError: null,
        };
      }
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          signupLoading: false,
          signupDone: true,
        };
      }
      case SIGN_UP_FAILURE: {
        return {
          ...state,
          signupLoading: false,
          signupError: action.error,
        };
      }
      case CHANGE_NICKNAME_REQUEST:
        // draft.changeNicknameLoading = true;
        // draft.changeNicknameError = null;
        // draft.changeNicknameDone = false;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        // draft.changeNicknameLoading = false;
        // draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        // draft.changeNicknameLoading = false;
        // draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        // draft.me.Posts.unshift({ id: action.data });
       // break;
        return {
          ...state,
          me: {
            ...state.me,
            Posts: [{ id: action.data }, ...state.me.Posts],
          },
        };
      case REMOVE_POST_OF_ME:
        // draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
        //   },
        // };
      default: {
        return {
          ...state,
        }
      }
    }
  }; 


  // 사가 적용 전
  // export const loginAction = (data) => {
  //   return {
  //     type: LOG_IN,
  //     data,
  //   }
  // };
  // export const logoutAction = {
  //   type: LOG_OUT,
  // };


  
  // export const signUp = (data) => {
  //   return {
  //     type: SIGN_UP_REQUEST,
  //     data,
  //   }
  // };

  // export const signUpAction = (data) => {
  //   return {
  //     type: SIGN_UP_REQUEST,
  //     data,
  //   };
  // };

  // export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case LOG_IN: {
  //       return {
  //         ...state,
  //         isLoggedIn: true,
  //         me: action.data,
  //       };
  //     }
  //     case LOG_OUT: {
  //       return {
  //         ...state,
  //         isLoggedIn: false,
  //         me: null,
  //       };
  //     }
  //     case SIGN_UP: {
  //       return {
  //         ...state,
  //         signUpData: action.data,
  //       };
  //     }
  //     default: {
  //       return {
  //         ...state,
  //       }
  //     }
  //   }
  // };