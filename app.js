const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv/config')

const app = express(); 

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use('/posts', postsRoute)

//ROUTES 
app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connecting to DB 
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => console.log('connected to DB')
);

app.listen(3000); 


