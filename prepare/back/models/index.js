const Sequelize = require('sequelize');
const comment = require('./comment');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
/*
const Sequelize = require('sequelize');
const env  = process.env.NODE_ENV || 'development'; //환경변수 development
//config 파일 안 development 배포시 product로 변환
const config = require('../config/config')[env]; //config 파일 json안 development붙임
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
//노드랑 mysql을 연결해줌 


//만든 모델들 불러오기
db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);

// require 하면서 함수를 실행하면서 모델이 등록이 됨

//반복문 돌면서 sequelize에서 모델 등록 
//associate해서 관계들 연결해줌
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    //db[user].associate
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/