//importing all the packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//dot env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// use the express-static middleware
app.use(express.static("public"));

app.use(cors());
app.use(express.json());

//error handlers
const clientErrorHandler = (err, req, res, next) => {
   if (req.xhr) {
     res.status(500).send({ error: 'Something failed!' })
   } else {
     next(err)
   }
 }
 
 const logErrors = (err, req, res, next) => {
   console.error(err.stack)
   next(err)
 }
 
 const errorHandler = (err, req, res, next) => {
   res.status(500)
   res.render('error', { error: err })
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

//connecting to database (freecodecamp tutorial version)
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
   console.log(`MongoDB database connection established successfully`);
});

//connecting to database (other version)
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//    console.log('Connected to Database!');
// });


//api end points - routers
const productRouter = require('./routes/product-route');
const usersRouter = require('./routes/user-route');

app.use('/products', productRouter);
app.use('/users', usersRouter);

//port listening
app.listen(port, () => {
   console.log(`Server is running on port: http://localhost:${port}`);
});


