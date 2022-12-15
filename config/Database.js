//Membuat koneksi
import { Sequelize } from "sequelize";

const db = new Sequelize('perusahaan_ssb','root','',{
  host: 'localhost',
  dialect: 'mysql'
});

export default db;