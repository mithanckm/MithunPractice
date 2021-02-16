var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'mithuninfo94@gmail.com',
        pass: '9844043467'
    }
}));

var mailOptions = {
    from: 'mithuninfo94@gmail.com',
    to: '.com',
    subject: 'Offer Letter',
    text: 'Welocome to MEGRON.com!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
