var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

var env = require('dotenv').config().parsed;
const nodemailer = require('nodemailer');

app.use(express.static(publicPath));

if (!isProduction) {

  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/dist/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

app.post('/email', function (req, res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
            user: "apikey",
            pass: env.SENDGRID_KEY
        }
    });

    let mailOptions = {
        from: '"Memey" <hello@example.com>', // sender address
        to: 'jack@codeloom.co.uk', // list of receivers
        subject: 'Codeloom Contact Form', // Subject line
        html: '<b>Hello world?</b>' // html body
    };
    //
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // });
    setTimeout(() => res.json({meme: "tasty"}), 2000);
});

app.get('/*', function (req, res) {
     res.sendFile(path.join(__dirname + '/public/index.html'));
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
