const wilma = require("wilma");
const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const hostname = 'localhost';
const port = 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

app.post('/login', (req, res)=>{
    async function Response(){
        var username = req.body.username;
        var password = req.body.password;

        var SID = await wilma.LoginWilma('gr189354', 'stPCUyAfA');

        res.send(SID);
    }
    Response();
});

app.listen(port, hostname, () => {
    console.log('The backend is listening at ' + hostname + ':' + port + '!');
});