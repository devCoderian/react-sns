const express = require('express');
const router = express.Router();

router.post('/', (req, res) =>{ 
    //POST / user /saga에서 siginupApi를 통해 들어온다.
    res.json({ id :1, content: 'hello'});
})

router.delete('/', (req, res)=>{ //DELETE /post
    res.json({ id : 1});
})

module.exports = router;
