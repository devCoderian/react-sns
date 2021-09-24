const dummyUser = {
    id: 1,
    nickname: '정이안',
    Posts: [],
    Followings: [],
    Followers: [],
  };
  
  export const initialState = {
    isLoggingIn: false, //로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, //로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
  };
  
  export const SIGN_UP = 'SIGN_UP';
  export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
  export const LOG_IN = 'LOG_IN'; // 액션의 이름
  export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
  export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
  export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
  export const LOG_OUT = 'LOG_OUT';
  export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
  export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
  export const LOG_OUT_FAILURE = 'LOG_OUT_SUCCESS';
  export const signUpAction = (data) => {
    return {
      type: SIGN_UP,
      data,
    };
  };
  
  export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
  };
  
  // export const loginAction = (data) => {
  //   return {
  //     type: LOG_IN,
  //     data,
  //   }
  // };
  // export const logoutAction = {
  //   type: LOG_OUT,
  // };
  export const signUp = (data) => {
    return {
      type: SIGN_UP,
      data,
    }
  };

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
          isLoggingIn: true,
          isLoggedIn: false,
        };
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: true,
          
          me: {...action.data, nickname: 'ian'}
        };
      }
      case LOG_IN_FAILURE: {
        return {
          ...state,
          isLoggedIn: false,
          isLoggingIn: false,
        };
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state,
          isLoggingOut: true,
          me: null,
        };
      }
      case LOG_OUT_SUCCESS: {
        return {
          ...state,
          isLoggingOut: false,
          isLoggedIn: false,
          me: null,
        };
      }
      case LOG_OUT_FAILURE: {
        return {
          ...state,
          isLoggingOut: false,
        };
      }
      case SIGN_UP: {
        return {
          ...state,
          signUpData: action.data,
        };
      }
      default: {
        return {
          ...state,
        }
      }
    }
  }; 


  // 사가 적용 전
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