const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use(cors())

//connect to db 
mongoose.connect('mongodb://localhost/superstore', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
},()=> console.log('connected to db'));

// middleware

app.use('/posts',postsRoute);


//routes
app.get('/',(req,res)=>{
    res.send('server is up');
});


app.listen(5000);