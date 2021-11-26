const express = require('express');
const { Post,Image, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();


router.post('/', isLoggedIn, async(req, res, next) =>{ 
    //POST / user /saga에서 siginupApi를 통해 들어온다.

    try{
        const post = await Post.create({
            content: req.Post.content,
            UserId: req.user.id,
        });
        const fullPost = await Post.findOne({
            where: {id: post.id},
            includes:[{
                model: Image,
            },{
                model:Comment,
            }]
        })

        res.status(201).json(post);
    }catch(error){
        console.error(error);
    }
});

router.delete('/', (req, res)=>{ //DELETE /post
    res.json({ id : 1});
})

module.exports = router;
