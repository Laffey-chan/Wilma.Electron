const wilma = require("wilma");
const express = require("express");
const app = express();

const hostname = 'localhost';
const port = 3001;

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