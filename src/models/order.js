const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order",{

 id:{
  type:DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
 },

 producto:{
  type:DataTypes.STRING
 },

 precio:{
  type:DataTypes.DECIMAL
 }

},{
 tableName:"orders",
 timestamps:false
});

module.exports = Order;