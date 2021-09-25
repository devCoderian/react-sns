import shortId from 'shortid';
export const initialState = {
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: '정이안',
      },
      content: '첫 번째 게시글 #해시태그 #테스트 #안녕',
      Images: [{
        id: shortId.generate(), 
        // src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        src:'https://user-images.githubusercontent.com/87194565/133585873-7ac6d6f5-a7d0-4272-8d67-c022c83c53cf.jpg',
      }, {
        id: shortId.generate(), 
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        id: shortId.generate(), 
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [{
        id: shortId.generate(), 
        User: {
          id: shortId.generate(),
          nickname: 'ian',
        },
        content: 'ㄱㅇㅇ',
      }, {
        User: {
          id: shortId.generate(),
          nickname: 'jungian',
        },
        content: '귀여워...',
      }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: false,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: false,
  };
    
  const dummyPost = (data) => ({
    // id: shortId.generate(),
    id:data.id, //사가에서 만들어 보내줌
    content: data.content,
    User: {
      id: 1,
      nickname: '정이안',
    },
    Images: [],
    Comments: [],
  });

  const dummyComment = ( data ) => ({
    id: shortId.generate(),
    content: data,
    User:{
      id:1,
      nickname: '이안'
    }
  });
  
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

    
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
  
  // export const addPostRequestAction = (data) => {
  //   type: ADD_POST_REQUEST,
  //   data
  // };

  // export const addCommentRequestAction = (data) => {
  //   type: ADD_COMMENT_REQUEST,
  //   data
  // };

  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST_REQUEST: {
        return {
          ...state,
          addPostLoading:true,
          addPostDone:false,
          addPostError: null
        };
      }
      case ADD_POST_SUCCESS: {
        return {
          ...state,
          mainPosts: [dummyPost(action.data), ...state.mainPosts],
          addPostLoading:false,
          addPostDone:true,
      }
    }
      case ADD_POST_FAILURE: {
        return {
          ...state,
          addPostDone:false,
          addPostError:action.error
        };
      }
      case ADD_COMMENT_REQUEST: {
        return {
          ...state,
          addCommentLoading:true,
          addCommentDone:false,
          addCommentError: null
        };
      }
      case ADD_COMMENT_SUCCESS: {
        //postform 에서 action.data.content, postId, userId 가 필요함
        //불변성의 핵심 바뀌는 것만 바뀌고 참조를 그대로 유지해줘야 한다.
        const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId)
        const post = {...state.mainPosts[postIndex]};
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        //immer 라이브러리로 간단하게 만들기
        return {
          ...state,
          mainPosts,
          addCommentLoading:false,
          addCommentDone:true,
      }
    }
      case ADD_COMMENT_FAILURE: {
        return {
          ...state,
          addCommentDone:false,
          addCommentError:action.error
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  }