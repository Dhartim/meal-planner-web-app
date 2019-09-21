const app = require('./app');
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4')

app.get('/', (req, res)=>{
  const unique = uuid();  
  res.send(`welcome to my api: ${unique}`);
});

app.listen(port, ()=>{
    console.log('running on port '+ port);
});