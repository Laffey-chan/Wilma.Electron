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
        var username = req.body.username;
        var password = req.body.password;
        var SID = await wilma.LoginWilma(username, password);
        
        res.send(SID);
    }
    Response();
});
app.post('/messageList', (req, res) =>{
    async function Response(){
        let SID = req.body.SID;
        let messageList = await wilma.GetMessages(SID);
        
        res.send(messageList);
    }
    Response();
});

app.listen(port, hostname, () => {
    console.log('The backend is listening at ' + hostname + ':' + port + '!');
});