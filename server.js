var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();
app.use(bodyParser.json());

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

app.post('/email/', function (req, res) {
    let body = req.body;
    let form = body.form;

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
        from: `"${form.name.value}" <${form.email.value}>`,
        to: 'jack@codeloom.co.uk',
        subject: 'Codeloom Contact Form',
        html: `<p>${form.message.value} ${form.number.value ? `<br />Phone Number: <strong>${form.number.value}</strong>` : null}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        res.json({ sent: !error ? true : false, error });
    });
});

app.get('/downloadCv/', function (req, res) {
    const AWS = require("aws-sdk");
    const s3 = new AWS.S3({
        s3ForcePathStyle: true,
        accessKeyId: env.AWS_KEY,
        secretAccessKey: env.AWS_SECRET,
        region: "eu-west-1"
    });
    let params = { Key: `cv.pdf`, Bucket: `codeloom` };
    let url = s3.getSignedUrl('getObject', params);
    res.json({ url });
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
