const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//adding body parser to convert our requests to json and  intour apllication
app.use(bodyParser.json());


//import routes
const postsRoute = require('./routes/posts');

//middlewares 
app.use('/posts',postsRoute);

//routes
app.get('/',(req, res) =>{
    res.send('we are on home');

});


//connect to DB

mongoose.connect(
   process.env.DB_CONNECTION  ,
{ useNewUrlParser: true },
()=>console.log('connected to DB!')
)

//listen to server

app.listen(3000);