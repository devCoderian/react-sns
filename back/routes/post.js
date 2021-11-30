const express = require('express');
const { Post,Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();
const path = require('path');
const multer = require('multer');


router.post('/', isLoggedIn, async(req, res, next) =>{ 
    //POST / user /saga에서 siginupApi를 통해 들어온다.

    try{
        const post = await Post.create({
            content: req.body.content, //saga에서 이름을 명칭함
            UserId: req.user.id, //passport deselizeUser에서 온다.
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
              model: Image,
            }, {
              model: Comment,
              include: [{
                model: User, // 댓글 작성자
                attributes: ['id', 'nickname'],
              }],
            }, {
              model: User, // 게시글 작성자
              attributes: ['id', 'nickname'],
            }, {
              model: User, // 좋아요 누른 사람
              as: 'Likers',
              attributes: ['id'],
            }]
          })
        res.status(201).json(fullPost);
    }catch(error){
        console.error(error);
    }
});

router.post('/:postId/comment', isLoggedIn, async(req, res, next) =>{ 
    //POST / user /saga에서 siginupApi를 통해 들어온다.
    //주소로 없는 게시글에 댓글을 달거나 할 수 있기때문에
    //있는지 확인해야 한다.
    try{

        const post = await Post.findOne({
            where:{id: req.params.postId }
        });
        if(!post){
            return res.status(403).send('존재하지 않는 게시글입니다.')
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id, 
        });

        const fullComment = await Comment.findOne({
            where:{id: comment.id },
            include:[{
               model:User,
               attributes:['id', 'nickname'] 
            }]
        })

        res.status(201).json(fullComment);
    }catch(error){
        console.error(error);
        next(error);
    }
});


router.patch('/:postId/like', async(req, res, next)=>{ //PATCH
    try {
        const post = await Post.findOne({
                where: {id: req.params.postId},
        })

        if(!post){
           return  res.status(403).send('해당 게시글이 없습니다.')
        }
        await post.addLikers(req.user.id);
        res.json({PostId: post.id, UserId: req.user.id});
    

    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.delete('/:postId/like', isLoggedIn,async(req, res, next)=>{ 
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId},
        })
        if(!post){
            return  res.status(403).send('해당 게시글이 없습니다.')
         }
         await post.removeLikers(req.user.id);
         res.json({PostId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }
})
router.delete('/:postId', isLoggedIn, async(req, res, next)=>{ //DELETE /post
    try {
       await Post.destroy({
           where: {
               id: req.params.postId,
               UserId: req.user.id, //보안 자신의 글만 지울수 있게 하기 위해
            },
       });
       res.json({PostId: parseInt(req.params.postId, 10)});
    } catch (error) {
        console.log(error);
        next(error);
    }
});
/*
multipart로 데이터를 보내면 백엔드에서 데이터를 못받는현상발생 

multer는 app에다도 장착이 가능하지만 라우터마다 장착한다.

어떤 폼은 이미지를 하나만 올릴수도 있고 여러개를 올릴수도 잇기 때문에

어떤폼은 이미지 안올리고 텍스트만 멀티파트로 보낼 수 잇기 때문에

폼마다 전송형식 데이터타입이 다르다.
*/
const upload = multer({

    //정책 옵션 넣어주기
    storage: //어디에 저장할건지
    multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname); //확장자 추출(.png)
            const basename = path.basename(file.originalname, ext); //파일명만 추출
            done(null, basename+ new Date().getTime + ext); //ex -> ian0943749327.png
        }
    }),
    limits: {fileSize: 20* 1024 * 1024}, //20MB 파일 올리는 용량 제한하기
});

//이미지 여러장올릴거여서
//upload.array() input은 하나인데 여러장 올릴수잇을떄
//한장이면 싱글
//json이나 text면 upload.none()
//파일 인풋 자체가 여러개일때는 upload.fills
/*
router.post('/:postId/comment', isLoggedIn,upload.array('image') async(req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id : req.params.postId }
        })
    } catch (error) {
        
    }
})

*/

module.exports = router;
