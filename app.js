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

//ROUTES 
app.get('/', (req, res) => {
    res.send("We are on home");
});







app.listen(3000); 


