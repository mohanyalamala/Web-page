document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const email = document.getElementById("email");
    const emailConfirm = document.getElementById("email-confirm");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (email.value !== emailConfirm.value) {
            alert("Email and Confirm Email must match.");
            return;
        }

        if (password.value !== passwordConfirm.value) {
            alert("Password and Confirm Password must match.");
            return;
        }

        // Form is valid; you can submit it to your server here
        alert("successfully!");
        // Add AJAX code to send the data to your server
    });
});


/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Web page/Sign Up.html');
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // You can add code to validate and save the user data here (e.g., to a database).

    // For demonstration purposes, we'll just send a response.
    res.send(`Signup successful for ${username}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});*/



/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();

mongoose.connect('mongodb://localhost/signup-page', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        username,
        email,
        password,
    });

    newUser.save((err) => {
        if (err) {
            console.error(err);
            res.redirect('/signup');
        } else {
            res.redirect('/login'); // Redirect to a login page or wherever you want
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});*/