/*document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    // Simulate authentication (replace this with your actual authentication logic)
    if (authenticateUser(email)) {
        document.getElementById("loginStatus").textContent = "Login successful!";
    } else {
        document.getElementById("loginStatus").textContent = "Login failed. Please check your email.";
    }
});

// Replace this function with your actual authentication logic (e.g., connecting to a server, checking credentials)
function authenticateUser(email) {
    // You can check credentials against a database, server, or any other authentication method here.
    // For this example, we're using a simple hardcoded check.
    const validEmail = "user@example.com";

    return email === validEmail;
}*/

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
    res.sendFile(__dirname + "/public/login.html");
});

app.post("/submit", (req, res) => {
    res.send('Successfully');

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});