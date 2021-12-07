const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, {
      modelName: 'Hashtag',
      tableName: 'hashtags',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  }
};
/*
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
     //해시태그는 여러개의 포스트를 가질수 있고 게시글도 여러개의 해시태그를 가질 수 있다.
    // 다대다
     db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'}); 
 };

    return Hashtag;
}
*/