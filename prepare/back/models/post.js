const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // RetweetId
    }, {
      modelName: 'Post',
      tableName: 'posts',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
  }
};
/*
module.exports = (sequelize, DataTypes) =>  {
const Post = sequelize.define('Post', {// MySQL에는 Posts 테이블 저장
        //id가 기본적으로 들어있다.
        content:{
            type: DataTypes.TEXT,
            allowNull: false
        }
        //belongsTo -> 역할
        //UserID : 1 생성
        //RetweetID: 
    },{
        charset: 'utf8mb4', //
        collate: 'utf8mb4_general_ci' //mysql 한글 emoticon 저장 
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); //일대일
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.belongsToMany(db.User,  {through: 'Like', as: 'Likers'}); //좋아요 다대다 관계
        db.Post.belongsTo(db.Post, { as: 'Retweet'}); //리트윗 관계 한게시글이 여러게시글이 리트윗 가능
    };

    return Post;
}
*/