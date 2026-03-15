const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User",{

 id:{
  type:DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
 },

 nombre:{
  type:DataTypes.STRING
 },

 email:{
  type:DataTypes.STRING
 },

 password:{
  type:DataTypes.STRING
 }

},{
 tableName:"users",
 timestamps:false
});

module.exports = User;