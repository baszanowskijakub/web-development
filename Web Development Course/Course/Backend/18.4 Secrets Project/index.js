import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const secretPassword = "eloelo";

app.use(bodyParser.urlencoded({extended: true}));

function passwordChecker(req, res, next) {
    if (req.method === 'POST' && req.path === '/check') {
        const userPassword = req.body["password"];
        console.log(`Password entered: ${userPassword}`);
        if (userPassword === secretPassword) {
            console.log("Correct!")
            return res.sendFile(__dirname + "/public/secret.html");
        } else {
            console.log("Wrong!")
            return res.redirect("/");
        }
    }
    next();
}

app.use(passwordChecker);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });