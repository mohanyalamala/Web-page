/*document.addEventListener("DOMContentLoaded", function() {
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
});*/


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;
var appliction = "";

app.use(bodyParser.urlencoded({ extended: true }));

function applictionname(req, res, next) {
    console.log(req.body);
    appliction = req.body["submit"] + req.body["pet"];
    next();
}

app.use(applictionname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Sign Up.html");
});

app.post("/submit", (req, res) => {
    res.send('Successfully');

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});