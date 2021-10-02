const express = require('express');
const postRouter = require('./routes/post')
const db = require ('./models');
const app = express(); //한번 호출해주어야 한다.
db.sequelize.sync()
.then(()=>{
    console.log('db 연결 성공')
})
.catch(console.error);

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

