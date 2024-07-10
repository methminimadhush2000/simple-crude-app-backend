const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

app.use(express.json()) ;//middleware to accept json 
app.use(express.urlencoded({extended: false})); // middleware to accept form data

//routes
app.use('/api/products',productRoute);


mongoose.connect('mongodb+srv://admin:REvo324@backenddb.9ylftwi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
  .then(() => {
    console.log('Connected to database!');
    app.listen( 3000, ()=> {
        console.log('Server is running on port 3000');
    });
})
    .catch(()=>{
        console.log("connection failed!");
    })