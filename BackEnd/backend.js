const wilma = require("wilma");
const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const hostname = 'localhost';
const port = 3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res)=>{
    async function Response(){
        console.log(req.body)
        var username = req.body.username;
        var password = req.body.password;
        var SID = await wilma.LoginWilma(username, password);

        res.send(SID);
    }
    Response();
});

app.listen(port, hostname, () => {
    console.log('The backend is listening at ' + hostname + ':' + port + '!');
});