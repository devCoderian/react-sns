module.exports = (sequelize, DataTypes) =>  {
const Hashtag = sequelize.define( 'Hashtag', {// MySQL에는 Hashtags 테이블 저장
        //id가 기본적으로 들어있다.
        name:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },{
        charset: 'utf8mb4', //
        collate: 'utf8mb4_general_ci' //mysql 한글 emoticon 저장 저장
    });
 Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'}); 
 };

    return Hashtag;
}