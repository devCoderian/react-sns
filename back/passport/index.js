const passport = require('passport');
const local = require('./local'); 
//passport 설정파일
module.exports = () => {
    passport.serializeUser(()=>{

    });
    passport.deserializeUser(()=>{

    });

    local();
}
//app.js로 보내기