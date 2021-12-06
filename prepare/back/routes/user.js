const express = require('express');
const bcrypt = require('bcrypt')
const { User, Post,Image, Comment } = require('../models'); 
//커스텀 미들웨어 쓰기
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();
const passport = require('passport');

//로그인 안풀리게 만들기
//새로고침할때마다 보이기
router.get('/', async(req, res, next) =>{
    try{   
        if(req.user){ //2)사용자가 있을때만으로 오류 해결
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                  exclude: ['password']
                },
                include: [{
                  model: Post,
                  attributes: ['id']
                }, {
                  model: User,
                  as: 'Followings',
                  attributes: ['id']
                }, {
                  model: User,
                  as: 'Followers',
                  attributes: ['id']
                }]
              })
              console.log(fullUserWithoutPassword)
              return res.status(200).json(fullUserWithoutPassword);
    }else{
        res.status(200).json(null);
    }
       
    }catch(error){
       console.error(error);
       next(error);
    }

});


/*
router.post('/login', passport.authenticate('local',(err, user, info)=>{
    if(err){
        console.error(err);
        //next(err);
    }
    //이렇게 할 경우 req, res, next 못쓴다.
    //미들웨어 확장하기 ->
}));
*/
 //미들웨어 확장하기 -> express의 기법중 하나임
router.post('/login', (req, res, next) =>{
    passport.authenticate('local',(err, user, info)=>{
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async(loginErr)=>{
            //패스포트 에러
            console.error(loginErr)
            if(loginErr){
                return next(loginErr);
            }
            //find한번 더 하는 이유 다른 정보 뺴고 붙여서 보내기 위해
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                  exclude: ['password']
                },
                include: [{
                  model: Post,
                  attributes: ['id']
                }, {
                  model: User,
                  as: 'Followings',
                  attributes: ['id']
                }, {
                  model: User,
                  as: 'Followers',
                  attributes: ['id']
                }]
              })
              console.log(fullUserWithoutPassword)
              return res.status(200).json(fullUserWithoutPassword);
        })
    })(req, res, next);
});


router.post('/', isNotLoggedIn, async(req, res, next) =>{  //post  /user
    //req -> saga -> signUp API 에서 들어온것
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
    //create 테이블안에 데이터를 넣는것
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


// 로그아웃 라우터
router.post('/logout', isLoggedIn, (req, res) =>{
    req.logout();
    req.session.destroy();
    res.send('OK');
})

//닉네임 수정
router.patch('/nickname', isLoggedIn, async(req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,
        },{
            where: {id: req.user.id}
        });

        res.status(200).json({nickname: req.body.nickname})
    } catch (error) {
        
    }
})



router.get('/followers', isLoggedIn, async(req, res, next) =>{
    try {
        const user = await User.findOne({ where: {id: req.user.id }});
        if(!user){
            res.status(403).send('존재하지 않는 유저입니다.')
        }
        const followers = await user.getFollowers({
            limit:parseInt(req.query.limit, 10)
        });
        res.status(200).json(followers);
    } catch (error) {
        console.error(error)
        next(error);
        
    }
});


router.get('/followings', isLoggedIn, async(req, res, next) =>{
    try {
        const user = await User.findOne({ where: {id: req.user.id }});
        if(!user){
            res.status(403).send('존재하지 않는 유저입니다.')
        }
        const followings = await user.getFollowings({
            limit:parseInt(req.query.limit, 10)
        });
        res.status(200).json(followings);
    } catch (error) {
        console.error(error)
        next(error);
        
    }
})
//팔로우 언팔로우
router.patch('/:userId/follow', isLoggedIn, async(req, res, next) =>{ //PATCH /user/1/follow
    try {
        //팔로우할 유저가 있는지 찾아본다.
        const user = await User.findOne({where: {id: req.params.userId}});
        if(!user){
            res.status(403).send('해당 유저가 존재하지 않습니다.')
        }
        //나의 팔로워가 된다.
        await user.addFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)}); //이부분이 action.data가 된다.
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//언팔
router.delete('/:userId/follow', isLoggedIn, async(req, res, next) =>{ //PATCH /user/1/follow
    try {
        //팔로우할 유저가 있는지 찾아본다.
        const user = await User.findOne({where: {id: req.params.userId}});
        if(!user){
            res.status(403).send('해당 유저가 존재하지 않습니다.')
        }
        //나의 팔로워가 된다.
        await user.removeFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)}); //
    } catch (error) {
        console.error(error);
        next(error);
    }
});
//언팔로우
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/2
    try {
      const user = await User.findOne({ where: { id: req.params.userId }});
      if (!user) {
        res.status(403).send('없는 사람을 차단하려고 하시네요?');
      }
      await user.removeFollowings(req.user.id);
      res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

//특정 유저의 게시글

router.get('/:userId', async (req, res, next) => { // GET /user/1
    try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.userId },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      if (fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length; // 개인정보 침해 예방
        data.Followers = data.Followers.length;
        data.Followings = data.Followings.length;
        res.status(200).json(data);
      } else {
        res.status(404).json('존재하지 않는 사용자입니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  
//특정 유저의 게시글

router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts
    try {
      const where = { UserId: req.params.userId };
      if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const posts = await Post.findAll({
        where,
        limit: 10,
        order: [['createdAt', 'DESC']],
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
            order: [['createdAt', 'DESC']],
          }],
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        }, {
          model: Post,
          as: 'Retweet',
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image,
          }]
        }],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      next(error);
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