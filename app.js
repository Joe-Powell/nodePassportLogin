const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 5000;

//BodyParser
app.use(express.urlencoded({ extended: false }));

//DB Config
const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Mongo connected...'))
    .catch(err => console.log(err));



//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users.js'));





app.listen(PORT, console.log(`Server started on port ${PORT}`));