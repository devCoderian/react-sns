// -> app.js service 본체
const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const postsRouter = require('./routes/posts')
const hashtagRouter = require('./routes/hashtag')
const db = require ('./models'); //index에서 가져오기
const app = express(); //한번 호출해주어야 한다.
const cors = require('cors');
const path = require('path');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');

dotenv.config();

//express에 디비 등록
db.sequelize.sync()
.then(()=>{
    // 서버 실행할 때 디비 시퀄라이즈도 같이된다.
    console.log('db 연결 성공');
    //node app 실행하면 오류가 뜸
    //unknown database react-nodebird
    //npx sequelize db:create -> react-nodebird created
    //시퀄라이즈가 자바스크립트를 보고 sql 구문으로 만들어준다.

    console.log('db 연결 성공')
})
.catch(console.error);

//req body 사용하기 위해
//saga에서 오는 데이터를 해석해서 routes 로 해석 
//미들웨어 위에서 부터 아래로 실행된다. 위치를 여기로 잡아야 함
//라우터 부터 먼저 req.body 넣어줌
//use안에 들어가는 애들을 미들웨어라 한다. 


passportConfig();

// app.use(cors({
//     origin: '*',
//     credentials: false
// }));
//실무에서는  credentials: true
// app.use(cors({
//     origin: 'https://nodebird.com' //진짜 주소만 허용하겠다. 
// }));
//브라우저에서 벡엔드로 직접 요청 날릴떄 cors로 다 허용해버리면 위험하니까(보안)
// app.use(cors({
//     // origin: ['http://localhost:3100', 'reactsns.com', 'http://13.125.234.46/'],
//     origin: ['http://localhost:3100', 'http://www.reactsnspf.p-e.kr'],
//     credentials: true,
//   }));

app.use('/', express.static(path.join(__dirname, 'uploads')));
//프론트에서 어떤 요청이 들어왔는지 확인해준다.

// if(process.env.NODE_ENV === 'production'){
//     app.use(morgan('combined'));
//     app.use(hpp());
//     app.use(halmet());
// }else{
//     app.use(morgan('dev'));
// }
//배포시
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(cors({
      origin: 'http://www.reactsnspf.p-e.kr',
      credentials: true,
    }));
  } else {
    app.use(morgan('dev'));
    app.use(cors({
      origin: true,
      credentials: true,
    }));
  }


//use는 express 서버에 무언가를 장착하는 것
app.use(express.json());  //프론트에서 json형식으로 보냈을 때 json형식의 데이터를 req.body안에 넣어준다.
app.use(express.urlencoded({ extended : true })) //form submit 했을 때 url.encoded 방식으로 데이터가 넘어온다. 해석해줌
//로그인 관련 미들웨어 넣기
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveInitialized: false,
	resave: false,
	secret: process.env.COOKIE_SECRET, 
    cookie: {
        httpOnly: true,
        secure: false,
        domain: process.env.NODE_ENV === 'production' && '.reactsnspf.p-e.kr'
    }
}));
app.use(passport.initialize()); 
app.use(passport.session());

app.use('/posts', postsRouter); //복수 게시글
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);
app.listen(80, () =>{
    console.log('서버 실행중 ')
});

