module.exports = (sequelize, DataTypes) =>  {
const User = sequelize.define('User', {// MySQL에는 users 테이블 저장
        //id가 기본적으로 들어있다.
        email:{
            type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, //필수
            unique: true, //고유한 값
            
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, //필수
        }
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci' //mysql 한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like' ,as: 'Liked'}); //좋아요 다대다 관계
        //throug 는 db 테이블 이름 , as는 js에서 사용할 이름
        db.User.belongsToMany(db.User,  {through: 'Follow', as: 'Followers', forienKey: 'FollowingId'}); 
        db.User.belongsToMany(db.User,  {through: 'Follow', as: 'Followings', forienKey: 'FollowerId'}); 
    };

    return User;
}