// -> app.js service 본체
const express = require('express');
const postRouter = require('./routes/post')
const db = require ('./models'); //index에서 가져오기
const app = express(); //한번 호출해주어야 한다.
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

app.use(cors({
    origin: '*',
    credentials: false
}));
//실무에서는  credentials: true
// app.use(cors({
//     origin: 'https://nodebird.com' //진짜 주소만 허용하겠다. 
// }));
//브라우저에서 벡엔드로 직접 요청 날릴떄 cors로 다 허용해버리면 위험하니까(보안)

app.use(express.json()); 
app.use(express.urlencoded({ extended : true })) //form submit 했을 때 해석해줌

app.get('/', (req,res)=>{
    res.send('hello express!')
});

app.get('/posts', (req,res)=>{
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello'},
        {id: 3, content: 'hello'}
    ]) //데이터는 보통 json으로 표현한다. jsom객체를 응답
});

app.use('post', postRouter);

app.listen(3065, () =>{
    console.log('서버 실행중 ')
});

