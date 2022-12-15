//struktur table

import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const Customer = db.define('customers',{
  nama:DataTypes.STRING,
  telephone:DataTypes.STRING
},{
  freezeTableName : true
});

export default Customer;

(async ()=> {
  await db.sync();
}) ();
