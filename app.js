const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const { error } = require('console');


const app = express();

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');


app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.render('order');
});

app.post('/send', (req, res) => {
    const output = ` 
        <p>you have a new order request </p>
        <h3>Order Detail </h3>
        <ul>
            <li>Nmae: ${req.body.name}</li>
            <li>Febric: ${req.body.febric}</li>
            <li>Cloths-type: ${req.body.clothstype}</li>
            <li>Cloths-name: ${req.body.clothsname}</li>
            <li>Mobile: ${req.body.mobile}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3></h3>
        
    `;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',        
        secure: false,
        auth: {
            user: 'zaigger5@gmail.com',
            pass: 'Vikash@1998'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {        
        from: 'zaigger5@gmail.com', // sender address
        to: 'vzaigger@gmail.com', // list of receivers
        subject: "Node mailer check", // Subject line
        text: "Hello world?", // plain text body     
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    });
    
});

app.listen(8080, () => console.log('server started...'));
