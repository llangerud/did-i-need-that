require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port:3306,
    });

// const nodemailer = require ('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: "did_i_need_that@hotmail.com", 
//     pass: process.env.EMAIL_PW, 
//   },
  
// });

module.exports = sequelize;