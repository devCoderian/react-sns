const express = require('express');
const bcrypt = require('bcrypt')
const { User } = require('../medels'); 
const cors = require('cors');

const router = express.Router();

router.post('/', async(req, res, next) =>{  //post  /user
    //POST / user /saga에서 siginupApi를 통해 들어온다.
    // 비동기 -> bcrypt -> 비동기처리 -> 숫자가 높으면 암호화 보안이 높아짐 단 속도가 낮아짐
    try{

        //email 중복 체크
        const exUser = await User.findOne({
            where:{
                email:req.body.email,
            }
        }); // 있으면 저장
        //없으면 null
        if(exUser){
            //return 을 안 붙이면 밑에 함수가 실행되면서 응답이 두번 되어버려서 오류가 난다.
            return res.status(403).send('이미 사용중인 아이디 입니다. ');
            //header -> body(실제 데이터)에 대한 정보 -> 용량이 어떻고 형식이 어떤지
            //return 에서 router 종료
        }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    await User.create({
        email:req.body.email,
        nickname: req.body.nickname,
        // password: req.body.password 
        //비밀번호를 그대로 저장하면 보안에 위험이 된다.
        //-> 라이브러리 사용 npm i bcrypt
        password: hashedPassword,

    })
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060');
    //차단은 브라우저가 하는건데 허용은 서버가 허용해주어야 한다.
    //모든 서버
    //res.setHeader('Access-Control-Allow-Origin', '*');

    //직접 적어서 해결하기도 하고
    //미들웨어를 사용하기도 한다.
    //npm i cors
    //app.use(cors()); -> app.js
    res.status(200).send('OK');
    }catch (error){
        console.error(error);
        next(error); //error가 발생하면 익스프레스가 한방에 next로 보내기 
        //서버에러라서 status 500
    }
});
// 200 성공
// 300 리다이렉트
// 400 클라이언트 에러
// 500 서버 에러
// ERR_CONNECTION_REFUSED -> 서버 접속이 안된다.
// CORS -> Access header allow origin
// 현재 브라우저가 3060이고 벡엔드 서버가 3065 다른 도메인으로 
// 요청을 보내면 브라우저가 차단해버린다.(CORS ERROR)
// 해결책(CORS를 피하는 방법)
// 1) PROXY 방식-> 브라우저에서 프론트 서버로 요청을 보낸다 프론트에서 벡엔드로 보낸다. 
// 2) Access-Control-Allow-Origin 
// 서버에서 서버는 CORS에러가 안생긴다. ex)프론트(3060) 벡엔드(3065)
module.exports = router;