const app = require('./app');
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken');

app.get('/', (req, res)=>{
    res.send('welcome to my api');
});

app.listen(port, ()=>{
    console.log('running on port '+ port);
});