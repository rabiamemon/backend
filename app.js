const express = require('express'); 

const app = express(); 
const mongoose= require('mongoose');
require('dotenv/config')




//connect to db
mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(() => {
    console.log('Connected to DB!');
}).catch((e) => {
    console.log('no connection');
})



app.use(express.json());



//import Routes
const userRoute= require('./routes/users')                

app.use('/users', userRoute)


const bodyParser = require('body-parser'); 
require('dotenv/config');

//Middleware for JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

//Middleware
app.use('/posts', postsRoute);
app.use('/users', authRoute);


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


