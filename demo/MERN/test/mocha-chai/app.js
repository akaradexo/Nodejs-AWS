const express = require('express');
const PORT =8080;
const app = express();

app.get('/', (req, res) =>{
    res.send('This is our main endpoint!');
});

app.use('/user',require('./routes/user'))

app.listen(PORT,()=>{
    console.log("up and running! in port "+PORT )
})