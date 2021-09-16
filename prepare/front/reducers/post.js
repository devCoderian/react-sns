export const initialState = {
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: '정이안',
      },
      content: '첫 번째 게시글',
      Images: [{
        // src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        src:'https://user-images.githubusercontent.com/87194565/133585873-7ac6d6f5-a7d0-4272-8d67-c022c83c53cf.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [{
        User: {
          nickname: 'ian',
        },
        content: 'ㄱㅇㅇ',
      }, {
        User: {
          nickname: 'jungian',
        },
        content: '귀여워...',
      }]
    }],
    imagePaths: [],
    postAdded: false,
  };
  
  const ADD_POST = 'ADD_POST';
  
  export const addPost = {
    type: ADD_POST,
  };
  
  const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '정이안',
    },
    Images: [],
    Comments: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        return {
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  }