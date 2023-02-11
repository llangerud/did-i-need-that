const nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;

//Cron can't calculate a set number of days, once a month on the 1st of the month 

//Cron job - pulls a list of all products for each user and emails them a reminder to evaluate if they used it or not
 
//set this to five minutes to run a test

    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: "did_i_need_that@hotmail.com", 
          pass: EMAIL_PW, 
        },
        
      });

    //will need the user_id from purchase to look up the email address to populate the to: line//
    //     transporter.sendMail({
    //     from: '"You" <did_i_need_that@hotmail.com>', 
    //     to: "did_i_need_that@hotmail.com", 
    //     subject: `"Have you used ${product.name}?"`, 
    //     text: `"It's been two weeks since you purchased ${product.name}"`, 
    //     html: `<b>"It's been two weeks since you purchased ${product.name}"<b>`,
    //   });

    module.exports = {transporter};

    