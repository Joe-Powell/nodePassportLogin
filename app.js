const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 5000;

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));


























app.listen(PORT, console.log(`Server started on port ${PORT}`));