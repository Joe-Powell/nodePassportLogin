const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register')
})


// registerhandling
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(name, email, password, password2)
    //res.send('hello'); error whenever you try to send more than one response to the same request errors come

    //validations
    let errors = [];
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
    }

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
        console.log(errors);
        res.render('register', {

            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        res.send('pass');
        console.log('pass');
    }





})














module.exports = router;