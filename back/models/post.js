module.exports = (sequelize, DataTypes) =>  {
const Post = sequelize.define('Post', {// MySQL에는 Posts 테이블 저장
        //id가 기본적으로 들어있다.
        content:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        charset: 'utf8mb4', //
        collate: 'utf8mb4_general_ci' //mysql 한글 emoticon 저장 저장
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.belongsToMany(db.User,  {through: 'Like', as: 'Likers'}); //좋아요 다대다 관계
        db.Post.belongsTo(db.Post, { as: 'Retweet'}); //리트윗 관계 한게시글이 여러게시글이 리트윗 가능
    };

    return Post;
}